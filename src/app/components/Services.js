'use client'

export default function Services() {
    return (
        <section className="services my-16">
            <div className="container">
                <h2 className="text-6xl font-bold leading-snug tracking-tight text-gray-800 lg:text-5xl lg:leading-tight xl:leading-tight dark:text-white">Services</h2>
                <div className="flex flex-col mt-10">
                    <a href="/services" className="group border-y-2 border-solid border-white py-10 pr-14 flex items-center justify-between">
                        <h3 className="text-5xl bg-clip-text bg-200 bg-end bg-gradient overflow-hidden leading-normal transition-all text-transparent group-hover:bg-start">Web Development</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 transition-all group-hover:rotate-45">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                    <a href="/services" className="group border-y-2 border-solid border-white py-10 pr-14 flex items-center justify-between">
                        <h3 className="text-5xl bg-clip-text bg-200 bg-end bg-gradient overflow-hidden leading-normal transition-all text-transparent group-hover:bg-start">Web Design</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 transition-all group-hover:rotate-45">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                    <a href="/services" className="group border-y-2 border-solid border-white py-10 pr-14 flex items-center justify-between">
                        <h3 className="text-5xl bg-clip-text bg-200 bg-end bg-gradient overflow-hidden leading-normal transition-all text-transparent group-hover:bg-start">SEO & Website Optimization</h3>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-24 h-24 transition-all group-hover:rotate-45">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
