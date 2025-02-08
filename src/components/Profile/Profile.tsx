import React from 'react';

type profileProps = {
    mode: string,
}

export const Profile = ({mode}:profileProps) => {

    return (
        <section className="profile">
            <div className="profile-container">

                <div className="profile-main">
                    <img src="ava1.jpg" alt=""/>
                    <h2>Susanna Dallaqyan</h2>
                    <span>Web developer</span>
                </div>

                <div className="profile-social">
                    <a href="https://github.com/sneedmes" target="_blank">
                        {mode === 'light'
                            ? <img src="icons/github.png" alt="" id="git-light"/>
                            : <img src="icons/github-dark.png" alt="" id="git-dark"/>
                        }
                    </a>
                    <a href="" target="_blank">
                        <img src="icons/telegramm.png" alt=""/>
                    </a>
                    <a href="" target="_blank">
                        {mode === 'light'
                            ? <img src="icons/vk.png" alt="" id="vk-light"/>
                            : <img src="icons/vk-dark.png" alt="" id="vk-dark"/>
                        }
                    </a>
                </div>

                <div className="profile-contacts">
                    <ul>
                        <li>
                            {mode === 'light'
                                ? <img src="icons/phone.png" alt="" id="vk-light"/>
                                : <img src="icons/phone-dark.png" alt="" id="vk-dark"/>
                            }
                            +7-902-429-09-70
                        </li>
                        <hr/>
                        <li>
                            {mode === 'light'
                                ? <img src="icons/mail.png" alt="" id="vk-light"/>
                                : <img src="icons/mail-dark.png" alt="" id="vk-dark"/>
                            }
                            dallaqyan0610@gmail.com
                        </li>
                        <hr/>
                        <li>
                            {mode === 'light'
                                ? <img src="icons/city.png" alt="" id="vk-light"/>
                                : <img src="icons/city-dark.png" alt="" id="vk-dark"/>
                            }
                            Samara, Russia
                        </li>
                    </ul>
                </div>

                <div className="profile-button">
                    <button>
                        View Resume
                    </button>
                </div>
            </div>
        </section>
    );
};