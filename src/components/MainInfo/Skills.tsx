import React from 'react';

export const Skills = () => {
    const skills = [
        {
            img: "skills/js.png",
            title: "JavaScript",
        },
        {
            img: "skills/react.png",
            title: "React",
        },
        {
            img: "skills/bootstrap.png",
            title: "BootStrap",
        },
        {
            img: "skills/py.png",
            title: "Python",
        },
    ]

    const tools = [
        {
            img: "skills/figma.png",
            title: "Figma",
        },
        {
            img: "skills/github.png",
            title: "GitHub",
        },
    ]

    return (
        <section className="skills">

            <div className="skills-container">

                <h3>Skills</h3>
                <div className="skills-list">
                    {skills.map((info) =>
                        <div className="list">
                            <div className="list-container">
                                <img src={info.img} alt=""/>
                            </div>
                            <p>{info.title}</p>
                        </div>
                    )}
                </div>

                <h3>Tools & Software</h3>
                <div className="skills-list">
                    {tools.map((info) =>
                        <div className="list">
                            <div className="list-container">
                                <img src={info.img} alt=""/>
                            </div>
                            <p>{info.title}</p>
                        </div>
                    )}
                </div>
            </div>

        </section>
    );
};