import { translations } from '../../translations/translations';
import './Projects.css';

function Projects({ language }) {
    const t = translations[language];

    const projectsData = [
        {
            id: 1,
            title: t.projects.items[0].title,
            // description: t.projects.items[0].description,
            // technologies: ['React', 'JavaScript', 'CSS3'],
            image: 'https://i.postimg.cc/pXBC61cW/unnamed.jpg',
            demo: 'https://exam-seven-phi.vercel.app/'
        },
        {
            id: 1,
            title: t.projects.items[1].title,
            // description: t.projects.items[1].description,
            // technologies: ['React', 'JavaScript', 'CSS3'],
            image: 'https://i.postimg.cc/kXS6V3C8/67a01d3d-e0b4-4e23-a641-d3f5aa3303e3-(1).png',
            demo: 'https://e-shop-rho-rouge.vercel.app/'
        }
    ];

    return (
        <section id="projects" className="section projects">
            <div className="container">
                <div className="section-title">
                    <h2>{t.projects.title}</h2>
                    <p>{t.projects.subtitle}</p>
                </div>
                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-icon">
                                <div className="img-con">
                                    <img src={project.image} alt="" />
                                </div>
                            </div>
                            {/* <div className="project-content"> */}
                            {project && <h1>{project.title}</h1>}
                            <div className="project-links">
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
                                    {t.projects.liveDemo} →
                                </a>
                            </div>
                        </div>
                        // </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;