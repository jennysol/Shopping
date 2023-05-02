import Stripe from "stripe";

const KEY = 'sk_test_51N35ZNDNJRxaVQKgxNIYCBbJwNgdXrOIXDPvahFoNf8iMxUsduEg0HP5r6O6N4hK5KbC6Uud9eiUqmLCDnEo4BmA00Biv6gEQJ'

export const stripe = new Stripe(KEY, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Shopping'
  }
})