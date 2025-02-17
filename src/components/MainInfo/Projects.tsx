import React from 'react';

export const Projects = () => {
    const projects = [
        {
            img: "projects/arcane.png",
            title: "Arcane-wiki",
            link: "https://github.com/sneedmes/arcane-wiki",
        },
        {
            img: "projects/house.png",
            title: "House.ink",
            link: "https://github.com/sneedmes/house-project",
        },
        {
            img: "projects/car.png",
            title: "Car-musc",
            link: "https://github.com/sneedmes/car-musc",
        },
        {
            img: "projects/admin.png",
            title: "Admin dashboard",
            link: "https://github.com/sneedmes/my-study/tree/main/AdminDashboard",
        },
    ]

    return (
        <section className="projects">

            <div className="projects-container">

                <h3>Projects</h3>

                <div className="projects-cards">
                    {projects.map((info)=>
                        <div className="projects-card">
                            <img src={info.img} alt=""/>
                            <a href={info.link}>{info.title}</a>
                        </div>
                    )}
                </div>

            </div>

        </section>
    );
};