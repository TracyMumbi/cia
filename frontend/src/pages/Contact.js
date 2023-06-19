import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import { Navbar } from "react-bootstrap";
import Footer from "./Footer";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wjqcl89', 'template_15wlgsu', e.target, 'LkU1MqEcKA51brBWo')
      .then(() => {
          setName("");
          setEmail("");
          setMessage("");
          setShowSuccessMessage(true);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="container my-3 py-3">
        <h1 className="text-center">Contact Us</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="form my-3">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="to_name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form my-3">
                <label htmlFor="message">Message</label>
                <textarea
                  rows={4}
                  className="form-control"
                  id="message"
                  name="message"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>
              <div className="text-center">
                {showSuccessMessage ? (
                  <p className="text-success">Thank you for your feedback!</p>
                ) : (
                  <button
                    className="my-2 px-4 mx-auto btn btn-dark"
                    type="submit"
                  >
                    Send
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;



// SERVICE_ID ('service_5lxs01n', TEMPLATE_ID 'template_iwd41x6', PUBLIC_KEY 'FsFo6NjUnXqn1M2EQ')