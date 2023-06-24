import React from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

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
    </div>
  );
};

export default DonationButton;
