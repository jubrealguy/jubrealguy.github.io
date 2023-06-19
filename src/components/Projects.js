const Projects = () => {
    return (
        <section className="project" id= 'project'>
            <h2 >Projects I have worked on</h2>
            <p className="project__paragraph">I have worked on a lots of personal projects to develop myself as seen on my github but these are the ones I have worked with lately</p>
            <div>
                <a href="https://jubrealguy.github.io/Meta_Bnb/" className="project__link metabnb" target="_blank" rel="noreferrer">
                    <h3>MetaBnb</h3>
                    <p>This is a project whose figma design was designed by HNG. This project was built fully with REACT and the concept of routing and controlled components with useStates fully established making it interactive</p>
                </a>

                <a href="https://jubrealguy.github.io/HNG-linktree/" className="project__link linktree" target="_blank" rel="noreferrer">
                    <h3>LinkTree</h3>
                    <p>This is my a project with HNG. This project was built with REACT, it is a link tree that links to Zuri and HNG products for designs, coding and programming skills</p>
                </a>

                <a href="https://jubrealguy.github.io/Misols-Interior/" className="project__link misols" target="_blank" rel="noreferrer">
                    <h3>Misols Interior</h3>
                    <p>This is an amazing interior decoration site built from scratch for a friend with SASS. It has some beautiful animations and other advanced CSS stuffs</p>
                </a>
                
                <a href="https://jubrealguy.github.io/responsive-landing-page/" className="project__link zuri" target="_blank" rel="noreferrer">
                    <h3>Zuri Landing Page</h3>
                    <p>I built this page while I was training at Zuri, this project tested my ability to follow figma designs through thoroughly and learnt more on CSS. Used media queries with ease here</p>
                </a>
                <a href="https://jubrealguy.github.io/Lagos-hoods/" className="project__link lagos" target="_blank" rel="noreferrer">
                    <h3>Lagos Hoods</h3>
                    <p>The concept of this project was to bring lagos together as one digitally, my idea though. It has not been fully developed. I worked with SASS to a very large extent on this project.</p>
                </a>
        
                <a href="https://jubrealguy.github.io/BreelStruct/" className="project__link breel" target="_blank" rel="noreferrer">
                    <h3>BreelStruct</h3>
                    <p>I decided to test my hands on HTML and CSS, which I did amazingly well. This is a very neat and beautiful lnding page for a construction firm and it has relatively no interactivity.</p>
                </a>
            </div>

            <article>
                <h4>Other projects</h4>
                <ul className='other'>
                    <li className="proj"><a href="https://jubrealguy.github.io/Tetris/" target="_blank" rel="noreferrer">Tetris Game</a></li>
                    <li className="proj"><a href="https://github.com/jubrealguy/Qwasar-software-dev/blob/main/Season_1/printf.c" target="_blank" rel="noreferrer">Custom made Printf function in C</a></li>
                </ul>
            </article>
        </section>
    )
}

export default Projects;