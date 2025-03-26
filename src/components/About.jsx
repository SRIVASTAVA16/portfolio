import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc";
const ServiceCard = ({index, title, icon}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
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
          <img src={icon} alt={title} className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.heroHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-4 text-secondary text-[17px] "
      >
<<<<<<< HEAD
        A passionate Data Scientist specializing in extracting actionable insights from complex data. 
=======
        A passionate Data Scientist specializing in extracting actionable insights from complex data.
>>>>>>> be5aa31e38d2285a450548a98e5f35102444e058
        I harness the power of data to build intelligent, data-driven solutions with a focus on performance, predictive analytics, and optimization. My expertise spans from cleaning and preprocessing large datasets to building machine learning models that solve real-world problems. I enjoy uncovering patterns in data and transforming them into valuable insights. Whether it’s building predictive models, designing recommendation systems, or leveraging data to inform business decisions, I’m always eager to turn raw data into impactful results.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper (About, "about");
