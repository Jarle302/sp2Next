
import React from "react";
import type { Metadata } from "next";
export const metadata: Metadata = {


    title: "Login | Collection Chest",
    description: "Collection Chest - View and manage your profile. Explore your bidding history, saved collectibles, and more. Personalize your collection journey today.",};

    export default function Profile({ children}:{children:React.ReactNode}) {
        return (
            <div>
                
                {children}
            </div>
        )
    }