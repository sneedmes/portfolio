import React from 'react';

type NavProps = {
    tab: string,
    onclick: ()=>void,
    mode: string,
}

export const Navbar = ({tab, onclick, mode}:NavProps) => {
    return (
        <section className="nav">
            <div className="nav-container">
                <button onClick={onclick} className={tab === 'about' ? "button-active" : ""}>
                    {mode === 'light'
                        ? <img src="icons/about.png" alt=""/>
                        : <img src="icons/about-dark.png" alt=""/>
                    }
                    About
                </button>
                <button onClick={onclick} className={tab === 'experience' ? "button-active" : ""}>
                    {mode === 'light'
                        ? <img src="icons/experience.png" alt=""/>
                        : <img src="icons/experience-dark.png" alt=""/>
                    }
                    Experience
                </button>
                <button onClick={onclick} className={tab === 'projects' ? "button-active" : ""}>
                    {mode === 'light'
                        ? <img src="icons/projects.png" alt=""/>
                        : <img src="icons/projects-dark.png" alt=""/>
                    }
                    Projects
                </button>
                <button onClick={onclick} className={tab === 'skills' ? "button-active" : ""}>
                    {mode === 'light'
                        ? <img src="icons/skills.png" alt=""/>
                        : <img src="icons/skills-dark.png" alt=""/>
                    }
                    Skills
                </button>
                <button onClick={onclick} className={tab === 'contact' ? "button-active" : ""}>
                    {mode === 'light'
                        ? <img src="icons/contact.png" alt=""/>
                        : <img src="icons/contact-dark.png" alt=""/>
                    }
                    Contact
                </button>
            </div>
        </section>
    );
};