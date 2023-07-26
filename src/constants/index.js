import {
    google,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    git,
    Portfolio,
    docker,
    java,
    proyect,
    sql,
    kubernetes,
    php,
    spring,
    pildora,
    scout,
    astron,
    coche,
    prof,
    ing
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Educación",
    },
    {
      id: "work",
      title: "Proyectos",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Ingeniero industrial",
      icon: ing,
    },
    {
      title: "Curso en Marketing Digital",
      icon: google,
    },
    {
      title: "Curso de java",
      icon: pildora,
    },
  ];
  
  const technologies = [
    {
      title: "JavaScript",
      icon: javascript,
    },
    {
      title: "React JS",
      icon: reactjs,
    },
    {
      title: "Java",
      icon: java,
    },
    {
      title: "Spring",
      icon: spring,
    },
    {
      title: "php",
      icon: php,
    },
    {
      title: "SQL",
      icon: sql,
    },
  ];
  
  const experiences = [
    {
      title: "Técnico informático ",
      company_name: "Astron",
      icon: astron,
      iconBg: "#ffffff",
      date: "Enero 2021 - Junio 2022",
      points: [
        "Experiencia en instalación y mantenimiento de redes y equipos informáticos principalmente dentro del sector retail.",

      ],
    },
    {
      title: "Profesor particular",
      company_name: "Autónomo",
      icon: prof,
      iconBg: "#f4f4f4",
      date: "Octubre 2017 - Junio 2019",
      points: [
        "Profesor particular de matemáticas y física. Clases destinadas a niños desde la ESO hasta preparación de selectividad.",

      ],
    },
    {
      title: "Monitor Scout",
      company_name: "Asociación Educativa Grupo Scout San Juan",
      icon: scout,
      iconBg: "#ffffff",
      date: "Septiembre 2013 - Julio 2017",
      points: [
        "Voluntario en una asociación que trabaja con niños en riesgo de exclusión social en la zona de Sevilla conocida como 'La esquina del gato'.",
        "Tesorero y coordinador del grupo.",
        "Experiencia montando eventos como verbenas, conciertos, campamentos de verano, animación de cumpleaños y onomásticas para conseguir financiación para la asociación.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "ProjectMicro",
      description:
        "Proyecto en spring en el cual se realiza un CRUD a un servidor mySQL y se disponen de varios microservicios comunicandose mediante REST, sincronizados y compartiendo la carga con instancias similares",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "spring",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: proyect,
      source_code_link: "https://github.com/pedrogg/ProjectMicro",
    },
    {
      name: "Portfolio",
      description:
        "Esta misma página es un ejemplo de mis proyectos. Hecha en React con librerias 3D y Tailwind para demostrar mis capacidades en el frontend.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: Portfolio,
      source_code_link: "https://github.com/pedrogg/Portfolio",
    },
    {
      name: "Coche automatizado",
      description:
        "Pequeño coche a motor electrico controlado mediante un arduino para seguir con unos sensores una línea negra.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "arduino",
          color: "green-text-gradient",
        },
        {
          name: "ingenieria",
          color: "pink-text-gradient",
        },
      ],
      image: coche,
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  