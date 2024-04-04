import character from "../../assets/logo/lucy-3d.png";
import character2 from "../../assets/logo/lucy-3d-animate.png";
import Typewriter from "typewriter-effect";

function About() {
  return (
    <section className="grid items-center my-40">
      <div className=" container flex-row justify-between items-center mx-10 col-span-12">
        <div className="greeting col-span-5 w-50">
          <p className="text-4xl"> Hello, I am</p>
          <div className="text-6xl text-gradient">
            {/* adding typewriter effect */}
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Lucy Kwon")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Full-Stack Developer")
                  .start();
              }}
              // loop indefinitely
              options={{
                loop: true,
              }}
            />
          </div>
        </div>
        <div className="relative mb-28 col-span-5 ">
          <img
            src={character}
            alt="character"
            className="character absolute top-0 left-0 z-1"
          />
          <div className="circle relative"></div>
        </div>
      </div>

      <div className="container my-16 flex flex-row justify-between items-center about-container col-span-12">
        <div className="character-container flex flex-col items-center ml-10">
          <h3 className="about-me"> ABOUT ME</h3>
          <img src={character2} alt="character2" className="character2" />
        </div>
        <div className="sm-container flex flex-col m-16">
          <p>
            As a UC Berkeley{" "}
            <span className="text-span">
              Full-Stack Coding Bootcamp Student
            </span>
            , I&apos;m often asked why I didn&apos;t choose a traditional
            university with my high GPA. My decision to pursue the bootcamp path
            is driven by its hands-on learning approach, shaping my ability to
            apply technology skills effectively in real-world scenarios.
          </p>
          <p>
            Through this journey, I&apos;ve developed a passion for crafting
            <span className="text-span">intuitive user experiences</span>, from
            sleek interfaces to seamless functionality, aiming to delight and
            inspire users with every project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
