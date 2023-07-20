'use client'

import Image from 'next/image'
import placeholderImg from '../../../public/placeholder_image.jpg'

export default function textImage({title, description, image, reverse}) {
    return (
        <section className="hero-bannner my-16">
            <div className={`container flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                <div className="flex items-center w-full lg:w-1/3 ">
                    <div className="max-w-2xl mb-8">
                        <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:leading-tight dark:text-white">
                            { title }
                        </h1>
                        <p className="py-5 text-lg leading-normal text-gray-500 dark:text-gray-300">
                            { description }
                        </p>

                        <div className="flex flex-row items-start sm:space-x-4 sm:items-center sm:flex-row mt-4">
                            {/* <a
                                href="/portfolio"
                                target="_blank"
                                rel="noopener"
                                className="px-4 py-2 text-base font-medium text-center text-white bg-custom-purple rounded-md">
                                Check my projects
                            </a>
                            <a
                                href="/contact"
                                target="_blank"
                                rel="noopener"
                                className="px-4 py-2 text-base font-medium text-center text-white">
                                Get in touch
                            </a> */}
                        </div>
                    </div>
                </div>
                <div className="flex items-center hidden md:block justify-center w-full lg:w-2/3">
                    <Image
                        src={image ? image : placeholderImg}
                        alt="hero-image"
                        layout="responsive"
                        width="500"
                        height="500"
                        blurDataURL="data:..." automatically provided
                        placeholder="blur" // Optional blur-up while loading
                    />
                </div>
            </div>
        </section>
    )
}
