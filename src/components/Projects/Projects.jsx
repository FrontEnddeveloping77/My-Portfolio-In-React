import { translations } from '../../translations/translations';
import './Projects.css';

function Projects({ language }) {
    const t = translations[language];

    const projectsData = [
        {
            id: 1,
            title: t.projects.items[0].title,
            description: t.projects.items[0].description,
            technologies: ['React', 'CSS3'],
            image: '👨‍💻',
            demo: 'https://demo.com'
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
                            <div className="project-icon">{project.image}</div>
                            <div className="project-content">
                                {project && <h1>{project.title}</h1>}
                                {project && <p>{project.description}</p>}
                                <div className="project-tech">
                                    {project.technologies.map((tech, index) => (
                                        <span key={index} className="tech-tag">{tech}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link project-link-primary">
                                        {t.projects.liveDemo} →
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;