const About = () => {
  return (
    <div 
      id="about" 
      className="min-h-screen py-12 bg-gray-50 dark:bg-gray-900 flex flex-col justify-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-primary font-semibold tracking-wide text-black uppercase dark:text-white">Hakkımızda</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-black dark:text-white sm:text-4xl">
            Kıbrıs'ın Dijital Dönüşüm Ortağı
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-300 lg:mx-auto">
            OtoTakip360, Kıbrıs'taki sanayi ustalarının işlerini dijitalleştirmek ve modernleştirmek için tasarlanmış yenilikçi bir platformdur.
          </p>
        </div>

        <div className="mt-10">
          <div className="prose prose-indigo prose-lg text-gray-500 dark:text-gray-300 mx-auto">
            <p>
              Geleneksel kalem-kağıt yöntemlerinin yerine, OtoTakip360 ile ustalarımız tüm iş süreçlerini dijital ortamda yönetebilir. Müşteri bilgilerinden araç geçmişine, faturalamadan randevu yönetimine kadar her şey artık parmaklarınızın ucunda.
            </p>
            <p>
              Amacımız, Kıbrıs'taki sanayi sektörünün verimliliğini artırmak, iş süreçlerini optimize etmek ve müşteri memnuniyetini en üst düzeye çıkarmaktır. OtoTakip360 ile işinizi geleceğe taşıyın!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
