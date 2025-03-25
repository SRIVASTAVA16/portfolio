import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';
import {styles} from '../style';
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({experience}) => (
  <VerticalTimelineElement 
    contentStyle={{background: '#1d1836', color: '#fff'}}
    contentArrowStyle={{borderRight: '7px solid #232631'}} 
    date={experience.type} 
    iconStyle={{background: experience.iconBg}} 
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img src={experience.icon} alt={experience.company_name}
        className="w-[100%] h-[100%] object-contain rounded-full"/>
      </div>
    }
  >
    <div>
      <h3 className={`${experience.color} text-[24px] font-bold`}>{experience.title}</h3>
    </div>
    <p className="text-secondary font-semibold text-[16px]">{experience.techStack}</p>
    <ul className="mt-5 list-disc ml-5 space-y-2 mb-2">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">{point}</li>
      ))}
    </ul>
    <div>
      <a href={experience.sourcelink} className="text-secondary text-[16px] font-semibold">Click here to access for source code.</a>
    </div>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.heroHeadText}>Projects.</h2>
        <p className="mt-4 text-secondary text-[17px]">Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively</p>
      </motion.div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work");