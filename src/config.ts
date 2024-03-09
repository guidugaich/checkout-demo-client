const config = {
  checkoutPublicKey: import.meta.env.VITE_CHECKOUT_PUBLIC_KEY,
  serverSideBaseUrl: {
    local: 'http://localhost:3000',
    live: 'https://api.theoretical.checkout.com'
  }
}

export default config;