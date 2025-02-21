import React from 'react';

export const Experience = () => {
    const education = [
        {
            years: "2013-2024",
            place: "МБОУ Школа №34 имени Е.А. Зубчанинова, Самара",
            graduation: "11 классов с отличием (золотая медаль)"
        },
        {
            years: "2024-2028",
            place: "Привгупс, Самара",
            graduation: "-"
        },
    ]

    const experience = [
        {
            img: "experiance/hakaton.png",
            title: "Хакатон",
            role: "Разработчик андроид приложения",
            duration: "2 месяца (2021)"
        },
        {
            img: "experiance/process.png",
            title: "В процессе)",
            role: "Веб-разработчик",
            duration: "С 2019 года"
        },
    ]
    return (
        <section className="experience">

            <div className="experience-container">
                <div className="education">
                    <h3>Образование</h3>
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
                    <h3>Опыт</h3>
                    <div className="experience-cards">
                        {experience.map((info) =>
                            <div className="experience-card">
                                <img src={info.img} alt=""/>
                                <div className="card-info">
                                    <p><span>Компания: {info.title}</span></p>
                                    <p><span>Должность:</span> {info.role}</p>
                                    <p><span>Продолжительность: </span>{info.duration}</p>
                                </div>
                            </div>
                        )}</div>
                </div>
            </div>

        </section>
    );
};