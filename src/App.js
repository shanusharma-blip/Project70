import React, { Component } from 'react';
import './ProjectUploader.css'; // Import your CSS file

class ProjectUploader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProject: null,
    };
  }

  toggleDetails = (projectId) => {
    this.setState((prevState) => ({
      activeProject: prevState.activeProject === projectId ? null : projectId,
    }));
  };

  render() {
    return (
      <div className="container">
        <div className="main-box">
          <form action="#" method="post">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="github">GitHub Link:</label>
            <input type="url" id="github" name="github" />

            <label htmlFor="university">University Name:</label>
            <input type="text" id="university" name="university" />

            <input type="submit" value="Submit" />
          </form>
        </div>

        <hr />

        <div className="center-text">
          <p style={{ fontSize: '24px' }}>Projects You Have Made</p>
        </div>

        <div className="additional-box-container">
          <div className="additional-box">
            <h2>Project 1</h2>
            <div className="project-description">
              <img src='./Project.avif' alt="Project 1 Image" />
              <p>Description of Project 1.</p>
            </div>
            <button
              className="read-more-button"
              onClick={() => this.toggleDetails('project1')}
            >
              Read More
            </button>
            <div
              className={`project-details ${
                this.state.activeProject === 'project1' ? 'active' : ''
              }`}
            >
              <h3>Short Description</h3>
              <p>Short description of Project 1.</p>
              <h3>Description</h3>
              <p>Full description of Project 1.</p>
              <h3>Tech Stack</h3>
              <p>Tech stack used in Project 1.</p>
            </div>
          </div>

          <div className="additional-box">
            <h2>Project 2</h2>
            <div className="project-description">
              <img src='./Project.avif' alt="Project 2 Image" />
              <p>Description of Project 2.</p>
            </div>
            <button
              className="read-more-button"
              onClick={() => this.toggleDetails('project2')}
            >
              Read More
            </button>
            <div
              className={`project-details ${
                this.state.activeProject === 'project2' ? 'active' : ''
              }`}
            >
              <h3>Short Description</h3>
              <p>Short description of Project 2.</p>
              <h3>Description</h3>
              <p>Full description of Project 2.</p>
              <h3>Tech Stack</h3>
              <p>Tech stack used in Project 2.</p>
            </div>
          </div>

          {/* Additional Project Boxes */}
          <div className="additional-box">
            <h2>Project 3</h2>
            <div className="project-description">
              <img src='./Project.avif' alt="Project 3 Image" />
              <p>Description of Project 3.</p>
            </div>
            <button
              className="read-more-button"
              onClick={() => this.toggleDetails('project3')}
            >
              Read More
            </button>
            <div
              className={`project-details ${
                this.state.activeProject === 'project3' ? 'active' : ''
              }`}
            >
              <h3>Short Description</h3>
              <p>Short description of Project 3.</p>
              <h3>Description</h3>
              <p>Full description of Project 3.</p>
              <h3>Tech Stack</h3>
              <p>Tech stack used in Project 3.</p>
            </div>
          </div>

          <div className="additional-box">
            <h2>Project 4</h2>
            <div className="project-description">
              <img src='./Project.avif' alt="Project 4 Image" />
              <p>Description of Project 4.</p>
            </div>
            <button
              className="read-more-button"
              onClick={() => this.toggleDetails('project4')}
            >
              Read More
            </button>
            <div
              className={`project-details ${
                this.state.activeProject === 'project4' ? 'active' : ''
              }`}
            >
              <h3>Short Description</h3>
              <p>Short description of Project 4.</p>
              <h3>Description</h3>
              <p>Full description of Project 4.</p>
              <h3>Tech Stack</h3>
              <p>Tech stack used in Project 4.</p>
            </div>
          </div>

          <div className="additional-box">
            <h2>Project 5</h2>
            <div className="project-description">
              <img src='./Project.avif' alt="Project 5 Image" />
              <p>Description of Project 5.</p>
            </div>
            <button
              className="read-more-button"
              onClick={() => this.toggleDetails('project5')}
            >
              Read More
            </button>
            <div
              className={`project-details ${
                this.state.activeProject === 'project5' ? 'active' : ''
              }`}
            >
              <h3>Short Description</h3>
              <p>Short description of Project 5.</p>
              <h3>Description</h3>
              <p>Full description of Project 5.</p>
              <h3>Tech Stack</h3>
              <p>Tech stack used in Project 5.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectUploader;
