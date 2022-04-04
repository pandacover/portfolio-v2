import React, { useRef, useState } from "react";
import contactStyles from "../../styles/Contact.module.scss";
import emailjs from "@emailjs/browser";
import EmailJs from "./EmailJs";
import Animation from "../Animation/Animation";

const Contact: React.FC = () => {
    const formRef = useRef();
    const [toggleAnimation, setToggleAnimation] = useState(false);
    const sendEmail = (e: any) => {
        try {
            e.preventDefault()
            emailjs.sendForm(EmailJs.ID.serviceID, EmailJs.ID.templateID, formRef.current, EmailJs.ID.keyID)
                .then((res) => {
                    console.log(res.text)
                }, (error) => {
                    console.error(error)
                })
            setToggleAnimation(true);
            document.querySelector("body").classList.toggle("no-scroll");
            document.querySelector("footer").classList.toggle("hidden");
            setTimeout(() => {
                setToggleAnimation(false)
                document.querySelector("body").classList.toggle("no-scroll");
                document.querySelector("footer").classList.toggle("hidden");
            }, 3000);

        } catch (error) {
            console.error(error)
        }
    }
    if (toggleAnimation) return <Animation />

    return (
        <div id="contact" className={contactStyles.container}>
            <h3>Contact me</h3>
            <form
                className="flex"
                method="post"
                encType="text/plain"
                ref={formRef}
                onSubmit={sendEmail}
            >
                <input type="email" name="email" placeholder="Email" />
                <input type="text" name="name" placeholder="Name" />
                <textarea name="message" placeholder="Message" />
                <button className="btn" type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact;