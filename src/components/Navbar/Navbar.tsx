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
                    Обо мне
                </button>
                <button onClick={()=>onclick("experience")} className={tab === 'experience' ? "button-active" : ""}>
                    {isBtnActive('experience')}
                    Опыт
                </button>
                <button onClick={()=>onclick("projects")} className={tab === 'projects' ? "button-active" : ""}>
                    {isBtnActive('projects')}
                    Проекты
                </button>
                <button onClick={()=>onclick("skills")} className={tab === 'skills' ? "button-active" : ""}>
                    {isBtnActive('skills')}
                    Навыки
                </button>
                <button onClick={()=>onclick("contacts")} className={tab === 'contacts' ? "button-active" : ""}>
                    {isBtnActive('contacts')}
                    Контакты
                </button>
            </div>
        </section>
    );
};