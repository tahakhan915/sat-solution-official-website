import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
const __dirname=path.dirname(fileURLToPath(import.meta.url)); const root=path.resolve(__dirname,'..'); const distDir=path.join(root,'dist'); const ssrDir=path.join(root,'dist-ssr')
const {render,routes,SITE_NAME,SITE_URL,DEFAULT_IMAGE}=await import(path.join(ssrDir,'entry-server.js'))
const template=fs.readFileSync(path.join(distDir,'index.html'),'utf-8')
const escape=(v)=>String(v).replace(/&/g,'&amp;').replace(/"/g,'&quot;')
const allRoutes=Object.keys(routes)
const routeMeta=(r)=>routes[r]||routes['/404']
function graphFor(route,meta){
 const org={'@context':'https://schema.org','@type':'Organization','@id':`${SITE_URL}/#organization`,name:SITE_NAME,url:`${SITE_URL}/`,logo:`${SITE_URL}/favicon.png`,description:'S.A.T Solution delivers AI automation, custom software, web development, mobile apps, cloud solutions and IT services for businesses worldwide.',email:'hello@satsolution.tech',sameAs:['https://www.linkedin.com/company/satsolution/','https://www.instagram.com/satsolution.tech','https://www.youtube.com/@sat.solution']}
 const web={'@context':'https://schema.org','@type':'WebSite','@id':`${SITE_URL}/#website`,name:SITE_NAME,url:`${SITE_URL}/`,publisher:{'@id':`${SITE_URL}/#organization`}}
 const graph=[org,web]
 if(route!=='/' && meta.type!=='404'){
  const parts=route.split('/').filter(Boolean); const list=[{'@type':'ListItem',position:1,name:'Home',item:`${SITE_URL}/`}]; let acc=''; parts.forEach((part,i)=>{acc+=`/${part}`; list.push({'@type':'ListItem',position:i+2,name:part.split('-').map(w=>w[0]?.toUpperCase()+w.slice(1)).join(' '),item:`${SITE_URL}${acc}`})}); graph.push({'@context':'https://schema.org','@type':'BreadcrumbList','@id':`${SITE_URL}${route}#breadcrumb`,itemListElement:list})
 }
 if(meta.type==='service'||meta.type==='money') graph.push({'@context':'https://schema.org','@type':'Service','@id':`${SITE_URL}${route}#service`,name:meta.service||meta.title.split('|')[0].trim(),serviceType:meta.service||meta.title.split('|')[0].trim(),provider:{'@id':`${SITE_URL}/#organization`},url:`${SITE_URL}${route}`,description:meta.description})
 if(meta.type==='article') graph.push({'@context':'https://schema.org','@type':'Article','@id':`${SITE_URL}${route}#article`,headline:meta.title.split(' | ')[0],author:{'@id':`${SITE_URL}/#organization`},publisher:{'@id':`${SITE_URL}/#organization`},mainEntityOfPage:`${SITE_URL}${route}`,description:meta.description})
 if(meta.type==='project') graph.push({'@context':'https://schema.org','@type':'CreativeWork','@id':`${SITE_URL}${route}#project`,name:meta.project,creator:{'@id':`${SITE_URL}/#organization`},url:`${SITE_URL}${route}`,description:meta.description})
 if(meta.type==='faq') graph.push({'@context':'https://schema.org','@type':'FAQPage','mainEntity':[{'@type':'Question',name:'What services does S.A.T Solution provide?',acceptedAnswer:{'@type':'Answer',text:'S.A.T Solution provides custom software, websites, mobile applications, cloud solutions, IT systems and business automation.'}},{'@type':'Question',name:'How does the project process work?',acceptedAnswer:{'@type':'Answer',text:'Projects start with understanding goals, defining scope, planning the solution, designing, building, testing, launching and improving.'}},{'@type':'Question',name:'How much does a project cost?',acceptedAnswer:{'@type':'Answer',text:'Project cost depends on requirements, complexity, timeline and support needs. S.A.T Solution scopes those factors before providing an estimate.'}},{'@type':'Question',name:'How long does a website or software project take?',acceptedAnswer:{'@type':'Answer',text:'Timelines vary by scope. A focused website can move quickly while custom software and larger systems require more discovery and testing.'}},{'@type':'Question',name:'Can S.A.T Solution work with an existing website or system?',acceptedAnswer:{'@type':'Answer',text:'Yes. S.A.T Solution can improve, redesign, integrate with, maintain or extend existing digital products when the technology is suitable.'}}]})
 return `<script id="sat-seo-schema" type="application/ld+json">${JSON.stringify({'@context':'https://schema.org','@graph':graph})}</script>`
}
for(const route of allRoutes){
 const meta=routeMeta(route); const url=`${SITE_URL}${route==='/'?'':route}`; const app=render(route); let html=template
 const replace=(re,v)=>{html=html.replace(re,v)}
 replace(/<title>.*?<\/title>/s,`<title>${escape(meta.title)}</title>`)
 replace(/<meta name="description" content=".*?" \/>/s,`<meta name="description" content="${escape(meta.description)}" />`)
 replace(/<meta name="robots" content=".*?" \/>/s,`<meta name="robots" content="${meta.type==='404'?'noindex, nofollow':'index, follow'}" />`)
 replace(/<link rel="canonical" href=".*?" \/>/s,`<link rel="canonical" href="${escape(url)}" />`)
 replace(/<meta property="og:title" content=".*?" \/>/s,`<meta property="og:title" content="${escape(meta.title)}" />`)
 replace(/<meta property="og:description" content=".*?" \/>/s,`<meta property="og:description" content="${escape(meta.description)}" />`)
 replace(/<meta property="og:url" content=".*?" \/>/s,`<meta property="og:url" content="${escape(url)}" />`)
 replace(/<meta property="og:image" content=".*?" \/>/s,`<meta property="og:image" content="${escape(DEFAULT_IMAGE)}" />`)
 replace(/<meta name="twitter:title" content=".*?" \/>/s,`<meta name="twitter:title" content="${escape(meta.title)}" />`)
 replace(/<meta name="twitter:description" content=".*?" \/>/s,`<meta name="twitter:description" content="${escape(meta.description)}" />`)
 replace(/<meta name="twitter:image" content=".*?" \/>/s,`<meta name="twitter:image" content="${escape(DEFAULT_IMAGE)}" />`)
 html=html.replace('</head>',`${graphFor(route,meta)}\n</head>`).replace('<div id="root"></div>',`<div id="root">${app}</div>`)
 const out=route==='/404'?path.join(distDir,'404.html'):route==='/'?path.join(distDir,'index.html'):path.join(distDir,route.slice(1),'index.html'); fs.mkdirSync(path.dirname(out),{recursive:true}); fs.writeFileSync(out,html); console.log('prerendered',route)
}
fs.rmSync(ssrDir,{recursive:true,force:true})
