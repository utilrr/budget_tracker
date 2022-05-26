// {
//     "name": "Budget Tracker",
//     "short_name": "Foodies",
//     "description": "An app that allows you to view upcoming food events.",

//   "background_color": "#01579b",
// "theme_color": "#ffffff",

// "icons": [
//   {
//     "src": "/img/icons/icons-192.png",
//     "type": "image/png",
//     "sizes": "192x192"
//   },
//   {
//     "src": "/img/icons/icons-512.png",
//     "type": "image/png",
//     "sizes": "512x512"
//   }
// ]

// "start_url": "/",
// "display": "standalone"
// }

new WebpackPwaManifest({
  name: "Budget Tracker",
  short_name: "Track $",
  description:
    "An app that allows you to add/subtract expenses w/ the help of a PWA.",
  start_url: "../index.html",
  background_color: "#01579b",
  theme_color: "#ffffff",
  fingerprints: false,
  inject: false,
  icons: [
    {
      src: path.resolve("assets/img/icons/icon-512x512.png"),
      sizes: [96, 128, 192, 256, 384, 512],
      destination: path.join("assets", "icons"),
    },
  ],
});
