# My Portfolio Website

Welcome to my portfolio website repository. The live deployment is located at: [muzammilashraf.com](https://muzammilashraf.com)

# React + ThreeJS + Vite

Welcome to my website. Checkout muzammilashraf.com

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

