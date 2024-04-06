import { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown } from '@fortawesome/free-solid-svg-icons';


function Skill() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    function handleScreenSizeChange(event) {
      setIsSmallScreen(event.matches);
    }

    // Add listener
    mediaQuery.addListener(handleScreenSizeChange);

    // Initial check
    handleScreenSizeChange(mediaQuery);

    // Clean up
    return () => {
      mediaQuery.removeListener(handleScreenSizeChange);
    };
  }, []);

  const front = [
    { path: "../../src/assets/skills/front/css.png", name: "Css" },
    { path: "../../src/assets/skills/front/daisyui.png", name: "Daisy" },
    { path: "../../src/assets/skills/front/html.png", name: "Html" },
    {
      path: "../../src/assets/skills/front/javascript.png",
      name: "Javascript",
    },
    { path: "../../src/assets/skills/front/react.png", name: "React" },
    {
      path: "../../src/assets/skills/front/typescript.png",
      name: "Typescript",
    },
  ];

  const back = [
    { path: "../../src/assets/skills/back/express.png", name: "Express" },
    { path: "../../src/assets/skills/back/graphql.png", name: "Graphql" },
    { path: "../../src/assets/skills/back/insomnia.png", name: "Insomnia" },
    { path: "../../src/assets/skills/back/java.png", name: "Java" },
    { path: "../../src/assets/skills/back/mongodb.png", name: "Mongodb" },
    { path: "../../src/assets/skills/back/mysql.png", name: "Mysql" },
    { path: "../../src/assets/skills/back/RESTful.png", name: "RESTful Api" },
  ];

  const devtools = [
    { path: "../../src/assets/skills/devtools/figma.png", name: "Figma" },
    { path: "../../src/assets/skills/devtools/github.png", name: "Github" },
    { path: "../../src/assets/skills/devtools/heroku.png", name: "Heroku" },
    { path: "../../src/assets/skills/devtools/webpack.png", name: "Webpack" },
  ];

  return (
    // <div className="carousel carousel-vertical rounded-box flex sm:max-w-sm flex-col items-center m-10 mt-52">
    //   {front.map((skill, index) => (
    //     <div key={index} className=" sm:max-w-sm:w-1/3">
    //       <div className="container-color sm: w-52 carousel-item h-full">
    //         <img src={skill.path} alt={skill.name} className="w-full" />
    //         <p className="text-center m-0">{skill.name}</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    <div className="flex justify-center items-center w-full">
      {isSmallScreen ? (
        // Render vertical carousel for small screens 

        <div className="vertical-carousel my-44 p-6 container-color rounded-box">
          <div className="flex justify-center flex-col items-center">
            <p className="mt-2 text-5xl">Front-end</p>
            <p className="mt-2 mb-10 text-5xl">Skills</p>
          </div>
          <div className="h-custom mb-10 carousel carousel-vertical rounded-box">
            <div className="carousel-item h-full">
            <img src="https://daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" />
            </div>

            <div className="carousel-item h-full">
              <img src="https://daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" />
            </div>

            <div className="carousel-item h-full">
              <img src="https://daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" />
            </div>
          </div>
        </div>
      ) : (
        // Render horizontal carousel for larger screens
        <div className="horizontal-carousel">
          <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
                className="w-full"
              />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skill;
