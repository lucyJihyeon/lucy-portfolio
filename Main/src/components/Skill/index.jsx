import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown } from "@fortawesome/free-solid-svg-icons";

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
    { path: "../../src/assets/skills/devtools/apollo.png", name: "Apollo" },
  ];

  return (
    <div className="flex justify-center items-center w-full">
      {isSmallScreen ? (
        // Render vertical carousel for small screens
        <div className="vertical-carousel my-44 p-6 container-color rounded-box">
          <div className="h-custom mb-10 p-10 carousel carousel-vertical rounded-box">
            {/* rendering carousel item */}
            <div className="carousel-item overflow-y-auto">
              {/* font-awesome icon */}
              <FontAwesomeIcon
                icon={faSortDown}
                size="2xl"
                bounce
                style={{
                  color: "#ffffff",
                  zIndex: "2",
                  position: "absolute",
                  top: "65%",
                  left: "65%",
                }}
              />
              <div className="flex flex-col items-center">
                {/* showcase which skill */}
                <div className="flex justify-center flex-col items-center h-52">
                  <p className="mt-2 text-5xl">Front-end</p>
                  <p className="mt-2 mb-10 text-5xl">Skills</p>
                </div>
                {/* rendering skills icon items */}
                {front.map((skill, index) => (
                  <div key={index} className=" sm:max-w-sm:w-1/5">
                    <div className="container-color sm: w-36 carousel-item h-full flex-col">
                      <img
                        src={skill.path}
                        alt={skill.name}
                        className="w-full bg-custom p-2 rounded-full"
                      />
                      <p className="text-center m-0">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-item overflow-y-auto">
              <div className="flex flex-col items-center">
                {/* showcase which skill */}
                <div className="flex justify-center flex-col items-center my-10">
                  <p className="mt-2 text-5xl">Back-end</p>
                  <p className="mt-2 mb-10 text-5xl">Skills</p>
                </div>
                {/* rendering skills icon items */}
                {back.map((skill, index) => (
                  <div key={index} className=" sm:max-w-sm:w-1/5">
                    <div className="container-color sm: w-36 carousel-item h-full flex-col">
                      <img
                        src={skill.path}
                        alt={skill.name}
                        className="w-full bg-custom p-2 rounded-full"
                      />
                      <p className="text-center m-0">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-item overflow-y-auto">
              <div className="flex flex-col items-center">
                {/* showcase which skill */}
                <div className="flex justify-center flex-col items-center my-10">
                  <p className="mt-2 text-5xl">Dev/Tools</p>
                  <p className="mt-2 mb-10 text-5xl">Skills</p>
                </div>
                {/* rendering skills icon items */}
                {devtools.map((skill, index) => (
                  <div key={index} className=" sm:max-w-sm:w-1/5">
                    <div className="container-color sm: w-36 carousel-item h-full flex-col">
                      <img
                        src={skill.path}
                        alt={skill.name}
                        className="w-full bg-custom p-2 rounded-full"
                      />
                      <p className="text-center m-0">{skill.name}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        // horizontal carousel
        <div className="flex justify-center items-center h-screen">
          <div className="carousel container container-color rounded-box h-custom">
            <div id="slide1" className="carousel-item relative w-full">
              <div className="flex flex-col items-center container p-2">
                {/* showcase which skill */}
                <div className="flex justify-center flex-col items-center">
                  <p className="mt-2 text-5xl">Front-end</p>
                  <p className="mt-0 mb-10 text-5xl">Skills</p>
                </div>
                {/* rendering skills icon items */}
                <div className="flex flex-wrap grid grid-cols-3 gap-3 place-content-around">
                  {front.map((skill, index) => (
                    <div key={index} className=" sm:max-w-sm:w-1/5 mx-5">
                      <div className="container-color sm: w-36 h-full flex-col">
                        <img
                          src={skill.path}
                          alt={skill.name}
                          className="w-full bg-custom p-2 rounded-full"
                        />
                        <p className="text-center m-0">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* buttons */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* second slide */}
            <div id="slide2" className="carousel-item relative w-full">
              <div className="flex flex-col items-center container p-2">
                {/* showcase which skill */}
                <div className="flex justify-center flex-col items-center">
                  <p className="mt-2 text-5xl">Back-end</p>
                  <p className="mt-0 mb-10 text-5xl">Skills</p>
                </div>
                {/* rendering skills icon items */}
                <div className="flex flex-wrap grid grid-cols-3 gap-3 place-content-around">
                  {back.map((skill, index) => (
                    <div key={index} className=" sm:max-w-sm:w-1/5 mx-5">
                      <div className="container-color sm: w-36 h-full flex-col">
                        <img
                          src={skill.path}
                          alt={skill.name}
                          className="w-full bg-custom p-2 rounded-full"
                        />
                        <p className="text-center m-0">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* buttons */}
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>

            {/* third slide */}
            <div id="slide3" className="carousel-item relative w-full">
              <div className="flex flex-col items-center container p-2">
                {/* showcase which skill */}
                <div className="flex justify-center flex-col items-center">
                  <p className="mt-2 text-5xl">Dev/Tools</p>
                  <p className="mt-0 mb-10 text-5xl">Skills</p>
                </div>
                {/* rendering skills icon items */}
                <div className="flex flex-wrap grid grid-cols-3 gap-3 place-content-around">
                  {devtools.map((skill, index) => (
                    <div key={index} className=" sm:max-w-sm:w-1/5 mx-5">
                      <div className="container-color sm: w-36 h-full flex-col">
                        <img
                          src={skill.path}
                          alt={skill.name}
                          className="w-full bg-custom p-2 rounded-full"
                        />
                        <p className="text-center m-0">{skill.name}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href="#slide2" className="btn btn-circle">
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
