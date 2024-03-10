const config = {
  checkoutPublicKey: import.meta.env.VITE_CHECKOUT_PUBLIC_KEY,
  serverSideBaseUrl: {
    local: 'http://localhost:3000',
    live: 'https://checkout-demo-server.onrender.com/'
  }
}

export default config;