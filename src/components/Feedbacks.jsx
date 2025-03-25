import React from 'react'
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";
import { testimonials } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
import { styles } from "../style";
const ServiceCard = ({index, title, name, image}) => {
  return (
    <Tilt className="xs:w-[460px] xs:h-[auto] w-full">
      <motion.div
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={image} alt={"icon"} className="w-28 h-28 object-contain rounded-full mb-4"
          />
          <h3 className="text-white text-[20px] font-bold text-center mb-4">{name}</h3>
          <div className="text-white text-[16px] font-medium">{title}</div>
        </div>
      </motion.div>
    </Tilt>
  );
}

const Feedbacks = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What people say about me</p>
        <h2 className={styles.heroHeadText}>Testimonials.</h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap gap-10">
        {testimonials.map((testimonial, index) => (
          <ServiceCard key={testimonial.title} index={index} {...testimonial}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (Feedbacks, "feedbacks");