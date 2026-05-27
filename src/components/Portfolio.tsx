import { motion } from "motion/react";
import { Laptop, Smartphone, BarChart3, TrendingUp, CheckCircle } from "lucide-react";

export default function Portfolio() {
  const projects = [
    {
      id: "kopisenja",
      category: "Sistem POS & QRIS terintegrasi",
      title: "Kopi Senja (12 Outlet Cabang)",
      description: "Penyatuan sistem kasir terpusat untuk kelancaran operasional multi-cabang tanpa crash di jam makan sibuk (peak hours). Dilengkapi integrasi QRIS dinamis di layar kasir.",
      metrics: {
        label: "Dampak Efisiensi",
        value: "32% Lebih Cepat",
        details: "Waktu antrian per-pelanggan menyusut drastis"
      },
      tags: ["Multi-outlet Cloud", "QRIS Otomatis", "Manajemen Stok Lintas Outlet"],
      color: "from-blue-50/20 to-neutral-50/50",
      icon: Laptop
    },
    {
      id: "brewco",
      category: "Aplikasi Mobile Pelanggan",
      title: "Brew & Co Mobile Loyalty & Ordering",
      description: "Aplikasi custom iOS & Android untuk mengurangi antrian kasir fisik. Pelanggan bisa memesan dari jalan (pickup) atau langsung dari meja kafe melalui scanning QR code.",
      metrics: {
        label: "Pertumbuhan Omset",
        value: "+25.8% Bulanan",
        details: "Didominasi oleh pesanan repeat-order via aplikasi"
      },
      tags: ["Android & iOS Native", "Push Notification", "Loyalty Poin"],
      color: "from-neutral-50/60 to-blue-50/20",
      icon: Smartphone
    },
    {
      id: "dailysip",
      category: "Dashboard Analitik & Prediksi Stok",
      title: "Daily Sip Executive Dashboard",
      description: "Dashboard pemantauan performa bisnis bagi owner pemilik kafe. Melacak grafik laba bersih, bahan baku termahal, serta meramalkan kapan harus memesan bubuk susu & biji kopi.",
      metrics: {
        label: "Konservasi Stok",
        value: "Sisa Stok -18%",
        details: "Mencegah pembusukan susu & kerusakan biji kopi"
      },
      tags: ["Interactive Charts", "Eksport Laporan Manual", "Prediksi Permintaan"],
      color: "from-blue-50/10 to-neutral-50/60",
      icon: BarChart3
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-150 px-3 py-1.5 rounded-full inline-block">
            Showcase Portofolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
            Karya Utama Yang Membimbing <span className="text-blue-600">Pertumbuhan</span> Bisnis Kopi.
          </h2>
          <p className="text-sm md:text-base text-neutral-500 max-w-xl leading-relaxed">
            Setiap baris kode dirancang untuk memberikan dampak bisnis yang nyata. Lihat bagaimana sistem kami diadaptasi langsung ke lapangan oleh coffee shop paling bergengsi.
          </p>
        </div>

        {/* Apple Style Showcase Grid */}
        <div className="space-y-12">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`rounded-3xl p-8 md:p-12 bg-gradient-to-br ${project.color} border border-neutral-200/50 flex flex-col lg:flex-row gap-10 items-stretch overflow-hidden relative shadow-sm`}
              >
                
                {/* Content Left */}
                <div className="lg:w-7/12 flex flex-col justify-between space-y-8 relative z-10">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1 rounded bg-white text-blue-600 shadow-sm border border-neutral-100">
                        <Icon className="w-4.5 h-4.5" />
                      </div>
                      <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest">
                        {project.category}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-neutral-900 leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold bg-white/80 backdrop-blur border border-neutral-150 text-neutral-800 px-2.5 py-1 rounded-lg">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-neutral-100 w-fit">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span className="text-[11px] font-extrabold text-neutral-700">Uptime Server Over 99.9%</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-blue-600 shrink-0" />
                      <span className="text-[11px] font-extrabold text-neutral-700">Full Cloud Sync GPS</span>
                    </div>
                  </div>
                </div>

                {/* KPI stats Card block (Right Column Visual representation) */}
                <div className="lg:w-5/12 bg-white rounded-2xl p-6 sm:p-8 border border-neutral-100 shadow-sm flex flex-col justify-between min-h-[220px] lg:min-h-auto relative">
                  
                  {/* Visual design accent top */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/10 rounded-full blur-2xl pointer-events-none" />

                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-widest text-blue-600 font-bold block">
                      {project.metrics.label}
                    </span>
                    <h4 className="text-3xl sm:text-4xl font-black text-neutral-900 font-sans tracking-tight">
                      {project.metrics.value}
                    </h4>
                    <p className="text-xs text-neutral-500 font-semibold leading-relaxed">
                      {project.metrics.details}
                    </p>
                  </div>

                  <div className="pt-6 border-t border-brand-100 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      <span className="text-[10px] font-bold text-brand-600">Terbuka untuk Audit Lapangan</span>
                    </div>
                    
                    <a
                      href="https://wa.me/6285710300560"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-extrabold text-[#8C7853] hover:text-brand-950 transition-colors flex items-center gap-1 group"
                    >
                      Bahas Solusi Ini
                      <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                    </a>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
