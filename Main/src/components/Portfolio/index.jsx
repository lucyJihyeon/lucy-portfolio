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
      repo: "https://github.com/lucyJihyeon/Tech-Blog"
    },
    {
      name: 'weatherApp',
      description: 'weather-app',
      link: "https://lucyjihyeon.github.io/Weather-Dashboard/",
      repo: "https://github.com"
    },
    {
      name: 'beatBybeat',
      description: 'beatBybeat',
      link: "https://beatbybeatv2-d6c2b024a00e.herokuapp.com/login",
      repo: "https://github.com/charleswt/beat-by-beat?tab=readme-ov-file"
    },
  ]);

  return (
    <div>
      <div className="flex-row justify-center items-center w-full my-44">
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
