import js from '../img/JS.png'
import bootstrap from '../img/bootstrap.png'
import C from '../img/C.png'
import react_img from '../img/react.png'
import sass from '../img/sass.png'
import css3 from '../img/css3.png'
import html from '../img/html.jpg'
import python from '../img/python.png'


const Tools = () => {
    return (
        <section className="tool">
            <h2>Tools I have worked with.</h2>
            <p className="tool__paragraph">Other programming languages and tools that I am very proficient with.</p>
            <div className='tool__img-box'>
                <img src={html} alt="" className="tool__img" />
                <img src={css3} alt="" className="tool__img" />
                <img src={js} alt="" className="tool__img" />
                <img src={C} alt="" className="tool__img" />
                <img src={python} alt="" className="tool__img" />
                <img src={bootstrap} alt="" className="tool__img" />
                <img src={sass} alt="" className="tool__img" />
                <img src={react_img} alt="" className="tool__img" />
            </div>
        </section>
    )
}

export default Tools;