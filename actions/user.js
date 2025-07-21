"use server";
import {auth} from "@clerk/nextjs/server";
import { db } from "@/lib/prisma";
import { generateAIInsights } from "./dashboard";


export async function updateUser(data) {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId,
            }
        });
        if (!user) throw new Error("User not found");

        const result = await db.$transaction(
            async (tx) => {
                // Find if the industry exists
                let industryInsight = await tx.industryInsight.findUnique({
                    where: {
                        industry: data.industry,
                    },
                });
                
                // If industry doesn't exist, create it with default values
                if (!industryInsight) {
                    try {
                        const insights = await generateAIInsights(data.industry);
                        industryInsight = await db.industryInsight.create({
                            data: {
                                industry: data.industry,
                                ...insights,
                                demandLevel: (insights.demandLevel || "HIGH").toUpperCase(),
                                marketOutlook: (insights.marketOutlook || "POSITIVE").toUpperCase(),
                                nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                            },
                        });
                    } catch (aiError) {
                        console.error("AI insights generation failed:", aiError);
                        // Create with default values if AI fails
                        industryInsight = await db.industryInsight.create({
                            data: {
                                industry: data.industry,
                                salaryRanges: [],
                                growthRate: 5.0,
                                demandLevel: "MEDIUM",
                                topSkills: [],
                                marketOutlook: "NEUTRAL",
                                keyTrends: [],
                                recommendedSkills: [],
                                nextUpdate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
                            },
                        });
                    }
                }
                
                // Update the user
                const updatedUser = await tx.user.update({
                    where: {
                        id: user.id,
                    },
                    data: {
                        industry: data.industry,
                        experience: data.experience,
                        bio: data.bio,
                        skills: data.skills,
                    },
                });
                return { updatedUser, industryInsight };
            }, {
                timeout: 10000,
            }
        );
        return { success: true, ...result };
    } catch (error) {
        console.error("Error updating user and industry:", error.message);
        throw new Error("Failed to update profile: " + error.message);
    }
}

export async function getUserOnboardingStatus() {
    try {
        const { userId } = await auth();
        if (!userId) throw new Error("Unauthorized");

        const user = await db.user.findUnique({
            where: {
                clerkUserId: userId,
            },
            select: {
                industry: true,
            },
        });
        
        if (!user) throw new Error("User not found");
        
        return {
            isOnboarded: !!user?.industry,
        };
    } catch (error) {
        console.error("Error checking user onboarding status:", error.message);
        return { isOnboarded: false };
    }
}
