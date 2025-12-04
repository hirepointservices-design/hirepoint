
import React, {useState} from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)
  const submit = async (e) => {
    e.preventDefault()
    const fd = new FormData(e.target)
    const res = await fetch('/api/lead', { method:'POST', body: fd })
    const j = await res.json()
    if(j.ok) { setStatus('Saved'); e.target.reset() } else setStatus('Error: '+(j.message||res.statusText))
  }

  return (
    <section id="contact" className="mt-10">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
      <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-6 rounded-2xl shadow">
        <input name="name" required placeholder="Full name" className="border p-3 rounded" />
        <input name="phone" required placeholder="Phone" className="border p-3 rounded" />
        <input name="email" placeholder="Email" className="border p-3 rounded" />
        <input name="city" placeholder="City" className="border p-3 rounded" />
        <textarea name="message" placeholder="Message" className="border p-3 rounded md:col-span-2" rows="4"></textarea>
        <button className="bg-[var(--HirePoint-teal)] text-white px-6 py-3 rounded-md font-semibold md:col-span-2">Send Message</button>
        {status && <div className="md:col-span-2 text-sm text-slate-600">{status}</div>}
      </form>
    </section>
  )
}
