import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

// Placeholder images - replace with your actual imports
const food1 = "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756361607/PUTTUPODI_dkfhqm.webp";
const food4 = "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756361608/APPAM_BATTER_xitpfw.webp";
const food2 = "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756361607/IDLI_DOSA_BATTER_jt1fun.webp";
const food3 = "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756361607/PALAPPAM_PODI_pzdugf.webp";

function FoodShowCase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.05 });

  const foodItems = [
    {
      id: 4,
      name: "Decadent Dessert",
      image: food3,
      description: "Sweet treats to satisfy your cravings"
    },
    {
      id: 2,
      name: "Delicious Pasta",
      image: food1,
      description: "Creamy pasta with premium ingredients"
    },
    {
      id: 3,
      name: "Gourmet Pizza",
      image: food2,
      description: "Artisanal pizza with fresh toppings"
    },

        {
      id: 1,
      name: "Fresh Salad",
      image: food4,
      description: "A healthy mix of greens and vegetables"
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.8,
        ease: "easeIn"
      }
    }
  };



  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-4"
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-amber-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Our Specialties
          </motion.h2>
          <motion.p 
            className="text-amber-700 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our chef's carefully crafted selection of delicious dishes made with the finest ingredients.
          </motion.p>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {foodItems.map((item) => (
            <div
              key={item.id}
              className="rounded-xl shadow-lg relative h-80 overflow-hidden group cursor-pointer"
            >
              <div className="w-full h-full transition-transform duration-500">
                <div className="food-card-front absolute inset-0 w-full h-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FoodShowCase;