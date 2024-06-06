import { useState } from 'react';

const Contact = () => {
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        description: "",
    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setForm((state) => ({
            ...state,
            [name]: value,
        }));
    };

    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const submit = async (e) => {
        e.preventDefault();
        if (!form.email.match(pattern)) {
            setError(true);
            console.log("Invalid email format.");
        } else {
            try {
                const response = await fetch('https://formspree.io/f/xvoejdoo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(form),
                });

                if (response.ok) {
                    setSuccess(true);
                    console.log("Form submitted successfully.");
                } else {
                    setError(true);
                    console.log("Form submission failed.");
                }
            } catch (error) {
                setError(true);
                console.log("Form submission error:", error);
            }
        }
    };

    const handleSuccess = () => {
        setSuccess(false);
        setForm({
            name: "",
            email: "",
            description: "",
        });
    };

    return (
        <section className="contact" id='contact'>
            <h2>Contact Me</h2>
            <form onSubmit={submit}>
                <input
                    type="text"
                    name='name'
                    onChange={handleChange}
                    value={form.name}
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    name='email'
                    onChange={handleChange}
                    value={form.email}
                    className="form-control"
                    id="email"
                    placeholder="Email Address"
                    required
                />
                <textarea
                    className="form-control"
                    name='description'
                    onChange={handleChange}
                    value={form.description}
                    id="description"
                    placeholder='Purpose of contact'
                    rows="6"
                    required
                ></textarea>
                <button className="btn" type='submit'>Submit</button>
            </form>
            {success && (
                <div className='box'>
                    <div className="success">
                        <h4 className="success-text">Thank You!</h4>
                        <p className="success-subtext">Message delivered successfully.</p>
                        <button className="success-btn" onClick={handleSuccess}>Ok</button>
                    </div>
                </div>
            )}
            {error && (
                <div className='box'>
                    <div className="error">
                        <h4 className="error-text">Oops!</h4>
                        <p className="error-subtext">There was an error delivering your message.</p>
                        <button className="error-btn" onClick={() => setError(false)}>Try Again</button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Contact;
