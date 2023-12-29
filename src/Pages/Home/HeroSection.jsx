import { Link } from 'react-scroll';


export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Greetings! I am Jose. Feel free to explore some of my ongoing and completed works right here!</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            <br /> 
          </p>
        </div>
        <Link
          to="Contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="btn btn-primary"
        >
          Get In Touch
        </Link>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
}
