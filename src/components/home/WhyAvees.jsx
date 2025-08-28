import { Building, Leaf, Sprout, Users, Zap } from "lucide-react"
import { useState, useEffect } from "react"
import { GiCoconuts } from "react-icons/gi"

const WhyAvees = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])


  const features = [
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Clean Label Promise",
      description:
        "No artificial preservatives, colors, or flavors. Just pure, natural ingredients the way our ancestors intended.",
      color: "white",
    },
    {
      icon: <Zap className="h-8 w-8 " />,
      title: "Stone Ground Fresh",
      description:
        "Traditional stone grinding preserves nutrients and authentic flavors, ensuring every bite tastes like home.",
      color: "white",
    },
    {
      icon: <GiCoconuts className="h-8 w-8" />,
      title: "Coconut Milk Base",
      description:
        "Enriched with fresh coconut milk from our own farms, adding richness and authentic Kerala taste to every product.",
      color: "white",
    },
  ]

  const processes = [
    {
      icon: <Sprout className="h-6 w-6 text-spice-orange" />,
      title: "Sustainable Farming",
      description: "Grown in the unique ecosystem of Kuttanad's below-sea-level farmlands.",
      delay: "0ms",
    },
    {
      icon:<Building className="h-6 w-6 text-accent" />,
      title: "Traditional Processing",
      description: "Stone-ground using time-honored methods that preserve nutrition and flavor.",
      delay: "200ms",
    },
    {
      icon: <Users className="h-6 w-6 text-spice-orange" />,
      title: "Quality Assurance",
      description: "Every batch tested for purity, freshness, and authentic taste before reaching you.",
      delay: "400ms",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Why Avees */}
      <section className="min-h-screen flex items-center justify-center py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            id="hero-title"
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible["hero-title"] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 text-balance">
              Why{" "}
              <span className="bg-red-600 bg-clip-text text-transparent">Avees</span>?
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Discover the authentic taste of Kerala with our commitment to purity, tradition, and quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                id={`feature-${index}`}
                className={`group transition-all duration-700 ${
                  isVisible[`feature-${index}`] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative p-8 rounded-3xl bg-white  shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-r  ${feature.color} border-red-600 text-red-600 border flex items-center justify-center text-3xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed text-pretty">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* From Field to Fork Section */}
      <section className="min-h-screen py-20 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div>
              <div
                id="field-title"
                className={`transition-all duration-1000 ${
                  isVisible["field-title"] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                }`}
              >
                <h2 className="text-5xl md:text-6xl font-bold text-red-600 mb-8 text-balance">From Field to Fork</h2>
                <p className="text-xl text-gray-600 mb-12 leading-relaxed text-pretty">
                  Every grain tells a story. From the fertile lands of Kuttanad, below sea level, to your kitchen table
                  - we bring you the authentic taste of Kerala with uncompromising quality and tradition.
                </p>
              </div>

              <div className="space-y-8">
                {processes.map((process, index) => (
                  <div
                    key={index}
                    id={`process-${index}`}
                    className={`flex items-start gap-6 transition-all duration-700 ${
                      isVisible[`process-${index}`] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                    }`}
                    style={{ transitionDelay: process.delay }}
                  >
                    <div className="w-16 h-16 rounded-full white flex items-center justify-center border border-red-600 text-red-600 text-2xl flex-shrink-0">
                      {process.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{process.title}</h3>
                      <p className="text-gray-600 leading-relaxed text-pretty">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div
              id="field-image"
              className={`transition-all duration-1000 ${
                isVisible["field-image"] ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
                <img
                  src="https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756362912/kuttanad-landscape-CTDZeafT_hiawjw.jpg"
                  alt="Kuttanad Backwaters - Below Sea Level, Above Expectations"
                  className="w-full h-96 lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
                  <div className="absolute bottom-8 left-8 text-white">
                    <p className="text-sm font-medium mb-2 opacity-90">Kuttanad Backwaters</p>
                    <h3 className="text-2xl font-bold text-balance">Below Sea Level. Above Expectations.</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}

export default WhyAvees
