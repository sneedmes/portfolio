import React, {useState} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
    const [mode, setMode] = useState('light')

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

            <aside>
                <Profile mode={mode}/>
            </aside>

            <section>

            </section>

            <nav>
                <Navbar/>
            </nav>

        </main>
    );
}

export default App;
