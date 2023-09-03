import SectionTitle from "../../Shared/SectionTitle";
import myimage from '../../assets/108361068.jpg'

const About = () => {
    return (
      <>
      <SectionTitle title={'About Me'}></SectionTitle>
      <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={myimage} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
     <p>Absolutely, here's a shorter version that you can use for your portfolio website:

---

Hey there, I'm Sharmin, a web application developer specializing in the MERN stack. My journey revolves around crafting digital experiences using MongoDB, Express.js, React, and Node.js.

Passionate about clean code and innovative design, I bring ideas to life by blending front-end finesse with back-end prowess. With an eye for detail, I create applications that are as efficient as they are beautiful.

Collaboration is my strength. I thrive in diverse teams, working closely with designers and clients to build solutions that matter. I'm not just a coder; I'm a problem solver and a lifelong learner.

Join me on my quest to explore new technologies and create impactful web applications. Let's build the future together, one MERN stack at a time.

---

Feel free to customize this version to match your personal style and branding. Good luck with your portfolio website!</p>
    </div>
  </div>
</div>
</>
    );
};

export default About;