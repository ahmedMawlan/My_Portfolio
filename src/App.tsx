import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { useTheme } from './context/ThemeContext';
import img from './imgs/myphoto2.jpg'

function App() {
  const { theme } = useTheme();
  
  // Replace these with your actual information
  const portfolioData = {
    name: "Ahmed Ramadan",
    title: "Frontend Developer",
    photoUrl: img,
    socialLinks: {
      github: "https://github.com/ahmedMawlan",
      linkedin: "https://www.linkedin.com/in/ahmed-elroby11?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BT%2FihlfkLQSGmRkwZJix9zQ%3D%3D",
      email: "elroby480@gmail.com"
    },
    about: [
      "I'm a passionate Frontend Developer with expertise in building responsive and user-friendly web applications. With a strong foundation in modern web technologies, I create elegant solutions that combine beautiful design with efficient functionality.",
      "My journey in web development started several years ago, and I've since worked on various projects that have helped me develop a deep understanding of frontend architecture, user experience, and modern development practices."
    ],
    skills: [

      { name: "HTML/CSS", level: 90 },
      { name: "JavaScript", level: 70 },
      { name: "React", level: 60 },
      { name: "TypeScript", level: 50 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Git", level: 80 }

    ],
    projects: [
      {
        title: "E-commerce Platform",
        description: "A full-featured e-commerce platform with cart functionality and payment integration. ==> Note: This task still building.",
        image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Redux"],
        githubUrl: "https://github.com/yourusername/project1",
        liveUrl: "https://project1.example.com"
      },
      {
        title: "Simple menue food",
        description: "In this project we show sum animations and we use filter to search on menue foods.",
        image: "https://th.bing.com/th/id/OIP.ginxemAWvQq1iGz7Hn-XYAHaHa?w=202&h=202&c=7&r=0&o=5&pid=1.7",
        technologies: ["React", "bootstrap", "Css"],
        githubUrl: "https://github.com/ahmedMawlan/React-Projects/tree/master/menue-food",
        liveUrl: "https://simple-menue-food.netlify.app/"
      },
      {
        title: "Simple dates reminder",
        description: "In this small dates reminder we show some details about some people .",
        image: "https://th.bing.com/th/id/OIP.6jSaw1h6L8zNS65GzJFEgAHaDj?w=342&h=168&c=7&r=0&o=5&pid=1.7",
        technologies: ["React", "bootstrap", "Css"],
        githubUrl: "https://github.com/ahmedMawlan/React-Projects/tree/master/dates-reminder",
        liveUrl: "https://simple-dates-reminder.netlify.app/"
      },
      {
        title: "Task Management App",
        description: "A collaborative task management application by Create, Read, Update and Delete data.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        technologies: ["Html", "Css", "JavaScript"],
        githubUrl: "https://github.com/ahmedMawlan/JavaScript-Projects/tree/main/full%20product%20management%20system%20cruds",
        liveUrl: "https://full-product-management-system.netlify.app/"
      },
      {
        title: "Moving Boat",
        description: "In this projects we show scroll in JavaScript.",
        image: "https://th.bing.com/th/id/OIP.wYnsHZgWyeMwrpvNVdc_wQHaEv?w=281&h=180&c=7&r=0&o=5&pid=1.7",
        technologies: ["Html", "Css", "JavaScript"],
        githubUrl: "https://github.com/ahmedMawlan/Simple_Motion_Project",
        liveUrl: "https://the-moving-boat.netlify.app/"
      },
      {
        title: "Simple Calculator",
        description: "In this project we show simple calculator by using HTML , CSS , JS.",
        image: "https://th.bing.com/th/id/OIP.gxgH1Zq6F5jbBIkoh9YUQwHaDw?w=331&h=177&c=7&r=0&o=5&pid=1.7",
        technologies: ["Html", "Css", "JavaScript"],
        githubUrl: "https://github.com/ahmedMawlan/Calculator_task",
        liveUrl: "https://calcullatoor.netlify.app/"
      },
      {
        title: "IPHONE",
        description: "In this task we show some iphons but different colors.",
        image: "https://images.unsplash.com/photo-1512054502232-10a0a035d672?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        technologies: ["Html", "Css", "JavaScript"],
        githubUrl: "https://github.com/ahmedMawlan/JavaScript-Projects/tree/main/IPHONE%20Page",
        liveUrl: "https://i-phone-page.netlify.app/"
      },
      {
        title: "Adidas Brand",
        description: "In this task we use flex and clip-path >> Circle and mirror background.",
        image: "https://th.bing.com/th/id/OIP.yhwkvo0LdWww6RMiXCe-WgHaDt?w=308&h=174&c=7&r=0&o=5&pid=1.7",
        technologies: ["Html", "Css"],
        githubUrl: "https://github.com/ahmedMawlan/HTML-CSS-small-projects/tree/main/Adidas",
        liveUrl: "https://adidas-shoese.netlify.app/"
      },
      {
        title: "Avatar",
        description: "In this task we use flex and background-img with linear-gradiant.",
        image: "http://ts2.mm.bing.net/th?id=OIP.ty6Szq667MnAadm7QR559QHaEK&pid=15.1",
        technologies: ["Html", "Css"],
        githubUrl: "https://github.com/ahmedMawlan/HTML-CSS-small-projects/tree/main/Avatar",
        liveUrl: "https://avatars-site.netlify.app/"
      }
    ],
    contact: {
      email: "elroby480@gmail.com",
      phone: "+20 1143354137",
      location: "6th Of October, Egypt"
    }
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} transition-colors duration-300`}>
      <Navbar  />
      <div id="home">
        <Hero
          name={portfolioData.name}
          title={portfolioData.title}
          photoUrl={portfolioData.photoUrl}
          socialLinks={portfolioData.socialLinks}
        />
      </div>
      <About description={portfolioData.about} />
      <Skills skills={portfolioData.skills} />
      <Projects projects={portfolioData.projects} />
      <Contact
        email={portfolioData.contact.email}
        phone={portfolioData.contact.phone}
        location={portfolioData.contact.location}
      />
    </div>
  );
}

export default App;