import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';
const About = () => {
  return (
    <section className='bg-white py-20' id='about'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} className='w-full h-64' />
        <article>
          <SectionTitle text='About Me' />
          <p className='text-slate-600 mt-8 leading-loose'>
          My name is Md Isa Mia, and I am currently studying Data Science at Yamanashi Gakuin University (iCLA). With a passion for coding, I have developed expertise in various programming languages and frameworks, including HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, Node.js, Express.js, MongoDB, Mongoose, React.js, and Python. My commitment to continuous learning extends beyond academics; I am also training in Aikido and Judo at my university. These martial arts have significantly contributed to my personal growth, teaching me resilience and the importance of lifelong learning.
          </p>
        </article>
      </div>
    </section>
  );
};
export default About;
