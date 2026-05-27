import React from "react";
import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Zap, Sparkles } from "lucide-react";
import VisualDashboardMockup from "./VisualDashboardMockup";
import VisualMobileMockup from "./VisualMobileMockup";

export default function Hero() {
  const handleCtaClick = () => {
    window.open("https://wa.me/6285710300560", "_blank", "referrer");
  };

  const handleScrollToPricing = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById("harga");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="tentang" 
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-blue-50/20 to-white"
    >
      {/* Dynamic Background Glowing Blobs */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-blue-50/30 blur-3xl -z-10" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-blue-50/20 blur-3xl -z-10 animate-pulse duration-10000" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Premium Pitch */}
        <div className="lg:col-span-6 flex flex-col space-y-6 md:space-y-8 text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100/80 w-fit mx-auto lg:mx-0 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700">
              #1 Tech Partner F&B Coffee Shop
            </span>
          </motion.div>

          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-neutral-900"
            >
              Kembangkan Bisnis <br className="hidden sm:inline" />
              <span className="text-blue-600">Coffee Shop</span> Anda.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-neutral-500 font-normal leading-relaxed max-w-xl lg:max-w-md xl:max-w-xl mx-auto lg:mx-0"
            >
              Kami mengintegrasikan aplikasi mobile premium, sistem POS modern, loyalty program, dan dasbor analitis ke dalam satu ekosistem digital untuk mendongkrak penjualan dan menyederhanakan operasional outlet kopi Anda.
            </motion.p>
          </div>

          {/* Call to Actions Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <button
              id="hero-cta-primary"
              onClick={handleCtaClick}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 shadow-md shadow-blue-500/15 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
            >
              Mulai Proyek
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
            </button>
            
            <a
              id="hero-cta-secondary"
              href="#harga"
              onClick={handleScrollToPricing}
              className="w-full sm:w-auto px-8 py-4 rounded-full text-sm font-semibold bg-white text-neutral-800 border border-neutral-200 hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Lihat Paket Harga
            </a>
          </motion.div>

          {/* Micro Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="pt-6 border-t border-neutral-100 grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0"
          >
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <ShieldCheck className="w-4.5 h-4.5 text-blue-600" />
              <span className="text-xs font-semibold text-neutral-600">Sistem Handal & Teruji</span>
            </div>
            <div className="flex items-center gap-2 justify-center lg:justify-start">
              <Zap className="w-4.5 h-4.5 text-blue-500" />
              <span className="text-xs font-semibold text-neutral-600">Deploy 10 Hari Kerja</span>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Interlocking Device Previews */}
        <div className="lg:col-span-6 relative flex flex-col items-center justify-center mt-6 lg:mt-0">
          
          {/* Main Visual: Analytics Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-full max-w-[530px] select-none"
          >
            <VisualDashboardMockup />
          </motion.div>

          {/* Overlapping Visual: Mobile App */}
          <motion.div
            initial={{ opacity: 0, y: 40, x: 20 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            transition={{ type: "spring", stiffness: 60, delay: 0.3 }}
            className="absolute -bottom-10 -left-4 sm:left-2 lg:left-[-10px] xl:-left-12 z-20 scale-[0.8] lg:scale-[0.78] xl:scale-[0.95] select-none pointer-events-auto filter drop-shadow-[0_25px_40px_rgba(20,19,17,0.12)] hidden sm:block"
          >
            <VisualMobileMockup />
          </motion.div>

          {/* Small floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute top-4 -right-2 bg-gradient-to-r from-slate-900 to-slate-950 text-white rounded-2xl py-3 px-4 shadow-xl border border-white/10 hidden sm:block z-35"
          >
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping shrink-0" />
              <div>
                <p className="text-[10px] text-blue-450 font-extrabold tracking-widest uppercase">TERINTEGRASI</p>
                <p className="text-xs font-bold mt-0.5">Saku Kasir & Handphone Pelanggan</p>
              </div>
            </div>
          </motion.div>
          
        </div>

      </div>
    </section>
  );
}
