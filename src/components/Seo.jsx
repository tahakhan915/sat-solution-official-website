import { useEffect } from 'react'
import { SITE_NAME, SITE_URL, DEFAULT_IMAGE, routes } from '../seoConfig.js'

function setMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}


function setSchema(meta, path) {
  const id = 'sat-seo-schema'
  let el = document.head.querySelector(`#${id}`)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }

  const graph = [
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'S.A.T Solution',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/favicon.png`,
      description:
        'S.A.T Solution delivers AI automation, custom software, web development, mobile apps, cloud solutions and IT services for businesses worldwide.',
      email: 'hello@satsolution.tech',
      sameAs: [
        'https://www.facebook.com/share/1JqB9cpwFr/?mibextid=wwXIfr',
        'https://www.linkedin.com/company/satsolution/',
        'https://www.instagram.com/satsolution.tech',
        'https://x.com/SATSOLUTIOyhyq',
        'https://www.youtube.com/@sat.solution',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      name: 'S.A.T Solution',
      url: `${SITE_URL}/`,
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
  ]

  if (meta.type === 'service') {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      '@id': `${SITE_URL}${path}#service`,
      name: meta.service,
      serviceType: meta.service,
      provider: { '@id': `${SITE_URL}/#organization` },
      url: `${SITE_URL}${path}`,
      description: meta.description,
    })
  }

  if (meta.type === 'article') {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${SITE_URL}${path}#article`,
      headline: meta.title.split(' | ')[0],
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      mainEntityOfPage: `${SITE_URL}${path}`,
      description: meta.description,
    })
  }

  if (meta.type === 'project') {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      '@id': `${SITE_URL}${path}#project`,
      name: meta.project,
      creator: { '@id': `${SITE_URL}/#organization` },
      url: `${SITE_URL}${path}`,
      description: meta.description,
    })
  }

  el.textContent = JSON.stringify(graph)
}

function setLink(rel, href) {
  if (!href) return
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

export default function Seo({ path = '/' }) {
  const meta = routes[path] || routes['/404']

  useEffect(() => {
    const url = `${SITE_URL}${path === '/' ? '' : path}`
    const is404 = meta.type === '404'

    document.title = meta.title
    setMeta('name', 'description', meta.description)
    setMeta('name', 'robots', is404 ? 'noindex, nofollow' : 'index, follow')
    setLink('canonical', url)

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:title', meta.title)
    setMeta('property', 'og:description', meta.description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', DEFAULT_IMAGE)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', meta.title)
    setMeta('name', 'twitter:description', meta.description)
    setMeta('name', 'twitter:image', DEFAULT_IMAGE)
    setSchema(meta, path)

    window.scrollTo(0, 0)
  }, [path, meta.title, meta.description, meta.type])

  return null
}
