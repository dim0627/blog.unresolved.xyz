// const Promise = require('bluebird')
// const path = require('path')
// 
// exports.createPages = ({ graphql, boundActionCreators }) => {
//   const { createPage } = boundActionCreators
// 
//   return new Promise((resolve, reject) => {
//     const postComponent = path.resolve('./src/templates/post.js')
//     resolve(
//       graphql(
//         `
//           {
//             allContentfulPost {
//               edges {
//                 node {
//                   slug
//                 }
//               }
//             }
//           }
//           `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }
// 
//         const posts = result.data.allContentfulPost.edges
//         posts.forEach((post, _) => {
//           createPage({
//             path: `/${post.node.slug}/`,
//             component: postComponent,
//             context: {
//               slug: post.node.slug
//             },
//           })
//         })
//       })
//     )
//   })
// }
