import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-gray dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Gizlilik Politikası</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-gray dark:bg-gray-800 shadow overflow-hidden sm:rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="px-4 py-5 sm:p-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <nav className="md:col-span-1">
                  <div className="space-y-1">
                    <Link href="#tanim" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 block">Tanımlar</Link>
                    <Link href="#toplama" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 block">Veri Toplama</Link>
                    <Link href="#kullanim" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 block">Veri Kullanımı</Link>
                    <Link href="#saklama" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 block">Veri Saklama</Link>
                    <Link href="#transfer" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 block">Veri Transferi</Link>
                    <Link href="#silme" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 block">Veri Silme</Link>
                    <Link href="#guvenlik" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 block">Veri Güvenliği</Link>
                    <Link href="#cocuklar" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 block">Çocukların Gizliliği</Link>
                    <Link href="#degisiklikler" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 block">Değişiklikler</Link>
                    <Link href="#iletisim" className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 block">İletişim</Link>
                  </div>
                </nav>
                <div className="md:col-span-3 space-y-6">
                  <p className="text-gray-500 text-sm dark:text-gray-300">Son güncelleme: 03 Kasım 2024</p>
                  <p className="text-gray-700 dark:text-gray-300">
                    Bu Gizlilik Politikası, Hizmeti kullandığınızda Bilgilerinizi toplama, kullanma ve açıklama konusundaki politikalarımızı ve prosedürlerimizi tanımlar ve gizlilik haklarınız ile yasanın sizi nasıl koruduğunu anlatır.
                  </p>
                  <section id="tanim">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Tanımlar</h2>
                    <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
                      <li><strong>Hesap:</strong> Hizmetimize veya Hizmetimizin bazı bölümlerine erişmek için sizin için oluşturulmuş benzersiz bir hesabı ifade eder.</li>
                      <li><strong>Şirket:</strong>  OtoTakip360'ı ifade eder.</li>
                      <li><strong>Ülke:</strong> KKTC'yi ifade eder.</li>
                      <li><strong>Kişisel Veri:</strong> Tanımlanmış veya tanımlanabilir bir bireyle ilgili herhangi bir bilgiyi ifade eder.</li>
                      <li><strong>Hizmet:</strong> Uygulamayı ifade eder.</li>
                    </ul>
                  </section>
                  <section id="toplama">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Kişisel Verilerinizi Toplama ve Kullanma</h2>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Şirket, kullanıcı verilerini toplamaz ve kullanmaz. Hizmetimizi kullanırken kişisel bilgilerinizi paylaşmanız gerekmemektedir.
                    </p>
                  </section>
                  <section id="kullanim">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Kişisel Verilerinizin Kullanımı</h2>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Kişisel verilerinizi Hizmeti sağlamak ve geliştirmek için kullanıyoruz. Hizmeti kullanarak, bu Gizlilik Politikasına uygun olarak bilgilerin toplanmasını ve kullanılmasını kabul edersiniz.
                    </p>
                  </section>
                  <section id="saklama">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Kişisel Verilerinizin Saklanması</h2>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Şirket, Kişisel Verilerinizi yalnızca bu Gizlilik Politikasında belirtilen amaçlar için gerekli olduğu sürece saklayacaktır.
                    </p>
                  </section>
                  <section id="silme">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Kişisel Verilerinizi Silme</h2>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Kişisel Verilerinizi silme veya silinmesine yardımcı olmamız için talepte bulunma hakkına sahipsiniz.
                    </p>
                  </section>
                  <section id="cocuklar">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Çocukların Gizliliği</h2>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Hizmetimiz, tüm yaş gruplarındaki kullanıcılara açıktır. Ancak, kullanıcı verisi toplamıyoruz ve bu nedenle çocukların gizliliği ile ilgili özel bir uygulamamız yoktur.
                    </p>
                  </section>
                  <section id="degisiklikler">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Bu Gizlilik Politikasındaki Değişiklikler</h2>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Gizlilik Politikamızı zaman zaman güncelleyebiliriz. Yeni Gizlilik Politikasını bu sayfada yayınlayarak size herhangi bir değişiklik hakkında bilgi vereceğiz.
                    </p>
                  </section>
                  <section id="iletisim">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Bize Ulaşın</h2>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      E-posta ile: <a href="mailto:info@ototakip360.com" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">info@ototakip360.com</a>
                    </p>
                    <p className="mt-2 text-gray-700 dark:text-gray-300">
                      Telefon ile: <a href="tel:+905338815707" className="text-blue-600 hover:text-blue-800 dark:text-blue-400">+90 533 881 57 07</a>
                    </p>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
