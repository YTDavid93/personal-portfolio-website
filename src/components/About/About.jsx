import './About.css';

const About = () => {
  return (
    <section id="about">
  		<div className="section-label">About Me</div>
  		<div className="section-title reveal">WHO I AM</div>
  		<div className="about-grid">
    		<div className="about-text reveal">
      		<p>I'm a <strong>full-stack software engineer</strong> with 2+ years building products at the intersection of performance and craft. I believe good code isn't just functional — it's readable, maintainable, and occasionally beautiful.</p>
      		<p>When I'm not at a terminal, I'm thinking about compilers, contributing to open-source, or making pour-over coffee in a very meticulous way.</p>
					<div className="skills-grid">
						<span className="skill-tag">Ruby</span>
						<span className="skill-tag">JavaScript</span>
						<span className="skill-tag">TypeScript</span>
						<span className="skill-tag">Python</span>
						<span className="skill-tag">Ruby on Rails</span>
						<span className="skill-tag">Node.js</span>
						<span className="skill-tag">Express.js</span>
						<span className="skill-tag">React</span>
						<span className="skill-tag">Angular</span>
						<span className="skill-tag">PostgreSQL</span>
						<span className="skill-tag">Redis</span>
						<span className="skill-tag">Docker</span>
					</div>
    		</div>
				<div className="about-sidebar reveal">
					<div className="stat-block">
						<div className="stat-num">2<span>+</span></div>
						<div className="stat-label">Years of Experience</div>
					</div>
					<div className="stat-block">
						<div className="stat-num">15<span>+</span></div>
						<div className="stat-label">Projects Shipped</div>
					</div>
				</div>
  		</div>
		</section>
  );
};

export default About;
