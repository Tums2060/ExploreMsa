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
  Camera
} from "lucide-react";
import Link from "next/link";

export default function ExperiencePage() {
  const router = useRouter();
  
  // 1. Find the place based on the hardcoded ID for this page
  const place = places.find((p) => p.id === "haller-park");

  // 2. Handle "Not Found"
  if (!place) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-black text-white">
        <h1 className="text-4xl font-bold mb-4">Destination Not Found</h1>
        <button 
          onClick={() => router.push("/")}
          className="text-orange-400 hover:text-orange-300 underline"
        >
          Go back to map
        </button>
      </div>
    );
  }

  // 3. State for handling the "Active Video" in the carousel
  const [activeVideo, setActiveVideo] = useState(place.videoUrls[0]);

  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden font-sans">
      
      {/* -------------------------------------------------------
          SECTION 1: HERO (Cinematic Background)
      -------------------------------------------------------- */}
      <section className="relative h-[85vh] w-full">
        {/* Navbar Overlay */}
        <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/30 backdrop-blur-md px-4 py-2 rounded-full border border-white/10"
          >
            <ArrowLeft size={18} />
            <span className="text-sm font-medium">Back to Map</span>
          </Link>
          <div className="text-orange-500 font-bold tracking-widest text-sm">EXPLORE MSA</div>
        </div>

        {/* Background Video (Muted Loop) */}
        <div className="absolute inset-0 w-full h-full">
           {/* We use the first video as the hero loop, or a specific poster if video fails */}
           <video 
             key={activeVideo} // key change forces reload if video changes
             autoPlay 
             loop 
             muted 
             playsInline 
             className="w-full h-full object-cover opacity-60"
             poster={place.poster}
           >
             <source src={place.videoUrls[0] || ""} type="video/mp4" />
           </video>
           {/* Gradient Overlay for Text Readability */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/30" />
        </div>

        {/* Hero Content */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 text-orange-400 mb-4 uppercase tracking-wider text-xs md:text-sm font-bold">
              <MapPin size={16} /> Mombasa, Kenya
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none">
              {place.title}
            </h1>
            <p className="text-lg md:text-2xl text-gray-200 max-w-2xl leading-relaxed mb-8">
              {place.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-full font-bold transition-all flex items-center gap-2 shadow-lg shadow-orange-900/20">
                <Calendar size={18} /> Add to Itinerary
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

      {/* -------------------------------------------------------
          SECTION 2: THE STORY (Context)
      -------------------------------------------------------- */}
      <section className="py-20 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-gray-900 pb-20">
        <div className="md:col-span-1">
          <h3 className="text-orange-500 font-bold tracking-widest text-sm mb-2">THE HISTORY</h3>
          <h2 className="text-3xl font-bold mb-4">From Wasteland to Paradise</h2>
          <div className="h-1 w-20 bg-orange-600 rounded-full"></div>
        </div>
        <div className="md:col-span-2 text-gray-400 leading-relaxed text-lg space-y-6">
          <p>
            <span className="text-white font-medium">Founded in 1971</span>, this wasn't always a paradise. It began as a barren, dusty limestone quarry left behind by the Bamburi Cement Company. It was considered an ecological dead zone where nothing could grow.
          </p>
          <p>
             That changed when <strong className="text-white">Dr. René Haller</strong>, a Swiss naturalist, began a daring experiment. He planted 26 types of trees; only the hardy Casuarina survived. He introduced millipedes to turn the needles into soil, then hippos, giraffes, and tortoises. Today, it is a thriving, self-sustaining ecosystem and a global model for environmental rehabilitation.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-8">
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <Info className="text-orange-400 mb-3" />
              <h4 className="font-bold text-white mb-1">Famous Residents</h4>
              <p className="text-sm">Home to Sally & Potty (Hippos) and the 130-year-old tortoises.</p>
            </div>
            <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
              <MapPin className="text-orange-400 mb-3" />
              <h4 className="font-bold text-white mb-1">Location</h4>
              <p className="text-sm">Bamburi, North Coast (20min from CBD).</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 3: EXPERIENCE IN MOTION (Videos)
      -------------------------------------------------------- */}
      <section className="py-20 bg-gray-950">
        <div className="px-6 md:px-12 lg:px-20 mb-10 flex items-end justify-between">
          <div>
            <h3 className="text-orange-500 font-bold tracking-widest text-sm mb-2">WATCH</h3>
            <h2 className="text-4xl font-bold">Experience in Motion</h2>
          </div>
        </div>

        {/* Main Video Player */}
        <div className="max-w-6xl mx-auto px-6 mb-8">
           <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-800 bg-gray-900 relative group">
             <video 
               src={activeVideo} 
               controls 
               className="w-full h-full object-cover"
             />
           </div>
        </div>

        {/* Video Selector List */}
        <div className="max-w-6xl mx-auto px-6 flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {place.videoUrls.map((url, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveVideo(url)}
              className={`flex-shrink-0 w-48 aspect-video rounded-lg overflow-hidden border-2 transition-all relative ${activeVideo === url ? 'border-orange-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'}`}
            >
              <video src={url} className="w-full h-full object-cover" muted />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <Play size={20} fill="white" className="text-white drop-shadow-md" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 4: STEP INSIDE (360 Views)
      -------------------------------------------------------- */}
      <section id="immersive-view" className="py-20">
        <div className="px-6 md:px-12 lg:px-20 mb-10 text-center">
            <h3 className="text-orange-500 font-bold tracking-widest text-sm mb-2">INTERACTIVE 3D</h3>
            <h2 className="text-4xl font-bold mb-4">Step Inside the Park</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Look around. Drag the screen to rotate the view. 
              Explore the giraffe feeding platform, the forest trails, and the reptile park.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-7xl mx-auto px-6">
          {place.google360Urls.map((embedUrl, idx) => (
            <div key={idx} className="aspect-[4/3] rounded-2xl overflow-hidden border border-gray-800 relative bg-gray-900 group">
              {/* Overlay Label */}
              <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold border border-white/10 flex items-center gap-2">
                <Maximize2 size={12} className="text-orange-400"/> Viewpoint {idx + 1}
              </div>
              
              <iframe 
                src={embedUrl}
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[50%] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 5: GALLERY (Masonry Grid)
      -------------------------------------------------------- */}
      <section className="py-20 bg-gray-950">
        <div className="px-6 md:px-12 lg:px-20 mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Camera className="text-orange-500" />
              <h2 className="text-4xl font-bold">Captured Moments</h2>
            </div>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 max-w-7xl mx-auto px-6 h-auto">
           {place.imageUrls.map((img, idx) => (
             <div 
               key={idx} 
               className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                 // Making the first image large (spanning 2 cols/rows) for variety
                 idx === 0 ? 'col-span-2 row-span-2 aspect-square' : 'col-span-1 aspect-[3/4]'
               }`}
             >
               <img 
                 src={img} 
                 alt={`Gallery ${idx}`} 
                 className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
               />
               <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
             </div>
           ))}
        </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 6: BOTTOM CTA (Sticky)
      -------------------------------------------------------- */}
      <div className="fixed bottom-6 left-0 w-full px-6 z-40 pointer-events-none">
        <div className="max-w-md mx-auto bg-gray-900/90 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center justify-between pointer-events-auto">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Entry Fee</p>
            <p className="text-white font-bold">~ 500 KES <span className="text-xs font-normal text-gray-400">(Resident)</span></p>
          </div>
          <a 
            href={`https://wa.me/254700000000?text=I'm%20interested%20in%20visiting%20${place.title}`}
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