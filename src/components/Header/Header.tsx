import React from 'react';

export const Header = () => {
    const lightButton = document.getElementById('light-mode');
    const darkButton = document.getElementById('dark-mode');

    const switchToDark=()=>{
        document.body.classList.toggle('dark-mode')
        if (darkButton && lightButton){
            lightButton.style.display = "none"
            darkButton.style.display = "block"
        }
    }

    const switchToLight=()=>{
        document.body.classList.toggle('dark-mode')
        if (darkButton && lightButton){
            lightButton.style.display = "block"
            darkButton.style.display = "none"
        }
    }

    return (
        <section className="header">
            <h1>PortFolio</h1>
            <button
                className="mode mode-active"
                id='light-mode'
                onClick={switchToDark}
            >
                <img src="icons/light-mode.png" alt=""/>
            </button>
            <button
                className="mode"
                id='dark-mode'
                onClick={switchToLight}
            >
                <img src="icons/dark-mode.png" alt=""/>
            </button>
        </section>
    );
};