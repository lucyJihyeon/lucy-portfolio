import character from "../../assets/logo/lucy-3d.png";
import character2 from "../../assets/logo/lucy-3d-animate.png";
import Typewriter from "typewriter-effect";


function About() {
  return (
    <section className="grid">
      <div className="flex-row flex-end mx-10 col-span-8">
      <div className="App">
            <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Lucy Kwon")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Full-Stack Developer")
                        .start();
                }}
            />
        </div>
        <div className="relative mb-28">
          <img
            src={character}
            alt="character"
            className="character absolute top-0 left-0 z-1"
          />
          <div className="circle relative"></div>
        </div>
      </div>

      <div className="container my-16 flex flex-row justify-between items-center about-container col-span-12">
        <div className=" character-container flex flex-col items-center">
          <h3 className="about-me"> ABOUT ME</h3>
          <img src={character2} alt="character2" className="character2" />
        </div>
        <div className="sm-container flex flex-col m-16">
          <p>
            As a UC Berkeley Full-Stack Coding Bootcamp Student, I&apos;m often
            asked why I didn&apos;t choose a traditional university with my high
            GPA. My decision to pursue the bootcamp path is driven by its
            hands-on learning approach, shaping my ability to apply technology
            skills effectively in real-world scenarios.
          </p>
          <p>
            Through this journey, I&apos;ve developed a passion for crafting
            intuitive user experiences, from sleek interfaces to seamless
            functionality, aiming to delight and inspire users with every
            project.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
