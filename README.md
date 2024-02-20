# My Portfolio Website

Greetings adventurer! Welcome to my website repository. You can see the live deployment at: [minhalshanjer.com](https://minhalshanjer.com) if I'm still using this template.

# React + ThreeJS + Vite

Welcome to my website. Checkout minhalshanjer.com

Remember to check vite.config.js when executing locally. 
The 'base' should be commented out in the local environment.

Check package.json for all the commands available.

npm install
npm run dev
// for deployment, with base targeting the github link
npm run deploy 

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
  // base: 'https://minhalexus.github.io/3D-portfolio'
})
```

