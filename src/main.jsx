import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Obtain "root" node when this file is run in index.html using <script> tag.
const domNode = document.getElementById('root')

// React creates a root for the DOM node, and take over managing the DOM inside.
const root = createRoot(domNode)

// Display React component inside the root node.
root.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
