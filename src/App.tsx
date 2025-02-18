import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";
import {About} from "./components/MainInfo/About";
import {Experience} from "./components/MainInfo/Experience";
import {Projects} from "./components/MainInfo/Projects";
import {Skills} from "./components/MainInfo/Skills";

function App() {
    const [mode, setMode] = useState('light')
    const [tab, setTab] = useState('skills')

    const handleClick = (tab: string)=>{
        setTab(tab)
    }

    const toggleMode = () => {
        const lightButton = document.getElementById('light-mode');
        const darkButton = document.getElementById('dark-mode');
        const isDark = document.body.classList.toggle('dark-mode');

        if (darkButton && lightButton) {
            lightButton.style.display = isDark ? "none" : "block";
            darkButton.style.display = isDark ? "block" : "none";
            setMode(isDark ? 'dark' : 'light');
        }
    }
    return (
        <main>

            <header>
                <Header mode={mode} onclick={toggleMode}/>
            </header>

            <section className="main-container">
                <aside>
                    <Profile mode={mode}/>
                </aside>

                <section className='section'>
                    {tab === "about" && <About/>}
                    {tab === "experience" && <Experience/>}
                    {tab === "projects" && <Projects/>}
                    {tab === "skills" && <Skills/>}
                </section>

                <nav>
                    <Navbar tab={tab} onclick={handleClick} mode={mode}/>
                </nav>
            </section>

        </main>
    );
}

export default App;
