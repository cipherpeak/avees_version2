import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";

// Placeholder images - replace with your actual imports
const puttuPodi = "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756361607/PUTTUPODI_dkfhqm.webp";
const appamBatter = "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756361608/APPAM_BATTER_xitpfw.webp";
const idliDosaBatter = "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756361607/IDLI_DOSA_BATTER_jt1fun.webp";
const palappamPodi = "https://res.cloudinary.com/dkzvu1c4j/image/upload/v1756361607/PALAPPAM_PODI_pzdugf.webp";

function FoodShowCase() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.05 });

  const foodItems = [
    {
      id: 1,
      category: "Rice Flour",
      name: "Puttu Podi",
      image: puttuPodi,
      description: "Traditional stone-ground rice flour for authentic Kerala puttu",
      features: ["Stone Ground", "100% Natural", "Ready in 10 mins"],
    },
    {
      id: 2,
      category: "Instant Batter",
      name: "Idli-Dosa Batter",
      image: idliDosaBatter,
      description: "Fresh, fermented batter with the perfect taste and texture",
      features: ["Fresh Daily", "Traditional Recipe", "Perfect Fermentation"],
    },
    {
      id: 3,
      category: "Rice Flour",
      name: "Palappam Podi",
      image: palappamPodi,
      description: "Authentic flour mix for soft, fluffy Kerala palappam",
      features: ["Coconut Enriched", "Easy to Make", "Traditional Taste"],
    },
    {
      id: 4,
      category: "Instant Batter",
      name: "Appam Batter",
      image: appamBatter,
      description: "Ready-to-use batter for perfect Kerala appam every time",
      features: ["Coconut Base", "Instant Ready", "Restaurant Quality"],
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-16 px-4 bg-white"
      initial="hidden"
      animate={isInView ? "visible" : "exit"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Our Traditional Products
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Authentic Kerala food products made with traditional recipes and the finest ingredients
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {foodItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white  rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
            >
              <div className="relative md:h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 md:bg-white bg-red-600 md:text-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  {item.category}
                </div>
              </div>
              
              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                
                <div className="border-t border-gray-100 pt-4 mb-4">
                  <ul className="space-y-2">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="border-t border-gray-100 pt-4">
                  <button className="w-full bg-red-600  text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button className="bg-red-600  text-white font-bold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 shadow-md">
            View all Products
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default FoodShowCase;