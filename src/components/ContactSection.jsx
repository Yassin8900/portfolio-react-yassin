import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

function ContactSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/newsletter', { state: { name, email } });
    };

    return (
        <div className="bg-dark text-light py-5" id="contact">
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="row w-100">
                    <div className="col-md-6 offset-md-3 d-flex flex-column justify-content-center align-items-center text-center">
                        <h2 className='mb-5'>Contact me</h2>
                        <form className="w-100" onSubmit={handleSubmit}>
                            <div className="mb-3 w-100">
                                <label htmlFor="name" className="form-label d-block w-100">Name</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="name" 
                                    required 
                                    pattern="[A-Za-z\s]+" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <small className="form-text text-muted">Only letters and spaces are allowed.</small>
                            </div>
                            <div className="mb-3 w-100">
                                <label htmlFor="email" className="form-label d-block w-100">Email</label>
                                <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    required 
                                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <small className="form-text text-muted">Please enter a valid email address.</small>
                            </div>
                            <div className="mb-3 w-100">
                                <label htmlFor="message" className="form-label d-block w-100">Message</label>
                                <textarea className="form-control" id="message" rows="3"></textarea>
                                <small className="form-text text-muted">Feel free to write your message here.</small>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        <br />
                        <ul className="list-unstyled d-flex justify-content-center">
                            <li className="me-3">
                                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-facebook" style={{ fontSize: '24px', color: 'white' }}></i>
                                </a>
                            </li>
                            <li className="me-3">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-twitter" style={{ fontSize: '24px', color: 'white' }}></i>
                                </a>
                            </li>
                            <li className="me-3">
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-github" style={{ fontSize: '24px', color: 'white' }}></i>
                                </a>
                            </li>
                            <li className="me-3">
                                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin" style={{ fontSize: '24px', color: 'white' }}></i>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-instagram" style={{ fontSize: '24px', color: 'white' }}></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactSection;