import Image from "next/image";
import Link from "next/link";
import Contact from "@/app/(app)/Contact/page";
import Footer from "./(app)/Footer/page";
import AppScreens from "./(app)/AppScreens/page"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200">
      <div className="flex-grow p-8 pb-20 sm:p-20">
        <main className="flex flex-col gap-12 items-center text-center">
          <h1 className="text-4xl sm:text-6xl font-bold text-[#cf6566] dark:text-blue-400">
            OtoTakip360
          </h1>
          <p className="text-xl sm:text-2xl max-w-2xl text-[#cf6566]">
            Oto tamir dükkanınızı dijital çağa taşıyın. Müşteri yönetimi, faturalama ve iş takibi tek bir platformda.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl">
            {[
              { icon: "📊", title: "Gelir-Gider Takibi", description: "Aylık finansal durumunuzu kolayca görüntüleyin." },
              { icon: "🚗", title: "Araç Geçmişi", description: "Her aracın bakım ve onarım geçmişini kaydedin." },
              { icon: "📅", title: "Randevu Sistemi", description: "Müşteri randevularını kolayca yönetin." },
            ].map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
                <span className="text-4xl mb-4">{feature.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full bg-[#cf6566] text-white px-8 py-3 text-lg font-semibold hover:bg-blue-700 transition-colors"
              href="#signup"
            >
              Ücretsiz Deneyin
            </a>
            <a
              className="rounded-full border border-[#cf6566] text-[#cf6566] dark:text-blue-400 px-8 py-3 text-lg font-semibold hover:bg-[#cf6566] hover:text-white transition-colors"
              href="#demo"
            >
              Demo İzleyin
            </a>
          </div>
        </main>
      </div>
      <AppScreens />
      <Contact />
      <Footer />

    </div>
  );
}

