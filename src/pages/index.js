import React, { useRef } from 'react';
import Image from 'next/image'; // ✅ Required for optimized images
import '../styles/globals.css';

const projects = [
  {
    title: 'My Ai Chat Bot',
    description: 'An intelligent conversational chatbot built using AI to assist users with smart responses.',
    link: 'https://mychatbox-xrqfzxdl83xdums9hujpve.streamlit.app/',
    image: '/aipic.png'
  },
  {
    title: 'My Clutch Simulator App',
    description: 'A mechanical clutch simulation tool demonstrating clutch dynamics and functionality interactively.',
    link: 'https://clutch-app-two.vercel.app/',
    image: '/clutchpic.png'
  },
  {
    title: 'Car Rental App',
    description: 'A modern, user-friendly web app for browsing, booking, and managing car rentals seamlessly.',
    link: 'https://hackathon3t7.vercel.app/',
    image: '/rentalpic.png'
  },
  {
    title: 'My Scientific Calculator',
    description: 'A stylish, interactive calculator supporting complex scientific operations and animations.',
    link: 'https://my-scientifiic-calculator-we9y.vercel.app/',
    image: '/calculatorpic.png'
  },
  {
    title: 'My Currency Convertor App',
    description: 'A real-time currency converter with smooth animations and support for multiple currencies.',
    link: 'https://my-currency-converter-app-vwrg.vercel.app/',
    image: '/currencypic.png'
  },
  {
    title: 'My Tic-Tac-Toe Game',
    description: 'An animated and fun version of the classic tic-tac-toe game to play and enjoy.',
    link: 'https://my-tic-tac-toe-game-tan.vercel.app/',
    image: '/ticpic.png'
  },
  {
    title: 'My Personal Library',
    description: 'A digital library manager to keep track of books, reading status, and personal book collections.',
    link: 'https://library-website-pj9s.vercel.app/',
    image: '/librarypic.png'
  },
  {
    title: 'Interactive CV Builder App',
    description: 'A professional CV builder where users can dynamically generate and preview their resumes.',
    link: 'https://mycvgenerator-n7y2p6qnakk3akwd68gtez.streamlit.app/',
    image: '/cvpic.png'
  },
  {
    title: 'Unit Convertor App',
    description: 'A sleek tool to convert between units of measurement like length, mass, temperature, and more.',
    link: 'https://assign2unitconvertor-h7bcsjbnu55cufvgdbfodz.streamlit.app/',
    image: '/unitpic.png'
  },
  {
    title: 'Password Strength Meter',
    description: 'A security-focused tool that checks and visually rates the strength of your passwords.',
    link: 'https://passwordstrengthmeter-nyzaylaudj3hymcfgkevag.streamlit.app/',
    image: '/passwordpic.png'
  },
  {
    title: 'Secure Data App',
    description: 'A privacy-first web app focused on securely handling and presenting user data.',
    link: 'https://assignment5-pejbur8y2ewod4m9xbyunw.streamlit.app/',
    image: '/datapic.png'
  },
  {
    title: 'My Thermodynamic Genius Lab',
    description: 'An educational thermodynamics app to explore engineering formulas and simulations.',
    link: 'https://thermo-idxcfddfddlpeuh2cuf6cc.streamlit.app/',
    image: '/thermopic.png'
  }
];

const Home = () => {
  const infoRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null); 
  const educationRef = useRef(null);

  const scrollToInfo = () => infoRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToProjects = () => projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToSkills = () => skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToContact = () => contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  const scrollToEducation = () => educationRef.current?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="container">
      <header className="header">
        <h1 className="shiny-text">My Portfolio</h1>
        <nav>
          <button className="btn" onClick={scrollToInfo}>Info</button>
          <button className="btn" onClick={scrollToEducation}>Education</button>
          <button className="btn" onClick={scrollToProjects}>Projects</button>
          <button className="btn" onClick={scrollToSkills}>Skills</button>
          <button className="btn" onClick={scrollToContact}>Contact</button>
        </nav>
      </header>

      <div className="profile">
        <div className="personal-info">
          <div className="info-sequence">
            <p className="info-line">Hi, I am <span>Bilal Waseem</span></p>
            <p className="info-line">I am a <span>Full Stack Developer</span></p>
            <p className="info-line">I am studying <span>Mechanical Engineering</span> & <span>AI</span></p>
            <p className="info-line">I love to create <span>responsive websites </span>& <span>projects</span></p>
            <p className="info-line">For more info, you can <span>watch My info & projects below</span></p>
          </div>
        </div>

        <div className="profile-picture">
          <Image src="/bilalwaseempic.png" alt="Bilal Waseem" width={360} height={360} />
        </div>
      </div>

      <div ref={projectsRef} id="projects" className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-image-container">
              <Image
                src={project.image}
                alt={project.title}
                width={130}
                height={130}
                className="project-image"
              />
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="view-button">
              View Project
            </a>
          </div>
        ))}
      </div>

      <div ref={skillsRef} id="skills" className="skills-section">
        <h2 className="skills-heading">My Skills</h2>
        <div className="skills-grid">
          {[
            { name: "Hifz ul Quran", image: "/hifzquranpic.png" },
            { name: "HTML", image: "/htmlpic.png" },
            { name: "CSS", image: "/csspic.png" },
            { name: "JavaScript", image: "/javascriptpic.png" },
            { name: "React", image: "/reactpic.png" },
            { name: "Next.js", image: "/nextjspic.png" },
            { name: "Python", image: "/pythonpic.png" },
            { name: "Java", image: "/javapic.png" },
            { name: "Tailwind", image: "/tailwindcsspic.png" },
            { name: "TypeScript", image: "/typescriptpic.png" },
            { name: "Git", image: "/gitpic.png" },
            { name: "SolidWorks", image: "/solidworkspic.png" },
            { name: "AutoCAD", image: "/autocadpic.png" },
            { name: "Matlab", image: "/matlabpic.png" },
          ].map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-image-container">
                <Image src={skill.image} alt={skill.name} width={80} height={80} className="skill-image" />
              </div>
              <h3 className="skill-name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <footer ref={contactRef} id="contact" className="footer-section">
        <h2 className="contact-heading">Contact Me</h2>
        <div className="footer-content">
          <div className="contact-info">
            <div className="contact-item">
              <Image src="/emailiconpic.png" alt="Email" width={30} height={30} className="contact-icon" />
              <span>bilalwaseem.thala@gmail.com</span>
            </div>
            <div className="contact-item">
              <Image src="/callpic.jpg" alt="Phone" width={30} height={30} className="contact-icon" />
              <span>+92-337-241-2661</span>
            </div>
            <div className="contact-item">
              <Image src="/locationpic.png" alt="Location" width={30} height={30} className="contact-icon" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>

          <div className="social-media">
            <a href="https://www.linkedin.com/in/bilal-waseem-b44006338" target="_blank" className="social-link linkedin">
              <Image src="/lpic.png" alt="LinkedIn" width={58} height={58} className="icon" />
            </a>
            <a href="https://github.com/bilalwaseem111" target="_blank" className="social-link github">
              <Image src="/gpic.png" alt="GitHub" width={58} height={58} className="icon" />
            </a>
            <a href="https://www.facebook.com/share/156R4QStxtw/?mibextid=qi2Omg" target="_blank" className="social-link facebook">
              <Image src="/fpic.png" alt="Facebook" width={58} height={58} className="icon" />
            </a>
            <a href="https://www.instagram.com/bilalwaseem099?igsh=dTM0Z2Z5N2szdHNq" target="_blank" className="social-link instagram">
              <Image src="/inpic.png" alt="Instagram" width={58} height={58} className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
