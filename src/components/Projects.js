import {projectData, otherProjects} from './ProjectData'
import website from '../img/website.png'
import url from '../img/url.png'

const Projects = () => {
    return (
        <section className="project" id= 'project'>
            <h2>Projects I have worked on</h2>
            <p className="project__paragraph">I have worked on a lots of personal projects to develop myself as seen on my github but these are the ones I have worked with lately</p>
            <div className='project__projects'>
                {projectData.map((project, index) => { 
                    return (
                        <div className={`project__link ${project.class}`} key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className='project__code'>
                                <div>
                                    <img src={website} alt='' />
                                    <a href={project.link} className='' target="_blank" rel="noreferrer">Visit website</a>
                                </div>
                                <div>
                                <img src={url} alt='' />
                                    <a href={project.source} className='' target="_blank" rel="noreferrer">Source codes</a>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            <article>
                <h4>Other projects</h4>
                <ul className='other'>
                    {otherProjects.map((project, index) => {
                        return (
                            <li className="proj" key={index}>
                                <a href={project.link}>{project.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </article>
        </section>
    )
}

export default Projects;