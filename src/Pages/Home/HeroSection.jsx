export default function HeroSection() {
    return(
        <section id = "heroSection" className="hero--section">
            <div classsName="hero--section--content---box">
                <div className="helo--section-content">
                 <p className="section--title">Hey, I am Jose</p>
                 <h1 className="hero--section--title">
                    <span className="hero--section-title--color"> Full stack </span>{" "}
                     <br />
                     Developer
                 </h1>
                 <p className="helo--section-description" >
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Lorem ipsum dolor sit amet.
                 </p>
                </div>
                <button className="btn btn-ptimary">Get In Touch </button>
            </div>
            <div className="hero--section-img">
                <img src="./img/hero_img.png" alt="Hero Section" />
            </div>
        </section>
    );
}