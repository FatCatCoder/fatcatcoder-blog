const rehypePrism = require('@mapbox/rehype-prism');
// const optimizedImages = require('next-optimized-images');

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [],
      rehypePlugins: [rehypePrism],
      // If you use `MDXProvider`, uncomment the following line.
      providerImportSource: "@mdx-js/react",
    },
  })
  
module.exports = withMDX({
    // Append the default value with md extensions
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    basePath: process.env.BASE_PATH,
    publicRuntimeConfig: { basePath: process.env.BASE_PATH || '' }
  })



//   module.exports = {
//     basePath: '/fatcatcoder',
//     async redirects() {
//         return [
//             {
//                 source: '/',
//                 destination: '/fatcatcoder',
//                 basePath: false,
//                 permanent: false
//             }
//         ]
//     }
//   };