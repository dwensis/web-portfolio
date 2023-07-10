'use client'

import Image from 'next/image'

export default function Hero() {
    return (
        <section className="about-me my-16">
            <div className="container flex flex-col lg:flex-row">
                <div className="flex items-center hidden md:block justify-center w-full lg:w-1/2">
                    {/* <Image
                        src={heroImage}
                        alt="hero-image"
                        height={460}
                        blurDataURL="data:..." automatically provided
                        placeholder="blur" // Optional blur-up while loading
                    /> */}
                </div>
                <div className="flex items-center w-full lg:w-1/2">
                    <div className="max-w-2xl mb-8">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:leading-tight dark:text-white">
                            About me
                        </h1>
                        <p className="py-5 text-lg leading-normal text-gray-500 dark:text-gray-300">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam atque cumque aliquid quaerat ex itaque fuga distinctio reprehenderit suscipit dolorem.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
