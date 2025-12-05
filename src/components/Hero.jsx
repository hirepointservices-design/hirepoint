
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

const slides = [
  { id:1, title:'Skill-based Training', subtitle:'Industry aligned programs for employability', img:'/assets/slide1.jpg' },
  { id:2, title:'Apprenticeship Programs', subtitle:'NAPS & NATS registered training', img:'/assets/slide2.jpg' },
  { id:3, title:'Placement Support', subtitle:'We connect learners to employers', img:'/assets/slide3.jpg' },
]

export default function Hero(){
  const [index, setIndex] = useState(0)

  useEffect(()=>{
    const t = setInterval(()=> setIndex(i=> (i+1)%slides.length), 5000)
    return ()=> clearInterval(t)
  },[])

  return (
    <section id="home" className="relative">
      <div className="relative overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div key={slides[index].id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.8}} className="h-[420px] flex items-center">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{slides[index].title}</h1>
                <p className="text-lg text-slate-700 mb-6">{slides[index].subtitle}</p>
                <div className="flex gap-4">
                  <a href="#contact" className="bg-[var(--HirePoint-teal)] text-white px-5 py-3 rounded-md font-semibold">Apply Now</a>
                  <a href="#services" className="px-5 py-3 rounded-md border font-semibold">Our Programs</a>
                </div>
              </div>
              <div>
                <div className="w-full h-80 rounded-2xl hero-slide" style={{backgroundImage:`url(${slides[index].img})`}}></div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
        {/* Indicators */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-2">
          {slides.map((s,i)=> (
            <button key={s.id} onClick={()=>setIndex(i)} className={`w-3 h-3 rounded-full ${i===index ? 'bg-[var(--HirePoint-teal)]' : 'bg-white/60'} border`}></button>
          ))}
        </div>
      </div>
    </section>
  )
}
