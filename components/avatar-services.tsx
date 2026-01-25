"use client"

import Image from "next/image"
import MotionTransition from "./transition-component"

const AvatarServices = () => {
  return (
    <MotionTransition
      position="bottom"
      className="bottom-0 left-0 hidden xl:inline-block md:absolute"
    >
        <Image src="/MyIsaacAvatarServices.png" width={300} height={300} className="w-[370px] h-full" alt="Avatar" />
    </MotionTransition>
  )
}

export default AvatarServices