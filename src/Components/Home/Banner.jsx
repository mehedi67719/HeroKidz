import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex-1 space-y-5'>
                <h2 className='text-5xl font-bold'>আপনার শিশুকে একটি সুন্দর <br /> <span className='text-primary'>ভবিষ্যাত দিন</span></h2>
                <p>Buy Every toy with up to 15% Discount</p>
                <button className='btn btn-primary btn-outline'>Explore Products</button>
            </div>
            

            <div className='flex-1'>
                <Image alt='banner image' width={700} height={550} src={'/assets/hero.png'}/>
            </div>
        </div>
    );
};

export default Banner;