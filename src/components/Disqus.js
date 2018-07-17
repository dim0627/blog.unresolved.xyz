import React from 'react'
import Disqus from 'disqus-react';
import settings from '../settings/settings'

export default (config) => (
  <Disqus.DiscussionEmbed
    shortname={settings.disqus.shortName}
    config={config} />
)
