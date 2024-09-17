import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Clément Joly | Professional Soccer Player</title>
        <meta name="description" content="Official website of Clément Joly, professional soccer player. Discover his journey, achievements, and latest news." />
        <meta name="keywords" content="Clément Joly, soccer, football, professional player" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.clementjoly.com/" />
        <meta property="og:title" content="Clément Joly | Professional Soccer Player" />
        <meta property="og:description" content="Discover the journey and achievements of Clément Joly, professional soccer player." />
        <meta property="og:image" content="https://www.clementjoly.com/assets/image/clement.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.clementjoly.com/" />
        <meta property="twitter:title" content="Clément Joly | Professional Soccer Player" />
        <meta property="twitter:description" content="Discover the journey and achievements of Clément Joly, professional soccer player." />
        <meta property="twitter:image" content="https://www.clementjoly.com/assets/image/clement.jpg" />

        <link rel="canonical" href="https://www.clementjoly.com/" />
      </Head>

      <div className="flex min-h-screen items-center justify-center fixed bg-clement bg-cover bg-center w-full h-full flex-col">
        <div className='absolute top-16 flex flex-col items-center justify-center z-50'>
          <Image src="/assets/img/d2s-logo.png" alt="D2S" width={50} height={50} />
          <p className='text-white text-xs uppercase tracking-wider mt-4 font-bold text-center'>
            Awarded Best Player of FC D2S 4 times in a row <br />
            2021, 2022, 2023, 2024
          </p>

        </div>
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="relative z-10 text-center p-10 rounded-lg">
          <h1 className="text-6xl font-bold text-white uppercase tracking-wider mb-4">
            Clément Joly
          </h1>
          <p className="text-xl text-gray-200 font-light mb-8">
            🔥 Professional Soccer Player 🔥
          </p>
          <div className="flex md:flex-row flex-col justify-center gap-4">
            <a href='https://www.youtube.com/watch?v=mmeLCAP74KA' target='_blank' className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-400 transition duration-300 w-full md:w-auto">
              Découvrir mon parcours
            </a>
            <a href='https://youtube.com/shorts/WP3RaEtzeVA' target='_blank' className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-500 transition duration-300 w-full md:w-auto">
              Voir mes meilleurs moments
            </a>
          </div>
        </div>


        <div className='absolute bottom-16 flex flex-col items-center'>
          <p className='text-white text-sm uppercase tracking-wider mb-4 font-bold'>SOUTENU PAR</p>
          <div className="flex justify-center items-center space-x-8">
            <Image src="/assets/img/nike-logo.png" alt="Nike" width={50} height={50} />
            <Image src="/assets/img/adidas-logo.png" alt="Adidas" width={50} height={50} />
            <Image src="/assets/img/puma-logo.png" alt="Puma" width={50} height={50} />
          </div>
        </div>
      </div>
    </>
  );
}