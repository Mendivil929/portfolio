"use client"
import Link from "next/link";

import { socialNetworks } from "@/data";

import MotionTransition from "./transition-component";
import { usePathname } from "next/navigation";

const Header = () => {
    const router = usePathname();

    const socialToDisplay = socialNetworks.filter((network) => {
        if (router === '/courses') {
            return network.id === 2 || network.id === 4
        }
        return true
    }) 

    return (
    <MotionTransition position="bottom" className="absolute z-40 inline-block w-full top-5 md:top-10 px-5 md:px-20">
        <header>
            <div className="container justify-between w-full mx-auto md:flex">
                <Link href="/" className="block w-full md:w-auto">
                    <h1 className="my-3 text-4xl font-bold text-center md:text-left">
                        MendivilTech
                        <span className="text-secondary">
                            Dev
                        </span>
                    </h1>
                </Link>
                <div className="flex items-center justify-center gap-7">
                    {socialToDisplay.map(({logo, src, id}) => (
                        <Link 
                        key={id}
                        href={src}
                        target="_blank"
                        className="transition-all duration-300 hover:text-secondary"
                        >
                            {logo}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    </MotionTransition>
    )
}

export default Header;
