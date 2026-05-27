import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Coffee, ArrowRight, Check, Percent, Award, Sparkles, Heart } from "lucide-react";

export default function VisualMobileMockup() {
  const [points, setPoints] = useState(120);
  const [selectedItem, setSelectedItem] = useState(0);
  const [ordered, setOrdered] = useState(false);

  const menuItems = [
    { name: "Creamy Salted Caramel Latte", price: "Rp 28.000", pts: "15 pts", desc: "Espresso, freshly-frothed cold foam, and decadent caramel salt." },
    { name: "Signature Aren Brown Sugar", price: "Rp 24.005", pts: "10 pts", desc: "Classic double shot espresso, organic brown sugar, and rich oatmilk." },
    { name: "Tropical Citrus Cold Brew", price: "Rp 32.000", pts: "20 pts", desc: "18-hour cold brew infused with organic local citrus wedges." }
  ];

  const handleOrder = () => {
    setOrdered(true);
    // Add points
    const currentPts = parseInt(menuItems[selectedItem].pts);
    setPoints(prev => prev + currentPts);
    
    setTimeout(() => {
      setOrdered(false);
    }, 4000);
  };

  return (
    <div className="w-[280px] h-[560px] bg-slate-900 rounded-[44px] p-2.5 border-4 border-slate-800 shadow-md relative overflow-hidden flex flex-col scale-90 sm:scale-100 origin-bottom-left">
      {/* Notch / Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-900/40 mr-12" />
        <div className="w-2.5 h-1 bg-neutral-900 rounded-full" />
      </div>

      {/* Internal Phone Workspace */}
      <div className="flex-1 bg-slate-50 rounded-[35px] overflow-hidden flex flex-col relative pt-8 font-sans">
        
        {/* Sticky App Header */}
        <div className="px-4 py-2 flex items-center justify-between border-b border-neutral-200 bg-white">
          <div>
            <span className="text-[10px] text-neutral-450 block font-bold leading-none uppercase">Selamat Pagi</span>
            <span className="text-xs font-black text-neutral-900">Rahmat Hariadi 👋</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center overflow-hidden">
            <span className="text-[10px] font-bold text-blue-600">RH</span>
          </div>
        </div>

        {/* Dynamic App Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-4 py-3 space-y-3 pb-24">
          
          {/* Membership Card with rich royal blue gradient */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-3.5 text-white relative overflow-hidden shadow-sm animate-fadeIn">
            {/* Visual background circles */}
            <div className="absolute -right-10 -bottom-10 w-28 h-28 rounded-full bg-white/10 blur-xl" />
            <div className="absolute -left-10 -top-10 w-28 h-28 rounded-full bg-cyan-400/10 blur-xl" />

            <div className="flex justify-between items-start">
              <div>
                <span className="text-[8px] font-black tracking-widest text-blue-200 uppercase">TIER ANGGOTA</span>
                <h5 className="text-xs font-extrabold text-white flex items-center gap-1.5 mt-0.5">
                  Gold Member <Award className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
                </h5>
              </div>
              <Sparkles className="w-4 h-4 text-blue-200 animate-pulse" />
            </div>

            <div className="mt-6 flex justify-between items-end">
              <div>
                <p className="text-[9px] text-blue-100 font-medium">Biji Kopi Terkumpul</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-lg font-black text-white">{points}</span>
                  <span className="text-[9px] text-blue-200 font-semibold">pts</span>
                </div>
              </div>
              <div className="bg-white/10 border border-white/10 rounded-lg py-1 px-2.5 flex items-center gap-1">
                <Percent className="w-3 h-3 text-white" />
                <span className="text-[9px] font-black text-white">Promo Klaim</span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="mt-3">
              <div className="w-full bg-blue-900/40 h-1.5 rounded-full overflow-hidden">
                <div className="bg-white h-full rounded-full" style={{ width: `${(points / 250) * 100}%` }} />
              </div>
              <div className="flex justify-between text-[7px] text-blue-200 mt-1 font-bold">
                <span>{points} / 250 pts</span>
                <span>Free Reward</span>
              </div>
            </div>
          </div>

          {/* Section Menu */}
          <div>
            <h6 className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest mb-2">Spesial Hari Ini</h6>
            
            {/* Horizontal List */}
            <div className="space-y-2">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedItem(index)}
                  className={`p-2.5 rounded-xl border transition-all cursor-pointer flex flex-col ${
                    selectedItem === index
                      ? "bg-white border-blue-600 shadow-sm"
                      : "bg-white/80 border-neutral-200/60 hover:border-neutral-300"
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold text-neutral-900 leading-tight w-4/5">{item.name}</span>
                    <span className="text-[9px] text-blue-600 font-mono font-black shrink-0">{item.pts}</span>
                  </div>
                  {selectedItem === index && (
                    <p className="text-[9px] text-neutral-550 mt-1 leading-normal animate-fadeIn">{item.desc}</p>
                  )}
                  <div className="flex justify-between items-center mt-2 pt-1 border-t border-neutral-100">
                    <span className="text-[11px] font-black text-neutral-900">{item.price}</span>
                    <span className="text-[9px] font-semibold text-neutral-500 flex items-center gap-0.5">
                      <Heart className="w-2.5 h-2.5 text-rose-500 fill-rose-500" /> Terfavorit
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order CTA overlay / Bottom action */}
        <div className="absolute bottom-0 inset-x-0 bg-white/95 backdrop-blur-md border-t border-neutral-200 p-3.5 z-20 flex flex-col gap-2 rounded-t-3xl">
          <div className="flex justify-between items-center px-1">
            <div>
              <span className="text-[8px] text-neutral-400 uppercase font-black">TOTAL ORDER</span>
              <p className="text-xs font-black text-neutral-900">{menuItems[selectedItem].price}</p>
            </div>
            <span className="text-[9px] font-semibold text-neutral-500">Siap dalam: 7 mnt</span>
          </div>

          <button
            onClick={handleOrder}
            disabled={ordered}
            className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer relative overflow-hidden transition-all ${
              ordered 
                ? "bg-emerald-600 text-white" 
                : "bg-blue-600 text-white hover:bg-blue-700 active:scale-[0.98]"
            }`}
          >
            <AnimatePresence mode="wait">
              {ordered ? (
                <motion.span
                  key="ordered"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" /> Pesanan Terkirim!
                </motion.span>
              ) : (
                <motion.span
                  key="normal"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-1"
                >
                  Pesan Sekarang <ArrowRight className="w-3.5 h-3.5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

      </div>
    </div>
  );
}
