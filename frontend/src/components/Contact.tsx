import { useState } from "react";
import { StudentType } from "./types";

type ContactProps = {
    student: StudentType;
};

export default function Contact({ student }: ContactProps) {
    
    const { email } = student;

    const showEmail = () => {
        alert(`email: ${email}`);
    };

    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [submittedData, setSubmittedData] = useState<{ name: string; message: string }[]>([]);

   
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault(); 

        if (!name || !message) {
            alert("Fyll ut både navn og melding.");
            return;
        }

        const newMessage = { name, message };

        setSubmittedData((prevMessages) => {
            return [...prevMessages, newMessage];
        });

        setName("");
        setMessage("");
    };

    return (
        <>
            <h2>Contact</h2>
            <button className="submit_button" id="contact_button" onClick={showEmail}>Show Email</button>
            <section className="form_container">
            <h2>Contact me!</h2>
            <form onSubmit={handleSubmit}>
                
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required/>
                
                <label htmlFor="message">Message:</label>
                <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
                
                <button className="submit_button" type="submit">Submit</button>
            </form>
            </section>
            {submittedData.length > 0 && (
                <div>
                    <h2>Innsendte data:</h2>
                    {submittedData.map((data, index) => (
                        <pre key={index}>
                            {JSON.stringify(data, null, 2)}
                        </pre>
                    ))}
                </div>
            )}
        </>
    );
}
