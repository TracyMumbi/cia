import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

// Set up Stripe
const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const DonationButton = () => {
  const handlePayPalSuccess = (details) => {
    // Handle successful PayPal donation
    console.log('Donation Successful:', details);
  };

  const handleStripeSubmit = async (event) => {
    // Handle Stripe donation
    event.preventDefault();
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: 'YOUR_STRIPE_PRICE_ID', quantity: 1 }],
      mode: 'payment',
      successUrl: 'https://your-website.com/success',
      cancelUrl: 'https://your-website.com/cancel',
    });

    if (error) {
      console.error('Error:', error);
    }
  };

  const handleMpesaSubmit = async (event) => {
    // Handle M-Pesa donation
    event.preventDefault();
    try {
      const response = await axios.post('YOUR_MPESA_DARAJA_API_URL', {
        // Provide the necessary M-Pesa Daraja API payload
      });

      console.log('M-Pesa Response:', response.data);
      // Handle M-Pesa response as needed
    } catch (error) {
      console.error('M-Pesa Error:', error);
    }
  };

  return (
    <div>
      <h2>Donate via PayPal:</h2>
      <PayPalButton
        amount="10.00" // Set the desired donation amount
        currency="USD" // Set the desired currency
        onSuccess={handlePayPalSuccess}
        options={{
          clientId: 'YOUR_PAYPAL_CLIENT_ID',
        }}
      />

      <h2>Donate via Stripe:</h2>
      <form onSubmit={handleStripeSubmit}>
        <button type="submit">Donate with Stripe</button>
      </form>

      <h2>Donate via M-Pesa:</h2>
      <form onSubmit={handleMpesaSubmit}>
        {/* Add your M-Pesa donation form fields */}
        <button type="submit">Donate with M-Pesa</button>
      </form>
    </div>
  );
};

export default DonationButton;
