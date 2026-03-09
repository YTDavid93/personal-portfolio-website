import "./Hero.css";

const Hero = () => {
	return (
		<section id="hero">
  		<div className="hero-bg"></div>
  		<div className="hero-grid"></div>
			<div className="hero-content">
				<div className="hero-eyebrow">Software Engineer — Full Stack</div>
				<h1 className="hero-name">DAVID<br/><span>BISTA</span></h1>
				<p className="hero-tagline">I build systems that are fast, elegant, and quietly obsessive about the details.</p>
				<div className="hero-cta">
					<a href="#projects" className="btn-primary">View Work</a>
					<a href="#contact" className="btn-ghost">Let's Talk</a>
				</div>
			</div>
			<div className="hero-scroll">
				<div className="scroll-line"></div>
				<span>scroll</span>
			</div>
		</section>
  );
};

export default Hero;
