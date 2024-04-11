import { useState } from 'react';
// importing project from Project
import Project from "../Project";


function Portfolio() {
  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'techBlog',
      description: 'Tech Blog',
      link: "https://lucy-tech-blog-b8433f263b37.herokuapp.com/",
      repo: "https://github.com/lucyJihyeon/Tech-Blog",
      delayTime: 0.4,
    },
    {
      name: 'weatherApp',
      description: 'weather-app',
      link: "https://lucyjihyeon.github.io/Weather-Dashboard/",
      repo: "https://github.com",
      delayTime: 0.7,
    },
    {
      name: 'beatBybeat',
      description: 'beatBybeat',
      link: "https://beatbybeatv2-d6c2b024a00e.herokuapp.com/login",
      repo: "https://github.com/charleswt/beat-by-beat?tab=readme-ov-file",
      delayTime: 1,
    },
  ]);


  return (
    <div className='flex flex-col justify-center items-center w-ful'>
       <h2>Projects</h2>
      <div className="flex-row justify-center items-center w-full">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
