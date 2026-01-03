"use client";

import React, { useRef } from "react";
import { useRouter } from "next/navigation";
import { places } from "../../data/places";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowLeft, MapPin, Play, ShoppingBag, Music, Users, Heart
} from "lucide-react";
import Link from "next/link";

export default function BomboluluPage() {
  const router = useRouter();
  const place = places.find((p) => p.id === "bombolulu-workshop");

  if (!place) {
    return <div className="h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
  }

  // Refs for scroll animations
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="bg-[#1a0f0a] min-h-screen text-white font-sans selection:bg-orange-500 selection:text-white">
      
      {/* -------------------------------------------------------
          SECTION 1: THE IMPACT HERO (GTA Style Reveal)
      -------------------------------------------------------- */}
      <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        {/* Nav */}
        <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center mix-blend-difference">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-orange-400 transition-colors">
            <ArrowLeft size={24} /> <span className="text-sm font-bold tracking-widest uppercase">Back to Map</span>
          </Link>
          <div className="text-orange-500 font-black tracking-[0.2em] text-sm">EXPLORE MSA</div>
        </div>

        {/* Dynamic Background */}
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#1a0f0a] z-10" />
           <motion.img 
             initial={{ scale: 1.2 }}
             animate={{ scale: 1 }}
             transition={{ duration: 2.5, ease: "easeOut" }}
             src={place.poster} 
             className="w-full h-full object-cover"
           />
        </div>

        {/* Text Explosion */}
        <div className="relative z-20 text-center px-4">
          <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="mb-4 inline-block px-4 py-1 border border-orange-500/50 rounded-full bg-black/40 backdrop-blur-md"
          >
             <span className="text-orange-400 text-xs font-bold tracking-widest uppercase">Culture • Art • Rhythm</span>
          </motion.div>
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Custom bezier for "snap" feel
            className="text-6xl md:text-9xl font-black uppercase tracking-tighter text-white mb-6 leading-[0.85]"
          >
            Bombo<span className="text-orange-600">lulu</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-xl text-gray-300 max-w-xl mx-auto font-medium"
          >
            Where disability is not inability. <br/> Prepare to be moved.
          </motion.p>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
           animate={{ y: [0, 10, 0] }}
           transition={{ repeat: Infinity, duration: 2 }}
           className="absolute bottom-10 z-20"
        >
           <div className="w-[1px] h-16 bg-gradient-to-b from-orange-500 to-transparent"></div>
        </motion.div>
      </section>

      {/* -------------------------------------------------------
          SECTION 2: SCROLLYTELLING (The "Unboxing" Experience)
      -------------------------------------------------------- */}
      <div ref={targetRef} className="relative">
        
        {place.storyChapters?.map((chapter, index) => (
          <section key={index} className="h-screen w-full flex items-center justify-center sticky top-0 overflow-hidden">
            
            {/* Background Image changes per chapter */}
            <div className="absolute inset-0 z-0">
               <img src={chapter.image} className="w-full h-full object-cover brightness-[0.3]" alt={chapter.title} />
               {/* Vignette */}
               <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#1a0f0a]" />
            </div>

            {/* Content Card */}
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 items-center">
               <motion.div 
                 initial={{ opacity: 0, x: -50 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8 }}
                 className="hidden md:block"
               >
                 <img 
                    src={chapter.image} 
                    className="rounded-lg rotate-3 shadow-2xl border-4 border-white/5 grayscale hover:grayscale-0 transition-all duration-700" 
                    alt="Detail"
                 />
               </motion.div>

               <motion.div 
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="md:pl-12"
               >
                 <div className="flex items-center gap-4 mb-6">
                    <span className="text-6xl font-black text-white/10">{`0${index + 1}`}</span>
                    <div className="h-[2px] w-20 bg-orange-600"></div>
                    <span className="text-orange-500 font-bold tracking-widest uppercase">{chapter.title}</span>
                 </div>
                 <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{chapter.heading}</h2>
                 <p className="text-xl text-gray-300 leading-relaxed border-l-2 border-white/20 pl-6">
                   {chapter.text}
                 </p>
               </motion.div>
            </div>
          </section>
        ))}

      </div>

      {/* -------------------------------------------------------
          SECTION 3: THE PULSE (Video Experience)
      -------------------------------------------------------- */}
      <section className="py-32 bg-[#1a0f0a] relative overflow-hidden">
         {/* Rhythm visualizer rings */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-orange-500/20 rounded-full animate-ping [animation-duration:3s]"></div>
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-orange-500/30 rounded-full animate-ping [animation-duration:3s] [animation-delay:0.5s]"></div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <Music className="w-12 h-12 text-orange-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-6xl font-black mb-12 uppercase tracking-tight">Feel the Beat</h2>
            
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(234,88,12,0.3)] border border-orange-500/30 group">
               {place.videoUrls[0] && (
                 <video 
                   src={place.videoUrls[0]} 
                   controls 
                   className="w-full h-full object-cover"
                 />
               )}
               {/* Custom Play Button Overlay (fades out on play) */}
               <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:scale-110 transition-transform duration-500">
                  <div className="w-20 h-20 bg-orange-600/90 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm">
                    <Play fill="white" className="ml-1" />
                  </div>
               </div>
            </div>
            <p className="mt-6 text-gray-400">Recorded live at the Cultural Centre</p>
         </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 4: THE SHOP (Interactive Grid)
      -------------------------------------------------------- */}
      <section className="py-24 bg-black">
        <div className="max-w-[1400px] mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-8">
              <div>
                <h3 className="text-orange-500 font-bold tracking-widest text-sm mb-2">THE MARKETPLACE</h3>
                <h2 className="text-5xl font-bold">Support the Makers</h2>
              </div>
              <p className="text-gray-400 max-w-sm text-right mt-6 md:mt-0">
                Every purchase goes directly to housing, medical aid, and salaries for the artisans.
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
              {place.imageUrls.map((img, idx) => {
                 // Skip the first few images we used in story chapters to avoid repetition
                 if (idx < 2) return null;
                 
                 const isWide = idx === 6 || idx === 9;
                 return (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ margin: "-50px" }}
                     className={`relative aspect-square group overflow-hidden ${isWide ? 'md:col-span-2 aspect-[2/1]' : ''}`}
                   >
                     <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     
                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                        <ShoppingBag className="text-orange-500 mb-2" />
                        <p className="text-white font-bold text-lg">Handcrafted Souvenir</p>
                        <p className="text-gray-300 text-sm">
                          {place.imageCaptions?.[img] || "Made with love in Mombasa"}
                        </p>
                     </div>
                   </motion.div>
                 );
              })}
           </div>
        </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 5: 360 & CTA
      -------------------------------------------------------- */}
      <section className="py-20 bg-[#1a0f0a] border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto px-6 items-center">
           <div>
             <h2 className="text-4xl font-bold mb-6">Step Inside the Gates</h2>
             <p className="text-gray-400 mb-8 text-lg">
               Before you visit, take a look at the entrance where the journey begins.
             </p>
             <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-gray-700 shadow-2xl">
               <iframe 
                 src={place.google360Urls[0]}
                 className="w-full h-full grayscale hover:grayscale-0 transition-all duration-500"
                 allowFullScreen
                 loading="lazy"
               />
             </div>
           </div>

           <div className="bg-orange-600/10 p-10 rounded-3xl border border-orange-500/20 text-center">
              <Heart className="w-16 h-16 text-orange-500 mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl font-bold mb-4">Make an Impact</h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                "We don't want sympathy. We want opportunity." <br/>
                Visiting Bombolulu isn't just a tour. It's an act of community.
              </p>
              <div className="flex flex-col gap-4">
                <a 
                  href={`https://wa.me/254700000000?text=I'm%20interested%20in%20visiting%20Bombolulu`}
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/20"
                >
                  Book a Cultural Tour
                </a>
                <span className="text-sm text-gray-500">Open Mon-Sat: 8am - 5pm</span>
              </div>
           </div>
        </div>
      </section>

    </main>
  );
}