"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { places } from "../../data/places";
import { motion } from "framer-motion";
import { 
  ArrowLeft, MapPin, Play, Sun, Droplets, Ticket, Map as MapIcon, Youtube
} from "lucide-react";
import Link from "next/link";

export default function WildWatersPage() {
  const router = useRouter();
  const place = places.find((p) => p.id === "wild-waters");

  if (!place) {
    return <div className="h-screen bg-sky-900 text-white flex items-center justify-center">Loading...</div>;
  }

  const [activeVideo, setActiveVideo] = useState(place.videoUrls[0]);

  return (
    <main className="bg-sky-50 min-h-screen text-slate-800 font-sans selection:bg-cyan-300 selection:text-cyan-900">
      
      {/* -------------------------------------------------------
          SECTION 1: SPLASH HERO
      -------------------------------------------------------- */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        {/* Nav */}
        <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-sky-900/80 to-transparent">
          <Link href="/" className="flex items-center gap-2 text-white hover:text-cyan-300 transition-colors bg-sky-900/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
            <ArrowLeft size={18} /> <span className="text-sm font-bold">Back to Map</span>
          </Link>
          <div className="text-cyan-300 font-black tracking-widest text-sm uppercase">EXPLORE MSA</div>
        </div>

        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
           <video 
             key={activeVideo} autoPlay loop muted playsInline 
             className="w-full h-full object-cover"
             poster={place.poster}
           >
             <source src={place.videoUrls[0] || ""} type="video/mp4" />
           </video>
           {/* Blue Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-r from-sky-900/90 via-sky-900/40 to-transparent" />
        </div>

        {/* Hero Text */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-2 text-cyan-300 mb-4 uppercase tracking-wider text-sm font-bold bg-sky-950/50 inline-block px-3 py-1 rounded-lg backdrop-blur-sm">
              <Droplets size={16} /> Nyali, Mombasa
            </div>
            <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight leading-none text-white drop-shadow-lg">
              Wild <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400">Waters</span>
            </h1>
            <p className="text-xl md:text-2xl text-sky-100 max-w-xl leading-relaxed mb-8 font-medium">
              Dive into the thrill. From the heart-stopping slides to the lazy river, get ready to get soaked.
            </p>
            
            <div className="flex flex-wrap gap-4">
               <a href="#pricing" className="bg-cyan-500 hover:bg-cyan-400 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-cyan-500/30 transition-all flex items-center gap-2">
                 <Ticket size={20} /> View Prices
               </a>
               <a href="#youtube" className="bg-white hover:bg-gray-100 text-sky-900 px-8 py-4 rounded-full font-bold shadow-lg transition-all flex items-center gap-2">
                 <Play size={20} className="fill-sky-900" /> Watch Videos
               </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 2: YOUTUBE SHOWCASE (New Feature)
      -------------------------------------------------------- */}
      <section id="youtube" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
             <Youtube className="text-red-600 w-8 h-8" />
             <h2 className="text-4xl font-bold text-sky-900">Watch the Action</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {place.youtubeVideoIds?.map((id, idx) => (
              <div key={idx} className="aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-sky-100 bg-black">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src={`https://www.youtube.com/embed/${id}`} 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full hover:scale-105 transition-transform duration-500"
                ></iframe>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 3: THE ATTRACTIONS (Image Grid)
      -------------------------------------------------------- */}
      <section className="py-20 px-6 bg-sky-50">
        <div className="max-w-7xl mx-auto">
           <div className="text-center mb-16">
             <h3 className="text-cyan-600 font-bold tracking-widest text-sm mb-2 uppercase">The Experience</h3>
             <h2 className="text-4xl md:text-5xl font-black text-sky-900">Fun for Everyone</h2>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
             {place.imageUrls.map((img, idx) => {
                const isLarge = idx === 1 || idx === 8;
                return (
                 <div 
                   key={idx}
                   className={`relative rounded-2xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300 ${
                     isLarge ? 'col-span-2 row-span-2' : 'col-span-1'
                   }`}
                 >
                   <img 
                     src={img} 
                     alt="Gallery" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   {place.imageCaptions && place.imageCaptions[img] && (
                     <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-sky-900/80 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                       <p className="text-white font-bold">{place.imageCaptions[img]}</p>
                     </div>
                   )}
                 </div>
                );
             })}
           </div>
        </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 4: PRICING & DETAILS
      -------------------------------------------------------- */}
      <section id="pricing" className="py-20 px-6 bg-slate-900 text-white relative overflow-hidden">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-slate-950"></div>

        <div className="max-w-5xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div>
             <span className="text-cyan-400 font-bold tracking-widest text-xs uppercase mb-4 block">Visitor Info</span>
             <h2 className="text-4xl font-bold mb-6 text-white">Plan Your Visit</h2>
             <p className="text-slate-300 text-lg leading-relaxed mb-8">
               Wild Waters is open from <strong className="text-white">10:00 AM to 6:00 PM</strong> (Tue-Sun). 
               Whether you want to ride the slides all day or just relax by the pool, there is a package for you.
             </p>
             <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4 text-slate-300">
                  <Sun className="text-amber-400" /> <span>Best time to visit: Weekdays for shorter lines.</span>
                </div>
                <div className="flex items-center gap-4 text-slate-300">
                  <Droplets className="text-cyan-400" /> <span>Swimwear is mandatory for all slides.</span>
                </div>
             </div>
           </div>

           <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                <Ticket className="text-cyan-600" /> Entrance Fees
              </h3>
              <div className="space-y-4">
                {place.priceInfo?.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-slate-200 pb-4 last:border-0">
                    <span className="font-medium text-slate-600">{item.title}</span>
                    <span className="font-bold text-2xl text-slate-900">{item.price}</span>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 5: 360° VIRTUAL TOUR
      -------------------------------------------------------- */}
      {place.google360Urls && place.google360Urls.length > 0 && (
        <section className="py-20 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-cyan-600 font-bold tracking-widest text-sm mb-2 uppercase">Virtual Tour</h3>
              <h2 className="text-4xl md:text-5xl font-black text-sky-900">Explore in 360°</h2>
              <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Drag to look around and experience Wild Waters before you visit.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {place.google360Urls.map((url, idx) => (
                <div key={idx} className="aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-sky-100">
                  <iframe
                    src={url}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* -------------------------------------------------------
          SECTION 6: LOCATION MAP (New Feature)
      -------------------------------------------------------- */}
      <section className="py-0 relative h-[50vh] min-h-[400px]">
        {/* Google Maps Embed */}
        {place.locationEmbedUrl && (
          <iframe 
            src={place.locationEmbedUrl}
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full grayscale-[0%] hover:grayscale-0 transition-all duration-500"
          ></iframe>
        )}
        
        {/* Overlay Card */}
        <div className="absolute top-6 left-6 md:top-12 md:left-12 bg-white p-6 rounded-2xl shadow-2xl max-w-sm border border-gray-100">
           <div className="flex items-center gap-3 mb-2">
             <div className="bg-sky-100 p-2 rounded-full text-sky-600">
               <MapIcon size={24} />
             </div>
             <h3 className="font-bold text-gray-800 text-lg">Getting There</h3>
           </div>
           <p className="text-gray-500 text-sm mb-4">
             Located in Nyali, just off Links Road. Easily accessible by TukTuk or Uber from Mombasa Town (approx 15 mins).
           </p>
           <a 
             href="https://www.google.com/maps/search/?api=1&query=Wild+Waters+Mombasa" 
             target="_blank" 
             className="text-cyan-600 font-bold text-sm hover:underline flex items-center gap-1"
           >
             Open in Google Maps <ArrowLeft size={14} className="rotate-180" />
           </a>
        </div>
      </section>

    </main>
  );
}