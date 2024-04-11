import character from "../../assets/logo/lucy-3d.png";
import helloBubble from "../../assets/bubble/hello.png";
import Typewriter from "typewriter-effect";
import hello from "../../assets/sound/hello.mp3";
import { useState } from "react";

function Hero() {
  // setting up initial value for the hovered variable as false
  const [hovered, setHovered] = useState(false);

  //when the mouse is entered(hovered) play the sound
  const handleMouseHover = () => {
    //set the hovered value to true
    setHovered(true);
    const audio = new Audio(hello);
    audio.play();
  };
  //when the mouse is left, set the hovered value as false
  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <div className="hero container flex-row justify-between items-center mx-10 col-span-12">
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
                .typeString("Full-Stack<br>")
                .typeString(" Developer")
                .start();
            }}
            // loop indefinitely
            options={{
              loop: true,
            }}
          />
        </div>
      </div>
      <div
        className="relative mb-28 col-span-5 "
        // adding mouseEnter effect
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseLeave}
      >
        <img
          src={character}
          alt="character"
          className="character absolute top-4 left-20 z-1 cursor-grab"
        />
        <img
          src={helloBubble}
          alt="helloBubble"
          className={`hello-bubble ${hovered ? "animate-rotate" : ""}`}
        />
        <div className="circle left-10 relative"></div>
      </div>
    </div>
  );
}
export default Hero;
