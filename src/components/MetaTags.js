import React from 'react'
import Helmet from 'react-helmet'
import settings from '../settings/settings'

export default ({ title, description, image, url }) => (
  <Helmet>
    <title>{title} - {settings.site.title}</title>

    <meta name="description" content={description} />

    <link rel="canonical" href={url} />

    <meta property="og:title" content={title} />
    <meta property="og:site_name" content={settings.site.title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:image" content={image}/>

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:image" content={image} />

    <link rel="image_src" href={image} />
    <meta property="og:image" content={image} />
  </Helmet>
)
