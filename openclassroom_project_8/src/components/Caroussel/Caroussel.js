import React, { useState, useEffect } from 'react';
import './Caroussel.css';

function Caroussel({ projects }) {
    const [index, setIndex] = useState(0);
    const length = projects.length;

    const handlePrevious = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    };
    const handleNext = () => {
        const newIndex = index + 1;
        setIndex(newIndex >= length ? 0 : newIndex);
    };
    useEffect(() => {
        const interval = setInterval(() => {handleNext()}, 5000);
        return () => clearInterval(interval);
    });
    return (
        <div className="caroussel_div">
            { projects.map((project, id) => {
                return (
                    <a className='a_proj' href={project.href} target="blank">
                        <img className='caroussel_img' style={{transform: `translate(-${index * 100}%)`}} key={id} alt="cover of the project" src={project.cover}></img>
                    </a>
                )
            })
            }
            <button className='previous_button' onClick={handlePrevious}>
                <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className='next_button' onClick={handleNext}>
                <i className="fa-solid fa-angle-right"></i>
            </button>
        </div>
    );
}

export default Caroussel