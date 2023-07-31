import React, {useState} from 'react'

export default function About() {
    const [style, setStyle] = useState({
        color: "black",
        backgroundColor: "white"
    })
    const changeMode = (event)=>{
        if (event.target.textContent === "Enable Dark Mode"){
            setStyle({
                color: "white",
                backgroundColor: "black"
            })
            event.target.textContent = "Enable Light Mode"
            event.target.className = 'btn btn-light mt-4'
        }else if (event.target.textContent === "Enable Light Mode"){
            setStyle({
                color: "black",
                backgroundColor: "white"
            })
            event.target.textContent = "Enable Dark Mode"
            event.target.className = 'btn btn-dark mt-4'
        }
    }
    return (
        <div className='container' style={style}>
            <div className="container">
                <button className="btn btn-dark mt-4" onClick={changeMode}>Enable Dark Mode</button>
            </div>
            <section className="terms">
                <div className="container py-5 px-4" id="en">
                    <h1 className="title text-center mb-5">React App for Text Utils</h1>
                    <p>An application to perform some actions on text.</p>
                </div>
            </section>
        </div>
    )
}
