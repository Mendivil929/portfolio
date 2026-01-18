import AvatarServices from '@/components/avatar-services'
import CircleImage from '@/components/circle-image'
import SliderServices from '@/components/slider-services'
import TransitionPage from '@/components/transition-page'

const ServicesPage = () => {
  return (
    <>
      <TransitionPage></TransitionPage>
      <CircleImage />
      <AvatarServices />
      <div className='grid items-center justify-center h-screen
                      max-w-5xl gap-6 mx-auto md:grid-cols-2 px-20'>
        <div className='max-w-[450px] mt-20 md:mt-0'>
          <h1 className='text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5'>
            Mis{' '}
            <span className='font-bold text-secondary'>
              servicios.
            </span>
          </h1>
          <p className='mb-3 text-xl text-gray-300'>
            No solo escribo código, construyo ecosistemas.
            Desde la robustez de aplicaciones de escritorio ERP con C# .NET para gestionar tu negocio,
            hasta la agilidad de interfaces web modernas con React y Node.js.
            Mi misión es crear software que escale contigo.
          </p>
          <button className='px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65 cursor-pointer'>Contacta conmigo</button>
        </div>

        {/* SLIDER */}
        <div>
          <SliderServices />
        </div>
      </div>
    </>
  )
}

export default ServicesPage
