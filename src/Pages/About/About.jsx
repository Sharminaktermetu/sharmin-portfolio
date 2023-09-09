import SectionTitle from "../../Shared/SectionTitle";
import myimage from '../../assets/108361068.jpg'
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
const About = () => {
  return (
    <>
      <SectionTitle title={'About Me'}></SectionTitle>
      <div>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={myimage} className="rounded-lg shadow-2xl" />
          <div className="text-slate-200">

            <p>
              Hey there, <b>I'm Sharmin, a web application developer</b> specializing in the MERN stack. My journey revolves around crafting digital experiences using MongoDB, Express.js, React, and Node.js.
            </p>
            <br />
            <p>Passionate about clean code and innovative design, I bring ideas to life by blending front-end finesse with back-end prowess. With an eye for detail, I create applications that are as efficient as they are beautiful.</p>
            <br />
            <p>

              Collaboration is my strength. I thrive in diverse teams, working closely with designers and clients to build solutions that matter. I'm not just a coder; I'm a problem solver and a lifelong learner.
            </p>
            <br />
            <p>Join me on my quest to explore new technologies and create impactful web applications. Let's build the future together, one MERN stack at a time---</p>
            <br />
            <div className="text-2xl flex gap-10">
              <a href="https://github.com/Sharminaktermetu" target="_blank" rel="noopener noreferrer">   <FaGithub></FaGithub></a>

              <a href="https://www.linkedin.com/in/sharmin-akter-metu/" target="_blank" rel="noopener noreferrer"> <FaLinkedin></FaLinkedin></a>
              <a href="https://drive.google.com/file/d/1MmXQVuPtut--77Q2VSJwd61qHrKGDkrx/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FaFilePdf></FaFilePdf></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;