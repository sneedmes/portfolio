import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Profile} from "./components/Profile/Profile";
import {Navbar} from "./components/Navbar/Navbar";

function App() {
    return (
        <main>

            <header>
                <Header/>
            </header>

            <aside>
                <Profile/>
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
