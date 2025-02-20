import React from 'react';

export const Contacts = () => {
    return (
        <section className="contacts">

            <div className="contacts-container">
                <h3>Contacts</h3>
                <form method="post">
                    <div className="form-input">
                        <label htmlFor="mail">Email Address</label>
                        <input type="text" id="mail"/>
                    </div>

                    <div className="form-input">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject"/>
                    </div>

                    <div className="form-input">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="message"></textarea>
                    </div>

                    <button>Submit</button>
                </form>
            </div>

        </section>
    );
};