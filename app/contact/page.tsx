import Button from "../ui/components/Button";
import type { Metadata } from "next";

export const metadata: Metadata = {


    title: "Contact us | Collection Chest",
    description: "Collection Chest - Contact us for any queries or support. We're here to help you with your collection journey. Reach out to us today.",}

export default function Contact() {

    return (
        <main className="max-w-[1300px]  md:p-[40px] flex justify-center">
            <div className="w-full  mt-[40px] p-5 text-orange-100 bg-gray-600 flex flex-col gap-8">
                <h1 className="custom-responsive-font">Contact</h1>
                <div className="flex flex-wrap gap-[30px]">
                  

                    <div className="w-[247px] h-[286px] custom-gray p-2">
                        <p><strong>Address:</strong></p>
                        <p><em>Collection Chest Headquarters</em></p>
                        <p>1234 Treasure Lane</p>
                        <p>Auction City, Discovery 56789</p>

                        <p><strong>Phone:</strong></p>
                        <p>1-800-555-CHEST (1-800-555-2437)</p>

                        <p><strong>Email:</strong></p>
                        <p><a href="mailto:support@collectionchest.com">support@collectionchest.com</a></p>
                    </div>
                    <div className="w-[247px] h-[286px] custom-gray p-2">
                        <p><strong>Customer Service Hours:</strong></p>
                        <p>Monday - Friday: 9:00 AM to 6:00 PM</p>
                        <p>Saturday: 10:00 AM to 4:00 PM</p>
                        <p><s>Closed on Sundays and Public Holidays</s></p>
                    </div>
                    <div className="w-[247px] h-[286px] custom-gray p-2">
                        <p><strong>Social Media</strong></p>
                        <p>Facebook: <a href="https://www.facebook.com/CollectionChest" target="_blank">@CollectionChest</a></p>
                        <p>Twitter: <a href="https://twitter.com/CollectionChest" target="_blank">@CollectionChest</a></p>
                        <p>Instagram: <a href="https://www.instagram.com/collection_chest" target="_blank">@collection_chest</a></p>
                    </div>

                </div>
            </div>

        </main >
    )
}
