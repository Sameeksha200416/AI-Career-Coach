import React from 'react'
import { redirect } from 'next/navigation';
import { getUserOnboardingStatus } from '@/actions/user'; 
import DashboardViewWrapper from "./_components/DashboardViewWrapper";
import { getIndustryInsights } from '@/actions/dashboard'; 

const IndustryInsightsPage = async () => {

    const { isOnboarded } = await getUserOnboardingStatus();
    const insights = await getIndustryInsights();
    if(!isOnboarded) {
        redirect('/onboarding');
    }

    return <div className="container mx-auto">
        <DashboardViewWrapper insights={insights} />
    </div>;
};
export default IndustryInsightsPage;