"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export default function Banner() {
  const [bannerSrc, setBannerSrc] = useState(
    "https://res.cloudinary.com/dkzvu1c4j/video/upload/v1756294728/Avees_Banner_Re3_1_yx5e36.mp4",
  )
  const [isMobile, setIsMobile] = useState(false)
  const videoRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setBannerSrc("https://res.cloudinary.com/dkzvu1c4j/video/upload/v1756294728/Avees_Banner_Re3_1_yx5e36.mp4")
        setIsMobile(true)
      } else if (window.innerWidth < 1024) {
        setBannerSrc("https://res.cloudinary.com/dkzvu1c4j/video/upload/v1756294728/Avees_Banner_Re3_1_yx5e36.mp4")
        setIsMobile(false)
      } else {
        setBannerSrc("https://res.cloudinary.com/dkzvu1c4j/video/upload/v1756294728/Avees_Banner_Re3_1_yx5e36.mp4")
        setIsMobile(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch((error) => {
              console.log("Autoplay prevented:", error)
            })
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.5 },
    )

    observer.observe(video)
    return () => observer.unobserve(video)
  }, [bannerSrc])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 },
    },
    exit: { opacity: 0, transition: { duration: 0.5, ease: "easeIn" } },
  }

  const videoVariants = {
    hidden: { opacity: 0, scale: 1.05 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" },
    },
    exit: { opacity: 0, scale: 1.05, transition: { duration: 0.6, ease: "easeIn" } },
  }

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.6, ease: "easeOut" },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
  }

  return (
    <motion.section
      className="relative w-full p-5   flex items-center justify-center overflow-hidden"
      initial="hidden"
      whileInView="visible"
      exit="exit"
      viewport={{ once: false, amount: isMobile ? 0.01 : 0.05 }}
      variants={containerVariants}
    >
      <motion.div
        className="relative w-full "
        variants={videoVariants}
      >
        <motion.video
          ref={videoRef}
          src={bannerSrc}
          className="w-full h-[50rem] object-cover rounded-3xl"
          muted
          loop
          playsInline
          preload="auto"
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-start text-left px-4 sm:px-6 lg:px-8"
          variants={textVariants}
        >
          <div className="max-w-4xl">
            <motion.h1
              className="text-white font-bold tracking-tight text-balance leading-tight
                         text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl
                         drop-shadow-2xl"
              variants={floatingVariants}
              animate="animate"
            >
              <span className="bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent">
                Rooted in Kuttanad.
              </span>
              <br />
              <span className="bg-gradient-to-r from-red-600 via-white to-green-200 bg-clip-text text-transparent">
                Ready for the World.
              </span>
            </motion.h1>

            <motion.p
              className="mt-4 sm:mt-6 text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl leading-relaxed drop-shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              Discover the beauty and heritage of Kerala's backwaters, where tradition meets innovation
            </motion.p>

            <motion.div
              className="mt-6 sm:mt-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium text-sm sm:text-base hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Explore Our Story
              </button>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 2 }}
      />
      <motion.div
        className="absolute top-1/3 right-10 w-16 h-16 bg-green-500/10 rounded-full blur-xl"
        variants={floatingVariants}
        animate="animate"
        transition={{ delay: 4 }}
      />
    </motion.section>
  )
}
