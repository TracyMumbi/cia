import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="https://web.facebook.com/people/CIA-Ministries/100064932630246/">Facebook</a></li>
            <li><a href="https://twitter.com/ChristInAction">Twitter</a></li>
            <li><a href="https://www.instagram.com/ChristInAction">Instagram</a></li>
          </ul>
        </div>
        <div className="contact-details">
          <h3>Contact Us</h3>
          <p>Email: info@christinaction.org</p>
          <p>Phone:254</p>
          <p>Address: 00100 Nairobi</p>
        </div>
      </div>
      <p className="footer-text">&copy; {new Date().getFullYear()} Christ in Action Charity. All rights reserved.</p>
    </footer>
  );
}

export default Footer;