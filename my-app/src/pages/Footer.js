import React from 'react';
import "../App.css";


const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <ul >
                    <li>
                        <a href="https://linkedin.com/">Terms And Conditions</a>
                    </li>
                    <li>
                        <a href="https://google.com/">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="https://list.am/">Cookie Policy</a>
                    </li>
                    <li>
                        <a href="https://gmail.com/">+1 (833)-835-8880 | 9 a.m to 5 p.m</a>
                    </li>
                </ul>
            </div>
            <div className="logo">
                <img  src="https://apply.usvisaappointments.com/wp-content/uploads/2018/04/SmallLogo.png#thumbnail=100%2C100&srcset=1" alt="Logo"/>
            </div>
        </footer>
    );
};

export default Footer;