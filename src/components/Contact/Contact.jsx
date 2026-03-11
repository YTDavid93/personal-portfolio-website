import "./Contact.css";
import { FiGithub } from "react-icons/fi";
import { LuLinkedin } from "react-icons/lu";

const Contact = () => {
	return (
		<section id="contact">
			<div className="section-label">Get In Touch</div>
			<div className="contact-inner">
				<div className="contact-left reveal">
					<div className="section-title">LET'S<br />WORK.</div>
					<a href="mailto:jane@example.com" className="contact-email">ytd3809@gmail.com</a>
					<div className="contact-links">
						<a href="https://github.com/YTDavid93" className="contact-link">
							<FiGithub className="contact-link-icon" />
							GitHub — @YTDavid93
						</a>
						<a href="https://www.linkedin.com/in/david-bista-5b1b06206/" className="contact-link">
							<LuLinkedin className="contact-link-icon" />
							LinkedIn — David Bista
						</a>
					</div>
				</div>
				{/* this should send email to me */}
				<div className="contact-form reveal">
					<div className="form-group">
						<label className="form-label">Name</label>
						<input className="form-input" type="text" placeholder="Your name" />
					</div>
					<div className="form-group">
						<label className="form-label">Email</label>
						<input className="form-input" type="email" placeholder="your@email.com" /> 
					</div>
					<div className="form-group">
						<label className="form-label">Message</label>
						<textarea className="form-input" placeholder="Tell me about your project..."></textarea>
					</div>
					<button className="btn-primary" style={{ border: "none", cursor: "none" }}>Send Message</button>
				</div>
			</div>
		</section>
	);
};

export default Contact;
