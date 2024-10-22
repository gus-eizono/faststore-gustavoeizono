
module.exports = {
  seo: {
  "title": "FastStore do Gus",
  "description": "Loja para o desafio FastStore",
  "titleTemplate": "%s | Gus' FastStore",
  "author": "Gustavo Eizono Cruz"
},

  // Theming
  theme: 'gus',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "gustavoeizono",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://gustavoeizono.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/groceries",
    search: "/s?q=Seara",
    pdp: "/snugget-seara/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/snugget-seara/p",
      collection: "/groceries",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/snugget-seara/p",
      collection: "/groceries",
      collection_filtered: "/groceries/?category-1=groceries&brand=Seara&facets=category-1%2Cbrand%27",
      search: "/s?q=Seara",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://landingpage--gustavoeizono.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
