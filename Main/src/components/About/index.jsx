import character2 from "../../assets/logo/lucy-3d-animate.png";
import Hero from "../Hero";
function About() {
  return (
    <section>
      <Hero />
      <div className="about-container container mb-16 mt-48 flex max-lg:flex-col justify-between items-center col-span-12">
        <div className="character-container flex flex-col items-center ml-10">
          <h3 className="about-me max-lg:mt-20"> ABOUT ME</h3>
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
