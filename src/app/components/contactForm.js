'use client'

export default function contactForm() {
    return (
        <section className="contact my-16">
            <div className="container flex flex-col md:flex-row justify-between columns-2">
                <div className="md:w-4/12 w-full">
                    <h1 className="text-6xl font-bold leading-snug text-transparent bg-clip-text bg-contact-gradient bg-90 lg:text-5xl lg:leading-tight xl:leading-tight">Get in touch!</h1>
                    <p className="mt-6">Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get back to you in the next 48 hours.</p>
                </div>
                <div className="md:w-6/12 w-full">
                    <form action="POST" className="flex flex-col gap-9">
                        <div className="form-field">
                            <label>Name</label>
                            <input type="text" required/>
                        </div>
                        <div className="form-field">
                            <label>Email</label>
                            <input type="Email" required/>
                        </div>
                        <div className="form-field">
                            <label>Current Website (optional)</label>
                            <input type="url" />
                        </div>
                        <div className="form-field">
                            <label>Budget</label>
                            <input type="text" required/>
                        </div>
                        <div className="form-field">
                            <label>Tell me a bit more about what you're looking for</label>
                            <textarea name="" required ></textarea>
                        </div>
                        <div className="form-field items-start">
                            <input type="submit" value="Submit" className="py-2.5 px-10 bg-custom-purple rounded-lg" />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}