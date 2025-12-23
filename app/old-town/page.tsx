"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { places } from "../../data/places";
import { motion } from "framer-motion";
import { 
  ArrowLeft, MapPin, Play, Camera, BookOpen, Coffee, Wind
} from "lucide-react";
import Link from "next/link";

export default function OldTownPage() {
  const router = useRouter();
  const place = places.find((p) => p.id === "old-town");

  if (!place) {
    return <div className="h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
  }

  const [activeVideo, setActiveVideo] = useState(place.videoUrls[0]);

  return (
    <main className="bg-[#0a0a0a] min-h-screen text-white overflow-x-hidden font-serif">
      
      {/* SECTION 1: HERO */}
      <section className="relative h-[90vh] w-full">
        {/* Nav */}
        <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/90 to-transparent">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 font-sans">
            <ArrowLeft size={18} /> <span className="text-sm font-medium">Back to Map</span>
          </Link>
          <div className="text-amber-500 font-bold tracking-widest text-sm font-sans">EXPLORE MSA</div>
        </div>

        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
           <video 
             key={activeVideo} autoPlay loop muted playsInline 
             className="w-full h-full object-cover opacity-50 sepia-[0.3]" // Added sepia for vintage feel
             poster={place.poster}
           >
             <source src={place.videoUrls[0] || ""} type="video/mp4" />
           </video>
           <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-black/20 to-black/40" />
        </div>

        {/* Hero Text */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 text-amber-500 mb-4 uppercase tracking-wider text-sm font-bold font-sans">
              <MapPin size={16} /> Mombasa Island
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight leading-none text-[#eaddcf]">
              Old Town
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl leading-relaxed mb-8 font-light italic">
              "Where the walls whisper stories of Sultans, spice traders, and centuries gone by."
            </p>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: THE ATMOSPHERE (Replacing 3D with Text/Vibe) */}
      <section className="py-24 px-6 md:px-12 lg:px-20 max-w-5xl mx-auto text-center">
         <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
         >
           <Coffee className="w-12 h-12 text-amber-600 mx-auto mb-6" />
           <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#eaddcf]">A Sensory Journey</h2>
           <p className="text-lg md:text-xl text-gray-400 leading-loose">
             Old Town is not just a place to see; it is a place to <span className="text-white">feel</span>. 
             Walk the narrow streets and you will smell the rich aroma of <span className="text-amber-500">Kahawa Tungu</span> (spiced coffee) brewing in brass pots. 
             Listen to the call to prayer echoing against the ancient coral walls, blending with the sound of TukTuks and distant ocean waves.
             Here, time moves slower.
           </p>
         </motion.div>
      </section>

      {/* SECTION 3: THE VIRTUAL WALK (Zig-Zag Layout) */}
      <section className="py-10 px-6 max-w-7xl mx-auto space-y-24 overflow-hidden">
        
        {/* Item 1: The Architecture */}
        <div className="flex flex-col md:flex-row items-center gap-12">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-1/2 h-[500px] overflow-hidden rounded-xl border border-white/10"
           >
             {/* Ken Burns Effect Image */}
             <img src={place.imageUrls[5] || place.poster} className="w-full h-full object-cover hover:scale-110 transition-transform duration-[10s]" alt="Street" />
           </motion.div>
           <div className="w-full md:w-1/2">
             <h3 className="text-amber-500 font-bold tracking-widest text-sm mb-2 font-sans">THE ARCHITECTURE</h3>
             <h2 className="text-4xl font-bold mb-6">Walls of Coral & Lime</h2>
             <p className="text-gray-400 text-lg leading-relaxed">
               The buildings here are unique. Constructed from coral rag and lime, they keep the interiors cool despite the coastal heat. 
               Look up, and you will see the famous <strong>carved wooden balconies</strong>. These were influenced by Indian traders in the 19th century, creating a unique architectural fusion you won't find anywhere else in Africa.
             </p>
           </div>
        </div>

        {/* Item 2: The Doors (Reverse Layout) */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
           <motion.div 
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8 }}
             className="w-full md:w-1/2 h-[500px] overflow-hidden rounded-xl border border-white/10"
           >
             <img src={place.imageUrls[7] || place.poster} className="w-full h-full object-cover hover:scale-110 transition-transform duration-[10s]" alt="Door" />
           </motion.div>
           <div className="w-full md:w-1/2 md:text-right">
             <h3 className="text-amber-500 font-bold tracking-widest text-sm mb-2 font-sans">THE DETAILS</h3>
             <h2 className="text-4xl font-bold mb-6">The Swahili Doors</h2>
             <p className="text-gray-400 text-lg leading-relaxed">
               The door is the most important part of a Swahili house. Intricately carved with Quranic inscriptions and floral patterns, a door traditionally revealed the wealth and status of the family living inside. Some of these doors are over 200 years old, standing as silent guardians of history.
             </p>
           </div>
        </div>

      </section>

      {/* SECTION 4: HISTORY TIMELINE */}
      {place.history && (
        <section className="py-20 bg-[#0f0f0f] mt-20">
           <div className="max-w-6xl mx-auto px-6">
             <div className="flex items-center justify-center gap-3 mb-16">
                <BookOpen className="text-amber-600" />
                <h2 className="text-3xl font-bold text-center">A Timeline of Survival</h2>
             </div>
             
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               {place.history.map((item, idx) => (
                 <div key={idx} className="relative pl-8 border-l-2 border-amber-900/50 hover:border-amber-600 transition-colors py-2">
                    <span className="text-amber-500 font-bold text-xl block mb-2 font-sans">{item.year}</span>
                    <h3 className="text-white font-bold text-lg mb-2">{item.event}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-sans">{item.detail}</p>
                 </div>
               ))}
             </div>
           </div>
        </section>
      )}

      {/* SECTION 5: GALLERY (Polaroid Style) */}
      <section className="py-24">
        <div className="px-6 md:px-12 lg:px-20 mb-12 flex items-center gap-4">
            <Camera className="text-amber-600" />
            <h2 className="text-4xl font-bold">Glimpses of Old Town</h2>
        </div>
        
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4 px-6 max-w-7xl mx-auto">
           {place.imageUrls.map((img, idx) => {
             const caption = place.imageCaptions ? place.imageCaptions[img] : null;
             return (
               <div key={idx} className="break-inside-avoid relative group rounded-lg overflow-hidden">
                 <img src={img} alt="Gallery" className="w-full h-auto grayscale-[20%] group-hover:grayscale-0 transition-all duration-700" />
                 {caption && (
                   <div className="absolute bottom-0 left-0 w-full bg-black/70 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                     <p className="text-sm text-white font-sans">{caption}</p>
                   </div>
                 )}
               </div>
             );
           })}
        </div>
      </section>

      {/* CTA */}
      <div className="fixed bottom-6 left-0 w-full px-6 z-40 pointer-events-none font-sans">
        <div className="max-w-md mx-auto bg-gray-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center justify-between pointer-events-auto">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Guide Fee</p>
            <p className="text-white font-bold">~ 1,500 KES <span className="text-xs font-normal text-gray-400">(Recommended)</span></p>
          </div>
          <a 
            href={`https://wa.me/254700000000?text=I'm%20interested%20in%20a%20guided%20tour%20of%20Old%20Town`}
            className="bg-amber-700 hover:bg-amber-800 text-white px-6 py-2 rounded-xl font-bold text-sm transition-colors"
          >
            Book Guide
          </a>
        </div>
      </div>

    </main>
  );
}