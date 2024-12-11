import React from 'react';

function Footer() {
    return (
        <footer className='bg-primary text-light py-3'>
            <div className='container'>
                <ul className='list-unstyled d-flex flex-column flex-sm-row justify-content-center'>
                    <li className='mx-0 mx-sm-3 my-2 my-sm-0'>
                        <a href="#header" className='text-light text-decoration-none'>Home</a>
                    </li>
                    <li className='mx-0 mx-sm-3 my-2 my-sm-0'>
                        <a href="#about" className='text-light text-decoration-none'>About</a>
                    </li>
                    <li className='mx-0 mx-sm-3 my-2 my-sm-0'>
                        <a href="#projects" className='text-light text-decoration-none'>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" className='text-light text-decoration-none'>Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
