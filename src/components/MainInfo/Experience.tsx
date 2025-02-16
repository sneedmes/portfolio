import React from 'react';

export const Experience = () => {
    const education = [
        {
            years: "2013-2024",
            place: "School №34, Samara",
            graduation: "Gold medal, 278 point"
        },
        {
            years: "2024-2028",
            place: "PRIVGUPS, Samara",
            graduation: "-"
        },
    ]

    const experience = [
        {
            img: "experiance/hakaton.png",
            title: "Hakaton",
            role: "Software Developer",
            duration: "2 month (2021)"
        },
        {
            img: "experiance/process.png",
            title: "In process)",
            role: "Web Developer",
            duration: "Since 2019"
        },
    ]
    return (
        <section className="experience">

            <div className="experience-container">
                <div className="education">
                    <h3>Education</h3>
                    <div className="education-cards">
                        {education.map((info) =>
                            <div className="education-card">
                                <p>{info.years}</p>
                                <p><span>{info.place}</span></p>
                                <p>{info.graduation}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="work">
                    <h3>Experience</h3>
                    <div className="experience-cards">
                        {experience.map((info) =>
                            <div className="experience-card">
                                <img src={info.img} alt=""/>
                                <div className="card-info">
                                    <p><span>Company: {info.title}</span></p>
                                    <p><span>Role:</span> {info.role}</p>
                                    <p><span>Duration: </span>{info.duration}</p>
                                </div>
                            </div>
                        )}</div>
                </div>
            </div>

        </section>
    );
};