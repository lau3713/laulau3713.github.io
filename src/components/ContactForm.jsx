import React, { useState } from 'react';


function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [reasons, setReasons] = useState({
    investor: false,
    purchase: false,
    support: false
  });
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'phoneNumber':
        setPhoneNumber(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'message':
        setMessage(value);
        break;
      default:
        break;
    }
  };

  const handleReasonsChange = (event) => {
    const { name, checked } = event.target;

    setReasons((prevReasons) => ({
      ...prevReasons,
      [name]: checked
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted:', {
      firstName,
      lastName,
      phoneNumber,
      email,
      reasons,
      message
    });
    // TODO: send form data to server
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contactez-nous</h2>
      <div>
        <label htmlFor="firstName">Prénom :</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Nom :</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="phoneNumber">Numéro de téléphone :</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Adresse email :</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div>
        <span>Raison de votre message :</span>
        <div>
          <input
            type="checkbox"
            id="investor"
            name="investor"
            checked={reasons.investor}
            onChange={handleReasonsChange}
          />
          <label htmlFor="investor">Investisseur</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="purchase"
            name="purchase"
            checked={reasons.purchase}
            onChange={handleReasonsChange}
          />
          <label htmlFor="purchase">Achat</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="support"
            name="support"
            checked={reasons.support}
            onChange={handleReasonsChange}
          />
          <label htmlFor="support">SAV</label>
        </div>
      </div>
      <div>
        <label htmlFor="message">Message :</label>
    <textarea
      id="message"
      name="message"
      value={message}
      onChange={handleInputChange}
      rows={5}
      required
    />
  </div>
  <button type="submit">Envoyer</button>
</form>
  )}

export default ContactForm
