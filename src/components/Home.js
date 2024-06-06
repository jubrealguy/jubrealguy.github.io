import About from "./About"
import Projects from "./Projects";
import Tools from "./Tools";
import Contact from "./Contact";

const Home = () => {
    return (
        <main className="main">
            <About />
            <Projects />
            <Tools />
            <Contact />
        </main>
    )
}

export default Home;