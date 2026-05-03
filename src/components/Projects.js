import Image from "next/image";

const Projects = () => {
  return (
    <div className="homepage-project-section">
      <h3>All Projects</h3>
      <div className="container">
        <div className="row">
          <div className="col-12">
            Projects
            <Image src="/custom/bento.avif" alt="bento" width={1220} height={400} unoptimized />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
