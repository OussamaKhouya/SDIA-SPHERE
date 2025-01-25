import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '18570bbaeaf380778b2dee2baaed75de',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'SDIA SPHERE',
  domain: 'sdia-sphere.site',
  author: 'Oussama Khouya',

  // open graph metadata (optional)
  description: 'Everything you need to succeed in your master\'s degree starts here.',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: 'ouskhouya',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  pageUrlOverrides: {
    // '/foo': '067dd719a912471ea9a3ac10710e7fdf',
    '/about': '18570bbaeaf381299370d4cbc8bdb6a1',
    '/contact': '18570bbaeaf38161b40dc263b57c3e17',
    '/S1M4-ROO': 'm114--recherche-oprationnelle-et-optimisation-18570bbaeaf381329812f5df5dae9f19'
  },
  // pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages. To use `navigationLinks`, set `navigationStyle` to `custom`.
  // navigationStyle: 'default',
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '18570bbaeaf381299370d4cbc8bdb6a1'
    },
    {
      title: 'Contact',
      pageId: '18570bbaeaf38161b40dc263b57c3e17'
    }
  ]
})
