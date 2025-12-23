"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { places } from "../../data/places";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  MapPin, 
  Play, 
  Maximize2, 
  Calendar, 
  Info,
  Camera,
  BookOpen // New icon for history
} from "lucide-react";
import Link from "next/link";

export default function FortJesusPage() {
  const router = useRouter();
  
  // 1. Find Fort Jesus specifically
  const place = places.find((p) => p.id === "fort-jesus");

  // 2. Handle "Not Found"
  if (!place) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold mb-4">Fort Jesus Not Found</h1>
        <button onClick={() => router.push("/")} className="text-orange-400 underline">Go Home</button>
      </div>
    );
  }

  const [activeVideo, setActiveVideo] = useState(place.videoUrls[0]);

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden font-sans">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[85vh] w-full">
        <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <ArrowLeft size={18} /> <span className="text-sm font-medium">Back to Map</span>
          </Link>
          <div className="text-orange-500 font-bold tracking-widest text-sm">EXPLORE MSA</div>
        </div>

        <div className="absolute inset-0 w-full h-full">
           <video 
             key={activeVideo} 
             autoPlay loop muted playsInline 
             className="w-full h-full object-cover opacity-60"
             poster={place.poster}
           >
             <source src={place.videoUrls[0] || ""} type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 text-orange-400 mb-4 uppercase tracking-wider text-xs md:text-sm font-bold">
              <MapPin size={16} /> Mombasa, Old Town
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none">
              {place.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed mb-8">
              {place.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-orange-900/20">
                Book Visit
              </button>
              <button 
                onClick={() => document.getElementById('immersive-view')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-3 rounded-full font-bold transition-all border border-white/10 flex items-center gap-2"
              >
                <Maximize2 size={18} /> Start 3D Tour
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: HISTORY TIMELINE (Exclusive to Fort Jesus) */}
      {place.history && (
        <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-b border-gray-900 pb-20">
           <div className="flex items-center gap-3 mb-10">
              <BookOpen className="text-orange-500" />
              <h2 className="text-4xl font-bold">Time Travel</h2>
           </div>
           
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {place.history.map((item, idx) => (
               <div key={idx} className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                  {/* Faded year number in background */}
                  <div className="text-6xl font-bold text-gray-800 absolute -top-4 -right-4 select-none group-hover:text-orange-900/40 transition-colors">
                    {item.year}
                  </div>
                  <div className="relative z-10">
                    <span className="text-orange-400 font-bold text-xl block mb-2">{item.year}</span>
                    <h3 className="text-white font-bold text-lg mb-2">{item.event}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.detail}</p>
                  </div>
               </div>
             ))}
           </div>
        </section>
      )}

      {/* SECTION 3: VIDEO GALLERY */}
      <section className="py-20 bg-gray-950">
        <div className="px-6 md:px-12 lg:px-20 mb-10">
            <h3 className="text-orange-500 font-bold tracking-widest text-sm mb-2">CINEMATIC</h3>
            <h2 className="text-4xl font-bold">The Experience</h2>
        </div>
        <div className="max-w-6xl mx-auto px-6 mb-8">
           <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 relative">
             <video src={activeVideo} controls className="w-full h-full object-cover" />
           </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {place.videoUrls.map((url, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveVideo(url)}
              className={`flex-shrink-0 w-48 aspect-video rounded-lg overflow-hidden border-2 transition-all relative ${activeVideo === url ? 'border-orange-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'}`}
            >
              <video src={url} className="w-full h-full object-cover" muted />
            </button>
          ))}
        </div>
      </section>

      {/* SECTION 4: 3D IMMERSIVE */}
      <section id="immersive-view" className="py-20">
        <div className="px-6 md:px-12 lg:px-20 mb-10 text-center">
            <h3 className="text-orange-500 font-bold tracking-widest text-sm mb-2">INTERACTIVE 3D</h3>
            <h2 className="text-4xl font-bold mb-4">Step Inside</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Explore every corner. From the cannons to the hidden passages.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-7xl mx-auto px-6">
          {place.google360Urls.map((embedUrl, idx) => (
            <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 group">
              <iframe 
                src={embedUrl}
                width="100%" height="100%" style={{ border: 0 }} 
                allowFullScreen={true} loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: GALLERY WITH CAPTIONS */}
      <section className="py-20 bg-gray-950">
        <div className="px-6 md:px-12 lg:px-20 mb-12">
            <h2 className="text-4xl font-bold">Details & Secrets</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto px-6">
           {place.imageUrls.map((img, idx) => {
             // Look up the caption for this specific image URL
             const caption = place.imageCaptions ? place.imageCaptions[img] : null;

             return (
               <div 
                 key={idx} 
                 className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                   idx === 0 ? 'col-span-2 row-span-2 aspect-square' : 'col-span-1 aspect-[3/4]'
                 }`}
               >
                 <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                 
                 {/* Only show text overlay if there is a caption in places.ts */}
                 {caption && (
                   <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                     <p className="text-white font-medium text-sm md:text-base border-l-4 border-orange-500 pl-3">
                       {caption}
                     </p>
                   </div>
                 )}
               </div>
             );
           })}
        </div>
      </section>
      
      {/* Sticky Footer */}
      <div className="fixed bottom-6 left-0 w-full px-6 z-40 pointer-events-none">
        <div className="max-w-md mx-auto bg-gray-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center justify-between pointer-events-auto">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Entry Fee</p>
            <p className="text-white font-bold">~ 1200 KES <span className="text-xs font-normal text-gray-400">(Non-Res)</span></p>
          </div>
          <a 
            href={`https://wa.me/254700000000?text=I'm%20interested%20in%20visiting%20Fort%20Jesus`}
            target="_blank"
            rel="noreferrer"
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-xl font-bold text-sm transition-colors"
          >
            Book Visit
          </a>
        </div>
      </div>

    </main>
  );
}