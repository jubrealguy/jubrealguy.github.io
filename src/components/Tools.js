import js from '../img/JS.png'
import bootstrap from '../img/bootstrap.png'
import C from '../img/C.png'
import react_img from '../img/react.png'
import sass from '../img/Sass.png'
import css3 from '../img/css3.png'
import html from '../img/html.jpg'
import python from '../img/python.jpg'
import sql from '../img/sql.png'


const Tools = () => {
    return (
        <section className="tool" id='tool'>
            <h2>Tools I have worked with.</h2>
            <p className="tool__paragraph">Programming languages and tools that I am very proficient with.</p>
            <div className='tool__img-box'>
                <img src={html} alt="html" className="tool__img fast" />
                <img src={css3} alt="css" className="tool__img medium" />
                <img src={js} alt="js" className="tool__img slow" />
                <img src={C} alt="c" className="tool__img fast" />
                <img src={python} alt="python" className="tool__img medium" />
                <img src={bootstrap} alt="bootstrap" className="tool__img slow" />
                <img src={sass} alt="sass" className="tool__img fast" />
                <img src={react_img} alt="react" className="tool__img medium" />
                <img src={sql} alt="sql" className="tool__img slow" />
            </div>
        </section>
    )
}

export default Tools;