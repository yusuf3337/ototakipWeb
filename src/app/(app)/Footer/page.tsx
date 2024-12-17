import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Oto Takip 360</h2>
            <p className="mb-4">Kıbrıs'taki sanayi ustalarına özel dijital çözüm</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">İletişim</h3>
            <p className="mb-2">info@ototakip360.com</p>
            <p>+90 533 881 57 07</p>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-sm text-center">
          © 2024 Softrestart Teknoloji. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  )
}

