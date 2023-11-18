"use client"
import Button from "../ui/components/Button";

export default function Contact() {

    return (
        <main className="max-w-[1300px] p-[40px] flex justify-center">
            <div className="w-full  m-[40px] p-5 text-orange-100 bg-gray-600 flex flex-col gap-8">
                <h1 className="custom-responsive-font">Contact</h1>
                <div className="flex flex-wrap gap-[30px]">
                    <form className="flex flex-col w-[247px] h-[286px] custom-gray p-2">
                        <div className=" flex flex-col">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div className=" flex flex-col">
                            <label htmlFor="subject">Subject</label>
                            <input type="text" id="subject" name="subject" />
                        </div>
                        <div className=" flex flex-col">
                            <label htmlFor="message">message</label>
                            <textarea name="message" id="message" cols={30} rows={5}></textarea>
                            <Button click={() => { console.log("test") }}>Send</Button>
                        </div>

                    </form>

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
