import React, { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  const submit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)

    const name = fd.get("name")
    const phone = fd.get("phone")
    const email = fd.get("email")
    const city = fd.get("city")
    const message = fd.get("message")

    const text = `New Enquiry%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
City: ${city}%0A
Message: ${message}`

    window.open(
      `https://wa.me/918792921246?text=${text}`,
      "_blank"
    )

    setStatus("Redirecting to WhatsApp…")
    e.target.reset()
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>

      {/* Contact Info Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {/* Call Us */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <i className="fa fa-phone text-3xl mb-4 text-[var(--HirePoint-teal)]"></i>
          <h6 className="font-semibold mb-1">Call Us</h6>
          <div>Phone: 8792921246</div>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <i className="fa fa-map-marker text-3xl mb-4 text-[var(--HirePoint-teal)]"></i>
          <h6 className="font-semibold mb-1">Address</h6>
          <div className="text-center">
            No.18 Ground floor Anekalappa matta lane <br />
            Siddana Lane Cubbonpete, Bengaluru - 560002
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <i className="fa fa-envelope text-3xl mb-4 text-[var(--HirePoint-teal)]"></i>
          <h6 className="font-semibold mb-1">Email</h6>
          <div>
            <a
              href="mailto:hirepointservices@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[var(--HirePoint-teal)] transition"
            >
              hirepointservices@gmail.com
            </a>
          </div>
        </div>

        {/* Working Hours */}
        <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
          <i className="fa fa-clock-o text-3xl mb-4 text-[var(--HirePoint-teal)]"></i>
          <h6 className="font-semibold mb-1">Working Hours</h6>
          <div className="text-center">
            9 AM to 6 PM (Monday to Friday) <br />
            9 AM to 2 PM (on Saturday’s)
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <h5 class="text-3xl font-bold mb-8 font-bold">Reach us</h5>
      <form
        onSubmit={submit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow"
      >
        <input name="name" required placeholder="Full name" className="border p-3 rounded" />
        <input name="phone" required placeholder="Phone" className="border p-3 rounded" />
        <input name="email" placeholder="Email" className="border p-3 rounded" />
        <input name="city" placeholder="City" className="border p-3 rounded" />

        <textarea
          name="message"
          placeholder="Message"
          className="border p-3 rounded md:col-span-2"
          rows="4"
        />

        <div className="md:col-span-2 flex gap-4">
          <button
            type="submit"
            className="bg-[var(--HirePoint-teal)] text-white px-6 py-3 rounded-md font-semibold flex-1"
          >
            Send via WhatsApp
          </button>
          <button
            type="reset"
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-md font-semibold flex-1"
          >
            Reset
          </button>
        </div>

        {status && (
          <div className="md:col-span-2 text-sm text-slate-600">
            {status}
          </div>
        )}
      </form>
    </section>
  )
}
