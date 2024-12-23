import { Download, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export const Home = () => (
  <div className="min-h-screen bg-gradient-to-r from-black to-gray-900  text-white p-10">
    
    {/* Profile and Welcome Content Section */}
    <div className="flex flex-col md:flex-row items-center justify-between w-full mb-16">
      {/* Profile Photo on Left */}
      <div className="flex-1 md:w-1/3 mb-8 md:mb-0">
        <img src="main.jpg" alt="Dev Ruhela Image" className="w-full h-96 object-cover rounded-3xl border-2 border-pink-400" />
      </div>
      
      {/* Welcome Content on Right */}
      <div className="flex-1 md:w-2/3 pl-0 md:pl-10 text-center md:text-left ml-16">
        <h1 className="text-8xl font-thin text-teal-300 drop-shadow-lg mb-6">Dev Ruhela</h1>
        <h2 className="text-3xl font-extralight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 drop-shadow-lg mb-6">
          Full Stack Web Developer
        </h2>
        <p className="mb-8 max-w-xl font-thin text-lg leading-relaxed">
          I am a passionate developer currently pursuing my Bachelor of Technology (B.Tech) in <span className='font-normal'>Information Technology - Business Informatics</span> from the
          <span className="font-normal"> Indian Institute of Information Technology, Allahabad (IIIT Allahabad) </span>
          from the batch of 2023. I am currently in my 4th semester. My areas of interest include web development, generative AI, and problem-solving. 
          Explore my projects and feel free to connect with me!
        </p>
      </div>
    </div>
    
    {/* Interests */}
    <h1 className='text-3xl font-extralight bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-pink-400 to-purple-500  drop-shadow-lg mb-10 text-center'>Areas of Interest  </h1>

    {/* Skills Cards Section */}
    <div className="w-full">
      <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Web Development', 'Generative AI', 'Problem Solving'].map((skill, index) => (
          <motion.div 
            key={index} 
            className="bg-gray-800 border-2 border-gray-500 bg-opacity-30 shadow-xl rounded-3xl p-6 transform transition-all hover:-translate-y-2 hover:shadow-2xl" 
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
          >
            <div className="flex items-center space-x-4">
              {/* Image for each skill */}
              
              <div>
                <h2 className="text-3xl font-light text-teal-400 mb-4">{skill}</h2>
                <p className="text-gray-300 mb-4">{getSkillDescription(skill)}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Horizontal Line */}
    <div className="w-full mt-16 mb-8 border-t-2 border-gray-600"></div>

    {/* Skills Section */}
    {/* Programming Languages Section */}
    <div className="w-full mb-8">
      <h2 className="text-3xl font-extralight bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-pink-400 to-purple-500 drop-shadow-lg mb-8 text-center">Programming Languages</h2>
      <div className="flex space-x-12 overflow-x-auto items-center justify-center">
        {['JavaScript', 'Python', 'Java', 'C++','C'].map((language, index) => (
          <div 
            key={index} 
            className="bg-gray-800 border-2 border-teal-300 bg-opacity-30 shadow-xl rounded-3xl p-4 text-center flex-shrink-0"
          >
            <div className="flex items-center justify-center space-x-4">
              {/* Image for each language */}
              <img 
                src={`${language.toLowerCase()}.png`} 
                alt={language} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-extralight text-gray-200">{language}</h3>
                <p className="text-gray-300">
                  {getLanguageDescription(language)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Horizontal Line */}

    {/* Other Skills Section */}
    <div className="w-full">
      <h2 className="text-3xl font-extralight bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-pink-400 to-purple-500  drop-shadow-lg mb-6 mt-20 text-center">Skills </h2>
      <div className="flex space-x-12 overflow-x-auto justify-center items-center">
        {['React', 'Node.js', 'Tailwind', 'MongoDB'].map((skill, index) => (
          <div 
            key={index} 
            className="bg-gray-800 border-2 border-teal-300 bg-opacity-30 shadow-xl rounded-3xl p-4 text-center flex-shrink-0"
          >
            <div className="flex items-center justify-center space-x-4">
              {/* Image for each skill */}
              <img 
                src={`${skill.toLowerCase()}.png`} 
                alt={skill} 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-extralight text-gray-200">{skill}</h3>
                <p className="text-gray-200">
                  {getSkillDescription(skill)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="w-full mt-12 mb-8 border-t-2 border-gray-600"></div>

  
    {/* Project Section */}
    <h2 className="text-4xl font-extralight bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-pink-400 to-purple-500 drop-shadow-lg mb-12 mt-20 text-center">
  Projects
</h2>

<div className="space-y-16">
  {/* Project 1 */}
  <div className="flex flex-col md:flex-row items-center bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-3xl shadow-xl">
    <img 
      src="chatbot.jpeg" 
      alt="Project 1" 
      className="w-full h-96 md:w-1/2 rounded-xl border-2 border-teal-400 mb-8 md:mb-0 md:mr-8 object-cover"
    />
    <div className="text-center md:text-left">
      <h3 className="text-4xl font-extralight text-teal-400 mb-4">Chat-IIITA : A Query Chatbot</h3>
      <p className="text-gray-300 text-lg font-extralight leading-relaxed">
      <span className='font-semibold'>Chat-IIITA</span> is an AI-powered chatbot designed to assist IIITA students, prospective students, and faculty members. 
        Built with FastAPI, LangChain, and MERN Stack, it provides instant responses to academic queries, administrative processes, 
        and campus-related guidance. The bot is capable of handling both <span className='font-semibold'>text and voice inputs</span>, offering an interactive and intuitive 
        experience for users.
      </p>
      <div  className='flex flex-row gap-10'>
        <div className="mt-6 ">
          <a 
            href="https://github.com/DevRuhela028/Chat-IIITA" 
            className="inline-block bg-teal-500 font-exralight text-gray-100 text-md py-2 px-4 rounded-lg shadow-md hover:bg-teal-400 transition-all"
            target='blank'
          >
            View Source Code 
          </a>
        </div>
        <div className="mt-6">
          <a 
            href="https://chat-iiita-ultimate-techparent.onrender.com/" 
            className="inline-block bg-teal-500 text-md text-gray-100 py-2 px-4 rounded-lg shadow-md hover:bg-teal-400 transition-all"
            target='blank'
          >
            Live Link
          </a>
        </div>
      </div>
    </div>
  </div>

  {/* Project 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-3xl shadow-xl">
        <img 
          src="testiflow.jpeg" 
          alt="Project 2" 
          className="w-full md:w-1/2 h-96 rounded-2xl border-2 border-pink-400 mb-8 md:mb-0 md:ml-8 object-cover"
        />
        <div className="text-center md:text-left">
          <h3 className="text-4xl font-extralight text-pink-500 mb-4">TestiFlow : Where Every Voice Counts </h3>
          <p className="text-gray-300 text-lg font-extralight leading-relaxed">
          <span className='font-semibold'>TestiFlow</span> is a streamlined platform for collecting, managing, and analyzing user testimonials with ease. It integrates Google authentication for secure and seamless user onboarding, allowing users to submit feedback through a dynamic and user-friendly interface. The application features a robust backend built with <span className='font-semibold'>Node.js, Express, and MongoDB</span>, while the <span className='font-semibold'>React</span> frontend ensures a responsive and interactive user experience. 
          </p>
          <div className="mt-6">
            <a 
              href="#" 
              className="inline-block bg-pink-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-pink-500 transition-all"
              target='blank'
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="flex space-x-6 mt-16">
      <a href="Resume.pdf" className="bg-teal-600 text-white py-3 px-6 text-lg text-extralight rounded-lg shadow-lg hover:bg-teal-500 flex items-center" target="_blank" rel="noopener noreferrer">
        <ExternalLink className="mr-3 w-6 h-6" /> View Resume
      </a>
      <a href="Resume.pdf" download className="bg-teal-800 text-white py-3 px-6 rounded-lg text-extralight shadow-lg hover:bg-teal-700 flex items-center">
        <Download className="mr-3 w-6 h-6" /> Download Resume
      </a>
    </div>
  </div>
);

function getSkillDescription(skill) {
  switch (skill) {
    case 'Web Development':
      return 'I love to build responsive, accessible, and beautiful web applications using modern technologies like React, Tailwind CSS, and Node.js and work with databases like MongoDB.';
    case 'Generative AI':
      return 'I like to integrate machine learning models for text generation, natural language processing, and AI-driven solutions into my Web-D projects for automation.';
    case 'Problem Solving':
      return 'I enjoy solving complex algorithmic challenges and regularly participate in coding competitions to sharpen my skills.';
    default:
      return '';
  }
}

function getLanguageDescription(language) {
  switch (language) {
    case 'JavaScript':
      return '';
    case 'Python':
      return '';
    case 'Java':
      return '';
    case 'C++':
      return '';
    case 'C':
        return '';
    default:
      return '';
  }
}
