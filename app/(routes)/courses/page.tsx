import TransitionPage from '@/components/transition-page'
import BuyCourseButton from '@/components/buy-course-button'
import Image from 'next/image'

const CoursesPage = () => {
  return (
    <>
      <TransitionPage />
      <div className='min-h-screen pb-20 pt-28 md:pt-36 bg-gradient-to-b from-darkBg to-darkBg/50'>
        <div className='max-w-5xl mx-auto px-5 md:px-8 xl:px-20'>
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16">
            <div className="flex-1 text-center md:text-left">
               <div className="flex mt-5 md:mt-0 justify-center md:justify-start gap-2 mb-6 opacity-80">
                 <span className="text-sm bg-white/10 px-3 py-1 rounded-full">React.js</span>
                 <span className="text-sm bg-white/10 px-3 py-1 rounded-full">Next.js</span>
                 <span className="text-sm bg-white/10 px-3 py-1 rounded-full">Tailwind CSS</span>
                 <span className="text-sm bg-white/10 px-3 py-1 rounded-full">Node.js</span>
               </div>
               
               <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
                 Curso Intensivo: <br />
                 <span className="text-secondary">Creación de un Sitio Web desde 0</span>
               </h1>
               <p className="text-xl text-gray-300 mb-8">
                 Creación de sitios para principiantes. Domina el stack moderno.
               </p>

               {/* PRECIO Y BOTÓN */}
               <div className="bg-white/5 p-6 rounded-2xl border border-secondary/20 inline-block">
                 <p className="text-3xl font-bold text-white mb-2">
                   $100 MXN <span className="text-sm font-normal text-gray-400">/ pago único</span>
                 </p>
                 <BuyCourseButton />
                 <p className="text-sm text-gray-400 mt-3">Lugares limitados. Pago seguro vía Stripe.</p>
               </div>
            </div>

            <div className="flex-1 relative">
               <div className="aspect-video bg-gradient-to-tr from-blue-900 to-secondary/30 rounded-3xl flex items-center justify-center p-10 shadow-2xl shadow-secondary/20">
                    <Image src="/LogoMendivilTech.png"  alt='Logo' width={300} height={300}/>
               </div>
            </div>
          </div>

          {/* Fecha y Hora */}
          <div className="grid md:grid-cols-2 gap-8 mt-10 max-w-3xl mx-auto">
            {/* Tarjeta de Fechas */}
            <div className="bg-white/5 p-6 rounded-xl border-l-4 border-secondary flex items-start gap-4">
              <div className="text-3xl">📅</div>
              <div>
                <h3 className="text-xl font-bold mb-1">¿Cuándo?</h3>
                <p className="text-lg">Del 9 al 13 de Febrero, 2026.</p>
              </div>
            </div>
            {/* Tarjeta de Horario */}
            <div className="bg-white/5 p-6 rounded-xl border-l-4 border-secondary flex items-start gap-4">
              <div className="text-3xl">⏰</div>
              <div>
                <h3 className="text-xl font-bold mb-1">Horario</h3>
                <p className="text-lg">7:30 p.m. (GMT-7)</p>
                <p className="text-sm text-gray-400">Vía Zoom 🎥</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default CoursesPage