"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Contact from "@/components/home/Contact";
import Preloader from "@/components/layout/Preloader";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import FAQ from "@/components/home/FAQ";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader key="preloader" onFinish={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="min-h-screen bg-background text-foreground flex flex-col relative selection:bg-primary/30"
        >

          <Navbar />

          <Hero />
          <TrustedBy />
          <Services />
          <ProcessTimeline />
          <Portfolio />
          <FAQ />
          <Contact />

          <Footer />
        </motion.main>
      )}
    </>
  );
}
