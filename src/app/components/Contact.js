'use client'

export default function Contact() {
    return (
        <section className="contact my-16">
            <div className="container">
                <div className="bg-contact-gradient p-12 rounded-b-5xl min-h-[500px] flex items-center justify-center flex-col">
                    <h2 className="text-5xl md:text-6xl max-w-3xl mx-auto font-bold leading-snug tracking-tight text-center text-gray-800 lg:leading-tight dark:text-white mb-6">
                        Interested in working together?
                    </h2>
                    <a href="/contact" className="group text-white text-2xl flex justify-center items-center gap-2 hover:underline">
                        Contact me
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 transition-all group-hover:rotate-45">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    )
}
