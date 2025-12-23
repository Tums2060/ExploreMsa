"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { places } from "../../data/places";
import { motion } from "framer-motion";
import { 
  ArrowLeft, MapPin, Maximize2, Bike, Utensils, Trees, Wind
} from "lucide-react";
import Link from "next/link";

export default function ButterflyPavilionPage() {
  const router = useRouter();
  const place = places.find((p) => p.id === "butterfly-pavilion");

  if (!place) {
    return <div className="h-screen bg-black text-white flex items-center justify-center">Loading...</div>;
  }

  return (
    <main className="bg-[#051a0d] min-h-screen text-white overflow-x-hidden font-sans selection:bg-green-500 selection:text-white">
      
      {/* -------------------------------------------------------
          SECTION 1: HERO (Ken Burns Effect - No Video)
      -------------------------------------------------------- */}
      <section className="relative h-[90vh] w-full overflow-hidden">
        {/* Nav */}
        <div className="absolute top-0 left-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black/80 to-transparent">
          <Link href="/" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
            <ArrowLeft size={18} /> <span className="text-sm font-medium">Back to Map</span>
          </Link>
          <div className="text-green-400 font-bold tracking-widest text-sm">EXPLORE MSA</div>
        </div>

        {/* Background Image with Slow Zoom Animation */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
        >
           <img 
             src={place.poster} 
             alt="Butterfly Pavilion" 
             className="w-full h-full object-cover opacity-80"
           />
        </motion.div>
        
        {/* Green Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#051a0d] via-green-950/40 to-black/20" />

        {/* Hero Text */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-2 text-green-400 mb-4 uppercase tracking-wider text-xs md:text-sm font-bold">
              <MapPin size={16} /> Bamburi, Mombasa
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight leading-none text-white">
              {place.title}
            </h1>
            <p className="text-lg md:text-2xl text-green-100 max-w-2xl leading-relaxed mb-8">
              {place.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-green-900/40 flex items-center gap-2"
              >
                <Trees size={18} /> Explore Activities
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 2: THE EXPERIENCE (Activities Cards)
      -------------------------------------------------------- */}
      <section id="activities" className="py-24 px-6 md:px-12 lg:px-20 relative">
        {/* Decorative background blur */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h3 className="text-green-500 font-bold tracking-widest text-sm mb-2">WHAT TO DO</h3>
            <h2 className="text-4xl md:text-5xl font-bold">More Than Just Butterflies</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1: Cycling */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Bike size={100} />
               </div>
               <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mb-6 text-green-400">
                 <Bike size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-3">Forest Cycling</h3>
               <p className="text-gray-400 leading-relaxed">
                 Bring your bike or rent one. The pavilion offers miles of cool, shaded tracks perfect for cycling away from the Mombasa heat.
               </p>
            </motion.div>

            {/* Card 2: Picnics */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Utensils size={100} />
               </div>
               <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mb-6 text-orange-400">
                 <Utensils size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-3">Family Picnics</h3>
               <p className="text-gray-400 leading-relaxed">
                 Designated picnic sites located by the lakes and under ancient trees. Perfect for family gatherings and birthdays.
               </p>
            </motion.div>

            {/* Card 3: Nature */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                 <Wind size={100} />
               </div>
               <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mb-6 text-blue-400">
                 <Wind size={24} />
               </div>
               <h3 className="text-2xl font-bold mb-3">Fresh Air</h3>
               <p className="text-gray-400 leading-relaxed">
                 Escape the city smog. The dense forest canopy acts as a 'green lung,' providing the freshest air in the county.
               </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 3: 360 IMMERSION
      -------------------------------------------------------- */}
      <section className="py-20 bg-[#082211]">
        <div className="px-6 md:px-12 lg:px-20 mb-10 text-center">
            <h2 className="text-3xl font-bold mb-4">Step Into the Forest</h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Look around the lush greenery and the peaceful lakes.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto px-6">
          {place.google360Urls.map((embedUrl, idx) => (
            <div key={idx} className="aspect-[16/9] rounded-2xl overflow-hidden border-4 border-[#0a2e18] shadow-2xl relative bg-black/50 group">
               {/* Label */}
              <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold border border-white/10 flex items-center gap-2">
                <Maximize2 size={12} className="text-green-400"/> 360° View {idx + 1}
              </div>
              <iframe 
                src={embedUrl}
                width="100%" height="100%" style={{ border: 0 }} 
                allowFullScreen={true} loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
              ></iframe>
            </div>
          ))}
        </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 4: GALLERY GRID
      -------------------------------------------------------- */}
      <section className="py-24 px-6 md:px-12 lg:px-20">
         <div className="max-w-7xl mx-auto">
           <h2 className="text-4xl font-bold mb-12">Moments in Nature</h2>
           
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
             {place.imageUrls.map((img, idx) => {
                // Logic to make some images bigger than others for a "Masonry" feel
                const isLarge = idx === 0 || idx === 7;
                const isTall = idx === 2 || idx === 5;
                
                return (
                 <motion.div 
                   key={idx}
                   initial={{ opacity: 0, scale: 0.9 }}
                   whileInView={{ opacity: 1, scale: 1 }}
                   viewport={{ once: true }}
                   transition={{ delay: idx * 0.1 }}
                   className={`relative rounded-xl overflow-hidden group cursor-pointer ${
                     isLarge ? 'col-span-2 row-span-2' : isTall ? 'row-span-2' : 'col-span-1'
                   }`}
                 >
                   <img 
                     src={img} 
                     alt="Gallery" 
                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                   />
                   
                   {/* Caption Overlay */}
                   {place.imageCaptions && place.imageCaptions[img] && (
                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4 text-center">
                       <p className="text-white font-medium">{place.imageCaptions[img]}</p>
                     </div>
                   )}
                 </motion.div>
                );
             })}
           </div>
         </div>
      </section>

      {/* -------------------------------------------------------
          SECTION 5: HISTORY (Simple Timeline)
      -------------------------------------------------------- */}
      {place.history && (
        <section className="py-20 px-6 max-w-4xl mx-auto border-t border-white/10">
           <h3 className="text-center text-green-500 font-bold tracking-widest text-sm mb-12">HOW IT STARTED</h3>
           <div className="space-y-8">
             {place.history.map((item, idx) => (
               <div key={idx} className="flex gap-6 items-start">
                 <div className="w-24 flex-shrink-0 text-right text-green-400 font-bold text-xl pt-1">{item.year}</div>
                 <div className="w-px bg-green-500/30 self-stretch relative">
                   <div className="absolute top-2 -left-1.5 w-3 h-3 bg-green-500 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                 </div>
                 <div className="pb-8">
                   <h4 className="text-white font-bold text-lg">{item.event}</h4>
                   <p className="text-gray-400 mt-2">{item.detail}</p>
                 </div>
               </div>
             ))}
           </div>
        </section>
      )}

      {/* Sticky Booking Bar */}
      <div className="fixed bottom-6 left-0 w-full px-6 z-40 pointer-events-none">
        <div className="max-w-md mx-auto bg-[#0a2e18]/90 backdrop-blur-xl border border-green-500/20 p-4 rounded-2xl shadow-2xl flex items-center justify-between pointer-events-auto">
          <div>
            <p className="text-xs text-green-400 uppercase tracking-wider">Entry Fee</p>
            <p className="text-white font-bold">~ 250 KES <span className="text-xs font-normal text-gray-400">(Adult)</span></p>
          </div>
          <a 
            href={`https://wa.me/254700000000?text=I'm%20interested%20in%20visiting%20Butterfly%20Pavilion`}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl font-bold text-sm transition-colors"
          >
            Visit Now
          </a>
        </div>
      </div>

    </main>
  );
}