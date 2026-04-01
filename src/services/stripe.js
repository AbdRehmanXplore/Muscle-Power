import { loadStripe } from '@stripe/stripe-js'

// Replace with your real Stripe Publishable Key
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51P...' // Placeholder

export const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY)

export const createPaymentIntent = async (amount) => {
  // In a real production-ready app, you would call your backend to create a PaymentIntent
  // For this demonstration, we simulate the backend call
  console.log(`Simulating PaymentIntent creation for PKR ${amount}`)
  return { clientSecret: 'pi_test_secret_...' }
}
