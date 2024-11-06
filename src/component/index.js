import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";

export const HERO_CONTENT = `Meu nome é Jofre, sou estudante de Bacharelado em
Sistemas de Informação no Instituto Federal
Catarinense e, nos últimos dois meses, tenho atuado
como freelancer na área de Frontend. Minha
experiência inclui HTML, CSS, React, JavaScript,
TypeScript e Python. Também possuo conhecimentos
em bancos de dados como MySQL e MongoDB, o que
me permite integrar o front-end com o back-end de
forma eficiente.
Estou sempre em busca de aprender e aplicar novas
tecnologias, e acredito que minha experiência prática
me permitirá contribuir de forma positiva para novos
desafios.
`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Desenvolvedor Full Stack ",
    company: "  Workana",
    description: `Atuou no desenvolvimento e manutenção de aplicações web para a plataforma Warkana, utilizando HTML, CSS, JavaScript, React.js e Python. Implementou interfaces dinâmicas e intuitivas, integrando o frontend com APIs e bancos de dados como MySQL e MongoDB, além de realizar integrações em projetos WordPress. Colaborou ativamente com stakeholders para definir requisitos e prazos, garantindo a entrega de soluções funcionais e de alta qualidade dentro dos cronogramas estabelecidos.`,
    technologies: [
      "Javascript",
      "React.js",
      "Python",
      "WordPress",
      "MySQL",
      "mongoDB",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Ecommerce",
    image: project1,
    description:
      "Desenvolvi a loja online Inova utilizando HTML, CSS e JavaScript, criando uma interface intuitiva e moderna para uma experiência de compra agradável. A loja oferece categorias diversificadas, como moda, cuidados pessoais, eletrônicos e decoração, com foco em usabilidade e responsividade para acesso em diferentes dispositivos. Esse projeto reflete minhas habilidades em frontend e minha capacidade de criar soluções funcionais para o comércio eletrônico.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://ecommerce-inova-bm4p.vercel.app/",
  },
  {
    title: "Production Deployment",
    image: project2,
    description:
      "A Inova é uma loja online desenvolvida em JavaScript e React, trazendo uma interface moderna e responsiva. A organização das categorias e o design são voltados para melhorar a experiência do usuário, facilitando o acesso rápido aos produtos. ",
    technologies: ["React", "JavaScript"],
    link: "https://inova-react.vercel.app/",
  },
];

export const CONTACT = {
  phoneNo: "+55 47 99957-0049",
  email: "jofretomas.dev@gmail.com",
};
