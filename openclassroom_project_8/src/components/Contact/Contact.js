import "./Contact.css"
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";

function Contact () {
    const form = useRef();
    const [success, setSuccess ] = useState(false)
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_hiu6etj", "template_7nvfdd9", form.current, "u1nV6gEWm-HRWbKDm").then(
            (result) => {
                setSuccess(s => !s)
                console.log(result.text);
            },
            (error) => {
                console.log(error.text);
            }
        );
    };
    return (
        <div className="contact">
            <h3>Mes coordonnées :</h3>
            <p>louisbw78@gmail.com</p>
            <p>+33 6 25 85 44 41</p>
            <h3>Formulaire :</h3>
            {success && <p>Votre message à bien été envoyé</p>}
            <form ref={form} onSubmit={sendEmail}>
                <label>Nom</label>
                <input type="text" id="name" name="name" required></input>
                <label>Email</label>
                <input type="email" id="email" name="email" required></input>
                <label>Message</label>
                <textarea id="message" name="message" placeholder="Que souhaitez-vous dire ?" required></textarea>
                <input className="submit" type="submit" value="Envoyer"></input>
            </form>
        </div>
    )
}

export default Contact