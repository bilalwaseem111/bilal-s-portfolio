import React, { useRef } from 'react';
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

const App = () => {
  const infoRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null); 
  const educationRef = useRef(null);

  const scrollToInfo = () => {
    infoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSkills = () => {
    skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

    const scrollToEducation = () => {
      educationRef.current?.scrollIntoView({behavior:'smooth'});
    }



  return (
    <div className="container">
      <header className="header">
        <h1 className="shiny-text">My Portfolio</h1>
        <nav>
          <button className="btn" onClick={scrollToInfo}>Info</button>
          <button className='btn' onClick={scrollToEducation}>Education</button>
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
            <p className="info-line">I love to create <span>responsive websites </span>& <span> projects </span></p>
            <p className="info-line">For more info, you can <span>watch My info & projects below</span></p>
          </div>
        </div>

        <div className="profile-picture">
          <img src="/bilalwaseempic.png" alt="Bilal Waseem" />
        </div>
      </div>

      <div ref={infoRef} id="info" className="info-section">
        <h2 className="info-heading">About Me</h2>
        <ul className="info-list">
          <li className="info-item">
            Mechanical Engineering Student at NED University | Tech Innovator | Quarter 3 Student – Governor Sindh’s Initiative (AI, Web 3.0 & Metaverse)
          </li>
          <li className="info-item">I don’t just learn — I build, create, and innovate!</li>
          <li className="info-item">
            From designing intricate models in SolidWorks & AutoCAD to running high-precision MATLAB simulations, I bridge the gap between engineering and technology.
          </li>
          <li className="info-item">
            I'm also passionate about developing sleek, high-performance web apps using React, Next.js & TypeScript and exploring the future of AI, Web 3.0, and the Metaverse.
          </li>
          <li className="info-item">
            I thrive on problem-solving, experimenting, and bringing ideas to life — always learning, evolving, and pushing boundaries.
          </li>
          <li className="info-item">
            Let’s connect, collaborate, and create something extraordinary!
          </li>
        </ul>
      </div>



      <main className="edu-main" id="about"  ref={educationRef}>
  <div className="edu-text" data-aos="zoom-in" data-aos-duration="1000">
    <h1>EDUCATION</h1>
  </div>

  {/* Box 1 - Mechanical Engineering */}
  <div className="box-con-edu" data-aos="zoom-in" data-aos-duration="1000">
    <div className="computer">
      <h1>Bachelor in Mechanical Engineering (BME) from NED University ....in process!</h1>
      <p>
        A Bachelor in Mechanical Engineering is a college degree centered on the principles of mechanics, energy, and materials. It teaches design, analysis, and problem-solving skills related to machines and mechanical systems. This degree prepares students for careers in fields like automotive, aerospace, manufacturing, robotics, and energy systems.
      </p>
    </div>
  </div>

  {/* Box 2 - Web 3.0 and Metaverse */}
  <div className="box-con-edu" data-aos="zoom-in" data-aos-duration="1000">
    <div className="computer">
      <h1>Certified Web 3.0 and Metaverse from (Governor Initiativeof IT Program) </h1>
      <p>
        The Certified Web 3.0 and Metaverse Program explores the evolution of the internet, emphasizing blockchain technology, immersive virtual environments, and digital asset ownership. Participants gain hands-on experience in building decentralized applications (dApps) and designing interactive 3D spaces. This certification equips learners with the skills needed to thrive in emerging tech domains like decentralized finance (DeFi), virtual reality (VR), and the metaverse economy.
      </p>
    </div>
  </div>

  {/* Box 3 - Web Development Certificate */}
  <div className="box-con-edu" data-aos="zoom-in" data-aos-duration="1000">
    <div className="computer">
      <h1>Certificate of Web Development</h1>
      <p>
        The Certificate in Web Training provided a solid foundation in web development, covering essential technologies like HTML, CSS, and JavaScript. I learned how to design, structure, and enhance web pages with interactive elements. As part of this journey, I also completed a hands-on internship with Code With Alpha, where I gained practical experience and earned an additional certificate. This training marked a strong starting point in my web development career.
      </p>
    </div>
  </div>

  {/* Box 4 - Sanat of Hafiz Quran */}
  <div className="box-con-edu" data-aos="zoom-in" data-aos-duration="1000">
    <div className="computer">
      <h1>Sanat of Hafiz-e-Quran</h1>
      <p>
  Achieving the Sanat of Hafiz-e-Quran is a great honor and a symbol of strong dedication and faith. Memorizing the entire Holy Quran is a spiritual milestone and a lifelong blessing that holds deep respect in both religious and personal life. This esteemed certification was awarded by Wafaq ul Madaris, further affirming the authenticity and recognition of this achievement.
</p>

    </div>
  </div>
</main>








      <div ref={projectsRef} id="projects" className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-image-container">
              <img src={project.image} alt={project.title} className="project-image" />
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
                <img src={skill.image} alt={skill.name} className="skill-image" />
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
              <img src="/emailiconpic.png" alt="Email" className="contact-icon" />
              <span>bilalwaseem.thala@gmail.com</span>
            </div>
            <div className="contact-item">
              <img src="/callpic.jpg" alt="Phone" className="contact-icon" />
              <span>+92-337-241-2661</span>
            </div>
            <div className="contact-item">
              <img src="/locationpic.png" alt="Location" className="contact-icon" />
              <span>Karachi, Pakistan</span>
            </div>
          </div>


          <div className="social-media">
            <a href="https://www.linkedin.com/in/bilal-waseem-b44006338" target="_blank" className="social-link linkedin">
              <img src="/lpic.png" alt="LinkedIn" className="icon" />
            </a>
            <a href="https://github.com/bilalwaseem111" target="_blank" className="social-link github">
              <img src="/gpic.png" alt="GitHub" className="icon" />
            </a>
            <a href="https://www.facebook.com/share/156R4QStxtw/?mibextid=qi2Omg" target="_blank" className="social-link facebook">
              <img src="/fpic.png" alt="Facebook" className="icon" />
            </a>
            <a href="https://www.instagram.com/bilalwaseem099?igsh=dTM0Z2Z5N2szdHNq" target="_blank" className="social-link instagram">
              <img src="/inpic.png" alt="Instagram" className="icon" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
