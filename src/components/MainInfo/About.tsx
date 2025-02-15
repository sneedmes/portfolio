import React from 'react';

export const About = () => {
    const card = [
        {
            img: "intro-img/webfrontend.png",
            title: "Web Front-End Development",
            text: "With a robust proficiency in\n" +
                "React.js. I excel at transforming design concepts into dynamic, user-friendly websites.",
        },
        {
            img: "intro-img/ui.png",
            title: "UI/UX Designing",
            text: "With strong expertise in UI/UX design, I excel at creating intuitive and visually engaging user experiences, translating user needs into seamless, impactful Designs.",
        },
    ]

    return (
        <section className="about">

            <div className="about-container">

                <h3>About</h3>
                <p>I am a passionate tech enthusiast with a deep interest in Web and App
                    Development. Currently, I am pursuing a B.Tech in Information Technology at CSPIT, CHARUSAT, and am
                    gaining valuable experience as an SDE Intern at Compnay A. I possess expertise in Flutter
                    Development, UI/UX Design, React.js, and Tailwind CSS for web development, as well as Node.js and
                    Express.js for robust backend solutions.</p>
                <p>Noteworthy Achievement of my carear is ranking in Top 10 Teams at hackathon hosted by Zyc org at CSF,
                    Gujarat. As UI/UX Designer my several apps and websites designs are currently in used in
                    production.</p>
                <p>Additionally, I have did internship as Flutter Developer, Ul/UX Designer and Java Developer. This
                    diverse experience has provided me with a holistic understanding on front-end and back-end
                    technologies, as well as user experience, allowing me to make meaningful contributions across
                    various facets of technology projects.</p>

                <h4>What I Do</h4>

                <div className="about-cards">
                    {card.map((info) =>
                        <div className="about-card">
                            <img src={info.img} alt=""/>
                            <div className="card-text">
                                <h5>{info.title}</h5>
                                <p>{info.text}</p>
                            </div>
                        </div>
                    )}
                </div>

            </div>

        </section>
    );
};