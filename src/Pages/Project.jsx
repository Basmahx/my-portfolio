// wil import the details about each projecty using JSON file- this is just the general structure of the page

const ProjectPage = () => {
  return (
    <div className="project-page">
      <section className="project">
        <h2>Project Name</h2>
        <p className="description"></p>
      </section>

      <section className="role">
        <h3>My Role</h3>
        <p></p>
      </section>

      <section className="tools">
        <h3>Tools:</h3>
        <ul>
          <li>Tool 1</li>
          <li>Tool 2</li>
          <li>Tool 3</li>
        </ul>
      </section>

      <section className="github-link">
        <h3>Lien vers le Code</h3>
        <a
          href="https://github.com/your-repository"
          target="_blank"
          rel="noopener noreferrer">
          View Code on GitHub
        </a>
      </section>
    </div>
  );
};

export default ProjectPage;
