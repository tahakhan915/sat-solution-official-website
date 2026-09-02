import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App.jsx'

// Re-export so the prerender script can pull both the renderer and the
// route metadata from this single SSR bundle (Vite's SSR build inlines
// everything into one file, so seoConfig.js won't exist standalone here).
export { routes, SITE_NAME, SITE_URL, DEFAULT_IMAGE } from './seoConfig.js'

export function render(url) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>
  )
}
