import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  key?: string | number;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div className="border border-neutral-100 bg-white rounded-2xl overflow-hidden transition-all duration-200 shadow-sm">
      <button
        onClick={onClick}
        className="w-full px-6 py-4.5 sm:py-5 flex items-center justify-between text-left cursor-pointer focus:outline-none"
      >
        <div className="flex items-center gap-3">
          <div className="p-1 rounded bg-blue-50 text-blue-600">
            <HelpCircle className="w-4.5 h-4.5" />
          </div>
          <span className="text-xs sm:text-sm font-bold text-neutral-900 leading-snug">{question}</span>
        </div>
        
        <ChevronDown 
          className={`w-4 h-4 text-blue-600 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-neutral-900" : ""
          }`} 
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 pt-1.5 border-t border-neutral-100 text-[11px] sm:text-xs text-neutral-500 leading-relaxed font-normal">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Berapa lama proses pembuatan aplikasi mobile hingga rilis di App / Play Store?",
      answer: "Untuk paket standar, kami menjamin delivery sistem siap pakai dalam waktu 10 hingga 15 hari kerja. Ini mencakup konfigurasi sistem POS, integrasi database, pembuatan akun merchant QRIS, serta pendaftaran lisensi aplikasi mobile Anda ke Play Store dan App Store hingga live disetujui."
    },
    {
      question: "Bagaimana jika koneksi internet (Wi-Fi) di outlet kopi mati tiba-tiba?",
      answer: "Jangan khawatir! Sistem POS Kasir kami dirancang dengan prinsip 'offline-first'. Semua pencatatan transaksi masuk, antrian bill meja, dan penghitungan stok otomatis disimpan dalam memori lokal komputer kasir. Begitu Wi-Fi kembali tersambung, data akan segera sinkron ke cloud kantor pusat terpusat."
    },
    {
      question: "Apakah sistem bisa diintegrasikan dengan printer bluetooth yang sudah kami miliki?",
      answer: "Tentu saja! Software POS kami mendukung standar protokol pencetakan ESC/POS universal yang umum digunakan oleh bermacam merk printer bluetooth termal 58mm maupun 80mm. Jika Anda memiliki mesin EDC atau printer dapur nirkabel tipe LAN/Wi-Fi, tim kami siap mengonfigurasikannya langsung."
    },
    {
      question: "Bagaimana cara memindahkan data ribuan menu dari aplikasi kasir kami yang lama?",
      answer: "Sebagai bagian dari layanan onboarding gratis kami di awal proyek, Anda cukup menyerahkan data menu beserta harga dalam format Excel/CSV. Tim technical support kami yang berdedikasi akan membersihkan, merapikan format, dan memasukkan seluruh daftar menu tersebut ke dasbor baru Anda."
    },
    {
      question: "Apakah ada batasan jumlah barista atau kasir yang bisa didaftarkan di sistem?",
      answer: "Pada paket Growth, Enterprise, dan Lifetime lisensi, Anda mendapatkan kebebasan mendaftarkan jumlah akun pimpinan outlet, kasir shift, hingga juru masak tanpa liminitasi tambahan. Setiap barista memiliki kode PIN login unik sehingga log histori transaksi terjaga ketat."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white relative overflow-hidden">
      
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-150 px-3 py-1.5 rounded-full inline-block">
            Bantuan & Panduan Informasi
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            Punya Pertanyaan Sepele? <span className="text-blue-600">Kami Menjawab.</span>
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed font-normal">
            Kumpulan tanggapan resmi mengenai proses deployment, aspek teknis, hingga skema pelatihan staf kasir agar operasional berjalan tanpa hambatan.
          </p>
        </div>

        {/* FAQ Accordion items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
