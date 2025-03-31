"use client"
import Link from "next/link"
import BackgroundVideo from "./_components/BackgroundVideo"
import { useState } from "react"

export default function Home() {
  const [videoLoaded, setVideoLoaded] = useState(false)
  return (
    <>
      <BackgroundVideo
        onLoadedData={() => setVideoLoaded(true)}
        src="https://res.cloudinary.com/ddfvmm3tq/video/upload/v1743404728/5031099-hd_1920_1080_30fps_k7eim5.mp4"
        poster="https://res.cloudinary.com/ddfvmm3tq/image/upload/v1743405078/pexels-davidmcbee-1486785_mhqojf.jpg"
      />
      {!videoLoaded && (
        <div className="fixed inset-0 z-[1] bg-transparent backdrop-blur-[3px]"></div>
      )}
      <main className="flex justify-center items-center h-[80dvh] relative z-[2]">
        <div className="bg-black/5 backdrop-blur-md w-[80%] max-w-[600px] rounded-2xl px-4 lg:px-14 py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-medium leading-tight text-background">
            <span>Become a </span>
            <span className="text-primary brightness-125">Property Owner</span>
            <span> Effortlessly</span>
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200 font-poppinns">
            Invest in your future with premium land and property options. Find
            the perfect home or secure a valuable asset with ease.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 font-roboto text-sm lg:text-lg text-white font-medium">
            <Link href="/properties" className="btn-primary">
              Browse Properties
            </Link>
            <Link
              href="/contact"
              className="cursor-pointer border px-3 py-2 lg:px-6 lg:py-3 border-white text-white rounded-lg shadow-lg hover:bg-white/20 transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
