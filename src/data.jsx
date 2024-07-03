import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact, FaBootstrap, FaPython, FaDatabase  } from 'react-icons/fa';

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML and CSS, I adeptly craft visually appealing and responsive websites that deliver optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'My skills include leveraging modern JavaScript frameworks and libraries to create responsive, high-performance applications. ',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'With advanced proficiency in React, I develop efficient and interactive front-end applications, emphasizing a component-based architecture.',
  },
  {
    id: nanoid(),
    title: 'Bootstrap&Tailwind',
    icon: <FaBootstrap  className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Bootstrap, I design responsive and visually appealing websites with streamlined UI components for enhanced user experience.',
  },
  {
    id: nanoid(),
    title: 'Database',
    icon: <FaDatabase className='h-16 w-16 text-emerald-500' />,
    text: 'Skilled in database management, I create robust data architectures to optimize storage, retrieval, and information management for scalable applications.',
  },
  {
    id: nanoid(),
    title: 'Python',
    icon: <FaPython className='h-16 w-16 text-emerald-500' />,
    text: 'Proficient in Python, I develop versatile and robust applications, leveraging its rich ecosystem and libraries for efficient problem-solving and automation.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: './img/img1.png/',
    url: 'https://preeminent-strudel-401c2e.netlify.app',
    github: 'https://github.com/isa-mia/newsgridUpdate',
    title: 'Sports Newsgrid Website',
    text: 'I meticulously designed a sports news website using a combination of HTML, CSS, and JavaScript, ensuring an engaging and user-friendly experience for visitors.',
  },
  {
    id: nanoid(),
    img: './img/pagination.png/',
    url: 'https://delightful-bonbon-630e68.netlify.app',
    github: 'https://github.com/isa-mia/pagination',
    title: 'Github pagination',
    text: 'I developed a GitHub pagination page using ReactJS to enhance visitor engagement and user-friendliness.',
  },
  {
    id: nanoid(),
    img: './img/img5.png/',
    url: 'https://resplendent-lebkuchen-2de974.netlify.app',
    github: 'https://github.com/isa-mia/resturantWeb',
    title: 'Restaurant Website',
    text: 'I expertly designed a restaurant website using HTML, CSS, and JavaScript to deliver an engaging and user-friendly experience for visitors.',
  },
  {
    id: nanoid(),
    img: './img/port.png/',
    url: 'https://app.netlify.com/teams/isa-mia/overview',
    github: 'https://github.com/isa-mia',
    title: 'Portfolio',
    text: 'Using HTML, CSS, JavaScript, and react I developed a portfolio website that offers an engaging and intuitive platform to showcase my work.',
  },
  {
    id: nanoid(),
    img: './img/img2.png/',
    url: 'https://eclectic-starship-935619.netlify.app',
    github: 'https://github.com/isa-mia/portfolioOld',
    title: 'Portfolio Project',
    text: 'I crafted a portfolio website using HTML, CSS, and JavaScript, providing an engaging and intuitive platform to display my work.',
  },
  {
    id: nanoid(),
    img: './img/test.png/',
    url: 'https://comforting-cajeta-57859b.netlify.app',
    github: 'https://github.com/isa-mia/slicslideUpdate',
    title: 'Testimonial Section',
    text: 'I created a simple testimonial section using React.js, ensuring it is both dynamic and responsive to provide a seamless user experience.',
  },
  {
    id: nanoid(),
    img: './img/birth.png/',
    url: 'https://glistening-marzipan-9ecd06.netlify.app',
    github: 'https://github.com/isa-mia/birthday',
    title: 'Birthday Reminder',
    text: 'I created a simple Birthday Reminder using React.js, ensuring it is both dynamic and responsive to provide a seamless user experience.',
  },
  {
    id: nanoid(),
    img: './img/quiz.png/',
    url: 'https://dainty-dusk-d78492.netlify.app',
    github: 'https://github.com/isa-mia/quiz',
    title: 'Quiz App',
    text: 'I created a simple Quiz App using React.js, incorporating interactive features and intuitive design to enhance user engagement and learning.',
  },
  {
    id: nanoid(),
    img: './img/manu1.png/',
    url: 'https://coruscating-figolla-4c5ab6.netlify.app',
    github: 'https://github.com/isa-mia/Manusection',
    title: 'Food Menu Section',
    text: 'I developed a straightforward Food Menu Section using React.js, ensuring its visually appealing and easy to navigate for users looking to explore dining options.',
  },
];
