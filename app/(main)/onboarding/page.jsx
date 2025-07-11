import React from 'react'
import { industries } from "@/data/industries";
import OnboardingForm from "./_components/onboarding-form";
import { redirect } from 'next/navigation';
import { getUserOnboardingStatus } from "@/actions/user"; 

const OnboardingPage = async () => {
    const { isOnboarded } = await getUserOnboardingStatus();
    if(isOnboarded) {
        redirect('/dashboard');
    }
    return(
         <main>
        <OnboardingForm industries={industries}/>
    </main>
    )
}
export default OnboardingPage;