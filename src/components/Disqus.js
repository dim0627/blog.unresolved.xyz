import React from 'react'
import ReactDisqusThread from 'react-disqus-thread'
import settings from '../settings/settings'

export default (config) => (
  <Disqus.DiscussionEmbed
    shortname={settings.disqus.shortName}
    config={config} />
)
