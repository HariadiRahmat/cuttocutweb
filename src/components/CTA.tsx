import { motion } from "motion/react";
import { MessageSquare, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function CTA() {
  const handleCtaClick = () => {
    window.open("https://wa.me/6285710300560", "_blank", "referrer");
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Blur Backings */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-100/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-blue-50/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Banner Frame */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 text-white rounded-[40px] p-8 md:p-16 relative overflow-hidden shadow-lg border border-white/5">
          {/* Subtle decoration grid */}
          <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#3b82f6_1px,transparent_1px),linear-gradient(to_bottom,#3b82f6_1px,transparent_1px)] bg-[size:24px_24px]" />
          
          <div className="max-w-3xl relative z-10 flex flex-col space-y-6 md:space-y-8">
            <span className="text-[10px] font-extrabold tracking-widest text-blue-300 uppercase bg-blue-500/15 border border-blue-500/20 px-3 py-1.5 rounded-full w-fit">
              Daftar Konsultasi Hari Ini
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none tracking-tight">
              Bangun Sistem Digital <br /> Bisnis Coffee Shop Anda.
            </h2>

            <p className="text-sm md:text-base text-slate-300 max-w-xl leading-relaxed">
              Jadwalkan sesi audit operasional dan demonstrasi sistem interaktif gratis berdurasi 30 menit bersama Tech Director kami. Temukan di mana kebocoran omset outlet kopi Anda terjadi.
            </p>

            {/* Actions block */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-fit">
              <button
                id="cta-whatsapp-channel"
                onClick={handleCtaClick}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-750 hover:bg-blue-750 text-white font-extrabold text-xs sm:text-sm rounded-full transition-all duration-200 cursor-pointer flex items-center justify-center gap-2.5 shadow-md shadow-blue-550/10 hover:shadow-lg active:scale-[0.98] group bg-blue-600 hover:bg-blue-700"
              >
                <MessageSquare className="w-5 h-5 fill-white/10" />
                Hubungi Sekarang via WhatsApp
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              <span className="text-[11px] font-semibold text-slate-400 text-center sm:text-left">
                Konsultasi 100% Gratis Tanpa Komitmen Pembelian.
              </span>
            </div>

            {/* Quick trust metrics labels */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4.5 h-4.5 text-blue-450 text-blue-400" />
                <span className="text-[11px] font-bold">10 Hari Kerja Terdeploy</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4.5 h-4.5 text-blue-400" />
                <span className="text-[11px] font-bold">Instalasi Local Dibimbing</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold">Penawaran Paket Terbatas</span>
              </div>
            </div>

          </div>

          {/* Abstract coffee splash vector representation in corner */}
          <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:flex items-center justify-center pointer-events-none opacity-[0.04]">
            <svg className="w-64 h-64 text-blue-300 fill-current" viewBox="0 0 100 100">
              <path d="M70,30H20c-5.5,0-10,4.5-10,10v20c0,11,9,20,20,20h20c11,0,20-9,20-20v-5h10c5.5,0,10-4.5,10-10V40C80,34.5,75.5,30,70,30z M60,60c0,5.5-4.5,10-10,10H30c-5.5,0-10-4.5-10-10V40h40V60z M70,50H60V40h10v10C70,50,70,50,70,50z M15,15c0,2.8,2.2,5,5,5s5-2.2,5-5H15z M35,15c0,2.8,2.2,5,5,5s5-2.2,5-5H35z M55,15c0,2.8,2.2,5,5,5s5-2.2,5-5H55z" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
}
