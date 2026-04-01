import { useState } from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { Button } from './common/Button'

export default function CheckoutForm({ amount, onSuccess }) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(null)
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setProcessing(true)

    if (!stripe || !elements) return

    const cardElement = elements.getElement(CardElement)

    // Simulate PaymentIntent
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    })

    if (error) {
      setError(error.message)
      setProcessing(false)
    } else {
      setError(null)
      setProcessing(false)
      onSuccess(paymentMethod.id)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="p-6 bg-charcoal border border-white/5">
        <label className="block text-crimson text-[10px] font-body font-bold uppercase tracking-[0.2em] mb-6">
          Secure Credit Card Data
        </label>
        <div className="p-4 bg-void border border-iron focus-within:border-crimson transition-colors">
          <CardElement 
            options={{
              style: {
                base: {
                  fontSize: '14px',
                  color: '#FAF9F6',
                  fontFamily: 'Epilogue, sans-serif',
                  '::placeholder': { color: 'rgba(250,249,246,0.2)' },
                  iconColor: '#DC143C',
                },
                invalid: { color: '#FF4500' },
              },
            }}
          />
        </div>
        {error && <p className="mt-4 text-crimson text-[10px] uppercase font-bold tracking-widest italic">{error}</p>}
      </div>

      <Button 
        type="submit" 
        disabled={!stripe || processing} 
        className="w-full h-16 text-lg"
      >
        {processing ? 'Processing Algorithm...' : `Authorize PKR ${amount.toLocaleString()}`}
      </Button>
    </form>
  )
}
