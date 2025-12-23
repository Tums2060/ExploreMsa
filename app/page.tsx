"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { places } from "../data/places";
import { ArrowRight } from "lucide-react";
 
export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      
      {/* SECTION 1: HERO (Cinematic Intro) */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60"
        >
          {/* Put a file named hero-bg.mp4 in public/videos/ folder */}
          <source src="/videos/hero-bg1.mp4" type="video/mp4" />
        </video>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Explore Mombasa <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-200">
              Before You Pack
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            The first cinematic travel guide for Kenya.
          </motion.p>
        </div>

        {/* Gradient Fade at bottom to blend into next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
      </section>


      {/* SECTION 2: THE "SLIDING" ATTRACTIONS */}
      <section className="py-20 px-6">
        <div className="flex items-center justify-between mb-8 max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold">Top Destinations</h2>
          <span className="text-gray-400 text-sm">Scroll to explore →</span>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="flex overflow-x-auto space-x-6 pb-8 snap-x snap-mandatory scrollbar-hide">
          {places.map((place) => (
            <Link 
              key={place.id} 
              href={`/${place.id}`}
              className="relative min-w-[300px] md:min-w-[400px] h-[500px] rounded-2xl overflow-hidden cursor-pointer group snap-center border border-gray-800"
            >
              {/* Card Image Background */}
              {/* Ideally use Next/Image here, but standard img tag for speed for now */}
              <img 
                src={place.poster} 
                alt={place.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <h3 className="text-2xl font-bold mb-2 text-white">{place.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2 mb-4">{place.description}</p>
                <div className="flex items-center text-orange-400 font-medium group-hover:gap-2 transition-all">
                  Preview Experience <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </Link>
          ))}
          
          {/* Placeholder cards so you can see the scrolling effect even with 1 item */}
          <div className="min-w-[300px] md:min-w-[400px] h-[500px] rounded-2xl bg-gray-900 flex items-center justify-center snap-center">
            <p className="text-gray-500">Coming Soon: Fort Jesus</p>
          </div>
          <div className="min-w-[300px] md:min-w-[400px] h-[500px] rounded-2xl bg-gray-900 flex items-center justify-center snap-center">
            <p className="text-gray-500">Coming Soon: Old Town</p>
          </div>
        </div>
      </section>
    </main>
  );
}