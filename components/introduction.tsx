"use client"
import Link from "next/link"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"

const Introduction = () => {
  return (
    <div className="z-20 w-full bg-darkBg/60">
      <div className="z-20 grid justify-center items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 ">
        <Image src="/MyIsaacAvatar.png" priority width="600" height="600" alt="Profile pic" className="md:mx-auto"></Image>

        <div className="flex flex-col justify-center max-w-md mx-auto md:mx-0">
          <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10">Si puedes pensarlo,
            <TypeAnimation
                sequence={[
                    "puedes programarlo",
                    1000,
                    "puedes optimizarlo",
                    1000,
                    "puedes implementarlo",
                    1000,
                    "puedes desarrollarlo",
                    1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="block font-bold text-secondary"
            />
          </h1>
          <p className="mx-auto mb-2 text-xl md:mx-0 md:mb-8">
            Hola, como desarrollador full-stack apasionado, me especializo en transformar ideas en soluciones digitales innovadoras.
          </p>
          <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                <Link 
                  href="https://github.com/Mendivil929?tab=repositories" 
                  className="px-3 py-2 transition-all border-2 cursor-pointer text-base w-fit rounded-xl hover:shadow-xl
                  hover:shadow-white/50"
                >
                  Ver proyectos
                </Link>
                <Link 
                  href="/contact" 
                  className="px-3 py-2 transition-all border-2 cursor-pointer text-secondary border-secondary text-base w-fit rounded-xl hover:shadow-xl
                  hover:shadow-secondary"
                >
                  Contacta conmigo
                </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Introduction
