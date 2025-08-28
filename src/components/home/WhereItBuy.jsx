import React, { useState, useEffect } from "react";



function WhereItBuy() {
  const retailers = [
    {
      name: "Zepto",
      logo: "/zepto-logo-red-text.png",
      url: "#",
    },
    {
      name: "Flipkart",
      logo: "/flipkart-logo-blue-text-with-yellow-shopping-bag.png",
      url: "#",
    },
    {
      name: "Amazon",
      logo: "/amazon-logo-black-text-with-orange-arrow.png",
      url: "#",
    },
    {
      name: "Instamart",
      logo: "/instamart-logo-red-text-with-orange-location-pin.png",
      url: "#",
    },
    {
      name: "Blinkit",
      logo: "/blinkit-logo-yellow-text.png",
      url: "#",
    },
    {
      name: "BigBasket",
      logo: "/bigbasket-logo-green-and-red-text.png",
      url: "#",
    },
  ]

  return (
    <div className="h-full p-9 py-24 bg-background flex items-center justify-center">
      <div className="w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-medium text-foreground mb-12">Click to Buy From</h2>

          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...retailers, ...retailers, ...retailers].map((retailer, index) => (
                <a
                  key={index}
                  href={retailer.url}
                  className="flex-shrink-0 mx-8 block transition-transform hover:scale-110 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-ring rounded-lg p-4"
                  aria-label={`Buy from ${retailer.name}`}
                >
                  <img
                    src={retailer.logo || "/placeholder.svg"}
                    alt={`${retailer.name} logo`}
                    className="h-20 w-auto object-contain"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: 300%;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  )
}

export default WhereItBuy;