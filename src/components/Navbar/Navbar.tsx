import React from 'react';

type NavProps = {
    tab: string,
    onclick: (tab: string)=>void,
    mode: string,
}

export const Navbar = ({tab, onclick, mode}:NavProps) => {
    function isBtnActive(tabName: string){
        if(mode === 'light' && tab != tabName){
            return <img src={"icons/" + tabName + ".png"} alt=""/>
        } else if(mode === 'dark' && tab != tabName){
            return <img src={"icons/" + tabName + "-dark.png"} alt=""/>
        } else if(mode === 'light' && tab === tabName){
            return <img src={"icons/" + tabName + "-active.png"} alt=""/>
        } else if(mode === 'dark' && tab === tabName){
            return <img src={"icons/" + tabName + ".png"} alt=""/>
        }
    }

    return (
        <section className="nav">
            <div className="nav-container">
                <button onClick={()=>onclick("about")} className={tab === 'about' ? "button-active" : ""}>
                    {isBtnActive('about')}
                    About
                </button>
                <button onClick={()=>onclick("experience")} className={tab === 'experience' ? "button-active" : ""}>
                    {isBtnActive('experience')}
                    Experience
                </button>
                <button onClick={()=>onclick("projects")} className={tab === 'projects' ? "button-active" : ""}>
                    {isBtnActive('projects')}
                    Projects
                </button>
                <button onClick={()=>onclick("skills")} className={tab === 'skills' ? "button-active" : ""}>
                    {isBtnActive('skills')}
                    Skills
                </button>
                <button onClick={()=>onclick("contacts")} className={tab === 'contacts' ? "button-active" : ""}>
                    {isBtnActive('contacts')}
                    Contacts
                </button>
            </div>
        </section>
    );
};