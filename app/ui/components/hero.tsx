import { playfair, lato } from '../fonts/fonts';
import Button from './Button';
import Carousel from "./Carusell";
import Image from 'next/image';

export default function hero() {
    return (
        <section className="flex gap-10 justify-between flex-wrap">
            <div className='min-w-[300px] flex-1  flex gap-3 flex-col justify-center'>
                <h1 className={`${playfair.className} font-bold text-red-200 fs-3 text-4xl`}>Collective chest</h1>
                <h2 className={`${lato.className} font-bold w-[366px] text-orange-300 text-3xl`}>Shared Passion, Exceptional Finds</h2>
                <p className='text-gray-600'>Explore <strong>CommunityChest</strong> for a <em>fun and easy</em> auction experience! Find <strong>unique art</strong>, <em>vintage treasures</em>, and more in our lively online community. Start your treasure hunt with us <strong>today</strong>!
                </p>
                <div className='mt-8 flex gap-3'>
                    <Button>Start bidding</Button>
                    <Button isSecondary={true}>New Listing</Button>

                </div>
            </div>
            <Carousel />
        </section>
    )
}