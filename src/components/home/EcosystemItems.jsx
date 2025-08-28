export default function EcosystemItems() {
  const ecosystemItems = [
    {
      title: "Puttu House Restaurant",
      description:
        "Where the flour meets the plate. Experience authentic Kerala cuisine made from our own products.",
      image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756376062/DSC02099_nk5car.jpg", // <-- Add image for background
      ctaText: "Learn More",
      ctaColor: "text-white",
    },
    {
      title: "Avees Resort",
      description:
        "Stay where tradition breathes. A heritage riverside retreat in the heart of Kuttanad.",
      image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756376063/475698114_924091336597550_2695757163952777549_n_a5mc0o.png",
      ctaText: "Learn More",
      ctaColor: "text-white",
    },
    {
      title: "Sustainable Farming",
      description:
        "Innovation meets tradition. From hydroponics to youth empowerment in agriculture.",
      image: "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756376062/a555c96c-45d2-4408-8300-8ba430eab197_skpjxr.jpg",
      ctaText: "Learn More",
      ctaColor: "text-white",
    },
  ]

  return (
    <div className="h-full bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">
            The Avees Ecosystem
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            More than just food products - we're building a complete Kerala
            experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {ecosystemItems.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden group h-80"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Dark overlay for readability */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all duration-300"></div>

              {/* Text Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-white leading-relaxed">
                  {item.description}
                </p>
                <button
                  className={`inline-flex items-center gap-2 font-semibold ${item.ctaColor} hover:underline transition-all duration-200 group-hover:gap-3`}
                >
                  {item.ctaText}
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
