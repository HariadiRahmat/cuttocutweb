import { motion } from "motion/react";
import { 
  Laptop, Smartphone, Award, BarChart3, Users, 
  Settings, ArrowUpRight 
} from "lucide-react";

export default function Services() {
  const listLayanan = [
    {
      id: "pos",
      icon: Laptop,
      title: "Sistem POS Modern",
      description: "Kasir digital handal khusus coffee shop dengan pencatatan offline-first, split bill, dan cetak struk nirkabel instan.",
      features: ["Pencatatan resep & restok otomatis", "Mendukung pembayaran tunai & e-wallet", "Mode offline jika Wi-Fi mati"],
      color: "bg-[#8C7853]"
    },
    {
      id: "mobile",
      icon: Smartphone,
      title: "Aplikasi Mobile Ordering",
      description: "Aplikasi Android & iOS custom brand Anda. Pelanggan bisa memesan dari meja (QR) or pesan mandiri untuk jemput (pickup).",
      features: ["Sistem antrian waktu riil", "Notifikasi pesanan siap jemput", "Pembayaran via e-wallet internal"],
      color: "bg-[#E86134]"
    },
    {
      id: "loyalty",
      icon: Award,
      title: "Loyalty & Membership",
      description: "Sistem pengumpulan poin berbasis transaksi untuk mengikat loyalitas pelanggan. Buat mereka terus kembali minum kopi.",
      features: ["Kartu member digital dinamis", "Sistem tukar poin ke reward menu", "Tier status: Silver, Gold, Platinum"],
      color: "bg-emerald-600"
    },
    {
      id: "dashboard",
      icon: BarChart3,
      title: "Dashboard Analitik",
      description: "Analisis penjualan harian, tren biji kopi terlaris, perilaku jam tersibuk, dan proyeksi keuntungan instan.",
      features: ["Laporan laba kotor & bersih per outlet", "Integrasi ekspor file Excel & PDF", "Visualisasi chart performa staff"],
      color: "bg-blue-600"
    },
    {
      id: "employee",
      icon: Users,
      title: "Employee Management",
      description: "Kelola absensi barista berbasis GPS selfie, pembagian shift kerja yang adil, serta kontrol penanganan kas laci kasir.",
      features: ["Log masuk-keluar & kontrol laci kas", "Perhitungan komisi per cup terjual", "Manajemen hak akses kasir & admin"],
      color: "bg-purple-600"
    },
    {
      id: "custom",
      icon: Settings,
      title: "Sistem Custom & IoT",
      description: "Integrasi printer dapur, timbangan kopi pintar, kontrol mesin otomatis, atau integrasi API sistem pihak ketiga.",
      features: ["IoT integration mesin kopi", "Multi-cabang sinkronisasi cloud", "API kustomisasi multi-level API"],
      color: "bg-brand-950"
    }
  ];

  const handleCtaClick = () => {
    window.open("https://wa.me/6285710300560", "_blank", "referrer");
  };

  return (
    <section id="layanan" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-50/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0 text-center md:text-left">
          <div className="space-y-3">
            <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-100/80 px-3 py-1.5 rounded-full inline-block">
              Layanan Utama Kami
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
              Transformasi Digital Menyeluruh <br />
              Khusus Bisnis <span className="text-blue-600">Coffee Shop</span>.
            </h2>
          </div>
          <p className="text-sm md:text-base text-neutral-500 max-w-md leading-relaxed">
            Dari sistem kasir (POS) paling mulus hingga aplikasi seluler custom brand Anda sendiri, kami merancang teknologi dengan presisi tinggi untuk skala bisnis mandiri maupun waralaba.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listLayanan.map((layanan, i) => {
            const Icon = layanan.icon;
            return (
              <motion.div
                key={layanan.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-sm hover:shadow hover:border-blue-200 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Floating Icon Base */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-none group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                      Ready to deploy
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 tracking-tight leading-none mb-3">
                    {layanan.title}
                  </h3>
                  
                  <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                    {layanan.description}
                  </p>

                  {/* Feature lists */}
                  <ul className="space-y-2.5 border-t border-neutral-100 pt-5 mb-8">
                    {layanan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-[11px] font-semibold text-neutral-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-650 mt-1.5 shrink-0 bg-blue-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleCtaClick}
                  className="w-full py-3 rounded-2xl text-xs font-semibold bg-neutral-50 text-neutral-800 border border-neutral-100 hover:bg-blue-650 hover:bg-blue-600 hover:text-white transition-all duration-200 cursor-pointer flex items-center justify-center gap-1.5 group-hover:shadow-sm"
                >
                  Konsultasi Fitur Ini
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
