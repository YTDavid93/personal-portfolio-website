import "./Project.css";

const Project = () => {
  return ( 
    <section id="projects">
      <div className="section-label">Selected Work</div>
      <div className="section-title reveal">PROJECTS</div>
      <div className="projects-list">
        <a href="https://game-hub-weld-tau.vercel.app/">
          <div className="project-item reveal">
            <div className="project-num">01</div>
            <div className="project-info">
              <h3>Game Hub</h3>
              <p> 
                On this website, users can get details of various games, search for their favorite games, and filter games by genre and
                platform, among other features. I used the rawg.io API to build this web app.
              </p>
              <div className="project-tags">
                <span className="project-tag">React JS</span>
                <span className="project-tag">Typescript</span>
                <span className="project-tag">Styled Component</span>
              </div>
            </div>
            <div className="project-arrow">↗</div>
          </div>
        </a>
        <a href="https://sorting-visualizer-kohl-seven.vercel.app/">
          <div className="project-item reveal">
            <div className="project-num">02</div>
            <div className="project-info">
              <h3>Sorting Visualizer</h3>
              <p>
                Developed an interactive Sorting Visualizer to demonstrate and compare the working of common sorting algorithms.
                Implemented Bubble Sort, Selection Sort, Insertion Sort, and Merge Sort with step-by-step visual animations.
              </p>
              <div className="project-tags">
                <span className="project-tag">HTML</span>
                <span className="project-tag">CSS</span>
                <span className="project-tag">Javascript</span>
              </div>
            </div>
            <div className="project-arrow">↗</div>
          </div>
        </a>
        <div className="project-item reveal">
          <div className="project-num">03</div>
          <div className="project-info">
            <h3>News Analyst using Naïve Bayes Classifier</h3>
            <p> 
              Developed a news sentiment analysis system to classify news headlines as positive or negative.
              Implemented a Naive Bayes classifier for text classification using Natural Language Processing (NLP) techniques.
              Trained the model using a dataset of 1,167 news headlines collected from The Himalayan Times.
            </p>
            <div className="project-tags">
              <span className="project-tag">Python</span>
              <span className="project-tag">Sklearn</span>
              <span className="project-tag">LP libraries</span>
            </div>
          </div>
          <div className="project-arrow">↗</div>
        </div>
        <div className="project-item reveal">
          <div className="project-num">04</div>
          <div className="project-info">
            <h3>Smart Campus Chatbot</h3>
            <p>
              Developed a college-specific, retrieval-based chatbot to provide accurate campus information.
              Implemented TF-IDF and Cosine Similarity algorithms to match user queries with relevant responses
              Stored conversation history in MongoDB to maintain context and support multi-turn conversations
            </p>
            <div className="project-tags">
              <span className="project-tag">React.js</span>
              <span className="project-tag">Node.js</span>
              <span className="project-tag">MongoDB</span>
              <span className="project-tag">Python (TF-IDF, Cosine Similarity)</span>
            </div>
          </div>
          <div className="project-arrow">↗</div>
        </div>
      </div>
    </section>
  );
};

export default Project;
