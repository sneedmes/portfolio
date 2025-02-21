import React from 'react';

export const Contacts = () => {
    return (
        <section className="contacts">

            <div className="contacts-container">
                <h3>Contacts</h3>
                <form method="post">
                    <div className="form-input">
                        <label htmlFor="mail">Почта</label>
                        <input type="text" id="mail"/>
                    </div>

                    <div className="form-input">
                        <label htmlFor="subject">Тема</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="form-input">
                        <label htmlFor="message">Сообщение</label>
                        <textarea name="message" id="message"></textarea>
                    </div>

                    <button>Отправить</button>
                </form>
            </div>

        </section>
    );
};