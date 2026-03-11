import './Experience.css';

const Experience = () => {
  return ( 
	  <section id="experience">
      <div className="section-label">Career</div>
      <div className="section-title reveal">EXPERIENCE</div>
      <div className="exp-timeline">
        <div className="exp-item reveal">
          <div className="exp-period">May 2025 – March 2026</div>
          <div className="exp-role">Associate Software Engineer</div>
          <div className="exp-company">Bajra Technologies — Charkhal, Dillibazar, Kathmandu</div>
          <div className="exp-desc">
            Designed and developed scalable backend applications across multiple projects, demonstrating the ability to adapt
            quickly and deliver in short development cycles.
            Built a full-fledged payslip management system, handling core payroll workflows and business logic
            Worked as a Lead Developer on BizOS Lite, contributing to system architecture, feature development, and task
            coordination
          </div>
        </div>
        <div className="exp-item reveal">
          <div className="exp-period">February 2025 – May 2025</div>
          <div className="exp-role">Software Developer Trainee</div>
          <div className="exp-company">Bajra Technologies — Charkhal, Dillibazar, Kathmandu</div>
          <div className="exp-desc">
            Trained in Ruby on Rails for full-stack web development
            Gained practical experience with Linux, Git, HTML, CSS, JavaScript, Ruby, and Rails
            Developed a full-stack project, “Looking for Group”, an event management platform enabling users to create and join
            events
          </div>
        </div>
        <div className="exp-item reveal">
          <div className="exp-period">November 2024 – February 2025</div>
          <div className="exp-role">Software Developer Trainee</div>
          <div className="exp-company">Bajra Technologies — Charkhal, Dillibazar, Kathmandu</div>
          <div className="exp-desc">
            Worked as a Backend Developer on the project Lekhandas, contributing to core application features and business logic.
            Gained hands-on experience with Docker for containerization and environment management.
            Worked in an Agile development environment, participating in sprint planning, stand-ups, and reviews.
            Created and maintained full-stack project documentation, improving clarity and team collaboration.
          </div>
        </div>
        <div className="exp-item reveal">
          <div className="exp-period">December 2023 — March 2024</div>
          <div className="exp-role">Front-end Developer Intern</div>
          <div className="exp-company">Uptechsys — Dhumbarahi Marg, Kathmandu</div>
          <div className="exp-desc">
            Front-end development using React.js, TypeScript, HTML, Sass, JavaScript, and Tailwind CSS.
            Created responsive and scalable web applications and templates.
            Worked closely with senior developers to deliver clean, maintainable, and production-ready code.
          </div>
        </div>
      </div>
    </section>
	);
}

export default Experience;
