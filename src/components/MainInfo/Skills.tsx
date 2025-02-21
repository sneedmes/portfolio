import React from 'react';

type SkillsProps = {
    mode: string,
}

export const Skills = ({mode}: SkillsProps) => {
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
            img: "skills/github.png",
            title: "Github",
        },
        {
            img: "skills/figma.png",
            title: "Figma",
        },
        {
            img: "skills/github-dark.png",
            title: "GitHub",
        },

    ]
    console.log(tools.slice(0, 2))

    return (
        <section className="skills">

            <div className="skills-container">

                <h3>Навыки</h3>
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

                <h3>Инструменты / приложения</h3>
                <div className="skills-list">
                    {mode === "light"
                        ?
                        tools.slice(0, 2).reverse().map((info) =>
                            <div className="list">
                                <div className="list-container">
                                    <img src={info.img} alt=""/>
                                </div>
                                <p>{info.title}</p>
                            </div>)
                        :
                        tools.slice(1, 3).map((info) =>
                            <div className="list">
                                <div className="list-container">
                                    <img src={info.img} alt=""/>
                                </div>
                                <p>{info.title}</p>
                            </div>)
                    }
                </div>
            </div>

        </section>
    );
};