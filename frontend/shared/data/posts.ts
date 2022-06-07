// import faker from 'faker'

// export const posts = [
//   {
//     id: faker.random.uuid(),
//     name: faker.company.companyName(),
//     feedback: [
//       {
//         id: faker.random.uuid(),
//         author: {
//           id: faker.random.uuid(),
//           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//           username: faker.internet.userName()
//         },
//         text: faker.lorem.sentence(),
//         status: 'Unanswered',
//         comments: [
//           {
//             id: faker.random.uuid(),
//             author: {
//               id: faker.random.uuid(),
//               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//               username: faker.internet.userName()
//             },
//             text: faker.lorem.sentence(),
//             comments: [
//               {
//                 id: faker.random.uuid(),
//                 author: {
//                   id: faker.random.uuid(),
//                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                   username: faker.internet.userName()
//                 },
//                 text: faker.lorem.sentence(),
//                 comments: [
//                   {
//                     id: faker.random.uuid(),
//                     author: {
//                       id: faker.random.uuid(),
//                       name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                       username: faker.internet.userName()
//                     },
//                     text: faker.lorem.sentence(),
//                     comments: [
//                       {
//                         id: faker.random.uuid(),
//                         author: {
//                           id: faker.random.uuid(),
//                           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                           username: faker.internet.userName()
//                         },
//                         text: faker.lorem.sentence(),
//                         comments: [
//                           {
//                             id: faker.random.uuid(),
//                             author: {
//                               id: faker.random.uuid(),
//                               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                               username: faker.internet.userName()
//                             },
//                             text: faker.lorem.sentence(),
//                             comments: [
//                               {
//                                 id: faker.random.uuid(),
//                                 author: {
//                                   id: faker.random.uuid(),
//                                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                                   username: faker.internet.userName()
//                                 },
//                                 text: faker.lorem.sentence(),
//                                 comments: [
//                                   {
//                                     id: faker.random.uuid(),
//                                     author: {
//                                       id: faker.random.uuid(),
//                                       name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                                       username: faker.internet.userName()
//                                     },
//                                     text: faker.lorem.sentence(),
//                                     comments: [
//                                       {
//                                         id: faker.random.uuid(),
//                                         author: {
//                                           id: faker.random.uuid(),
//                                           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                                           username: faker.internet.userName()
//                                         },
//                                         text: faker.lorem.sentence(),
//                                         comments: [
//                                           {
//                                             id: faker.random.uuid(),
//                                             author: {
//                                               id: faker.random.uuid(),
//                                               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                                               username:
//                                                 faker.internet.userName()
//                                             },
//                                             text: faker.lorem.sentence(),
//                                             comments: [
//                                               {
//                                                 id: faker.random.uuid(),
//                                                 author: {
//                                                   id: faker.random.uuid(),
//                                                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                                                   username:
//                                                     faker.internet.userName()
//                                                 },
//                                                 text: faker.lorem.sentence(),
//                                                 comments: [
//                                                   {
//                                                     id: faker.random.uuid(),
//                                                     author: {
//                                                       id: faker.random.uuid(),
//                                                       name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                                                       username:
//                                                         faker.internet.userName()
//                                                     },
//                                                     text: faker.lorem.sentence(),
//                                                     comments: [
//                                                       {
//                                                         id: faker.random.uuid(),
//                                                         author: {
//                                                           id: faker.random.uuid(),
//                                                           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                                                           username:
//                                                             faker.internet.userName()
//                                                         },
//                                                         text: faker.lorem.sentence()
//                                                       }
//                                                     ]
//                                                   }
//                                                 ]
//                                               }
//                                             ]
//                                           }
//                                         ]
//                                       }
//                                     ]
//                                   }
//                                 ]
//                               }
//                             ]
//                           }
//                         ]
//                       }
//                     ]
//                   }
//                 ]
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: faker.random.uuid(),
//         author: {
//           id: faker.random.uuid(),
//           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//           username: faker.internet.userName()
//         },
//         text: faker.lorem.sentence(),
//         status: 'Unanswered',
//         comments: [
//           {
//             id: faker.random.uuid(),
//             author: {
//               id: faker.random.uuid(),
//               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//               username: faker.internet.userName()
//             },
//             text: faker.lorem.sentence(),
//             comments: [
//               {
//                 id: faker.random.uuid(),
//                 author: {
//                   id: faker.random.uuid(),
//                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                   username: faker.internet.userName()
//                 },
//                 text: faker.lorem.sentence()
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: faker.random.uuid(),
//         author: {
//           id: faker.random.uuid(),
//           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//           username: faker.internet.userName()
//         },
//         text: faker.lorem.sentence(),
//         status: 'Unanswered',
//         comments: [
//           {
//             id: faker.random.uuid(),
//             author: {
//               id: faker.random.uuid(),
//               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//               username: faker.internet.userName()
//             },
//             text: faker.lorem.sentence(),
//             comments: [
//               {
//                 id: faker.random.uuid(),
//                 author: {
//                   id: faker.random.uuid(),
//                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                   username: faker.internet.userName()
//                 },
//                 text: faker.lorem.sentence()
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: faker.random.uuid(),
//     name: faker.company.companyName(),
//     feedback: [
//       {
//         id: faker.random.uuid(),
//         author: {
//           id: faker.random.uuid(),
//           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//           username: faker.internet.userName()
//         },
//         text: faker.lorem.sentence(),
//         status: 'Unanswered',
//         comments: [
//           {
//             id: faker.random.uuid(),
//             author: {
//               id: faker.random.uuid(),
//               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//               username: faker.internet.userName()
//             },
//             text: faker.lorem.sentence(),
//             comments: [
//               {
//                 id: faker.random.uuid(),
//                 author: {
//                   id: faker.random.uuid(),
//                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                   username: faker.internet.userName()
//                 },
//                 text: faker.lorem.sentence()
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: faker.random.uuid(),
//         author: {
//           id: faker.random.uuid(),
//           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//           username: faker.internet.userName()
//         },
//         text: faker.lorem.sentence(),
//         status: 'Unanswered',
//         comments: [
//           {
//             id: faker.random.uuid(),
//             author: {
//               id: faker.random.uuid(),
//               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//               username: faker.internet.userName()
//             },
//             text: faker.lorem.sentence(),
//             comments: [
//               {
//                 id: faker.random.uuid(),
//                 author: {
//                   id: faker.random.uuid(),
//                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                   username: faker.internet.userName()
//                 },
//                 text: faker.lorem.sentence()
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: faker.random.uuid(),
//         author: {
//           id: faker.random.uuid(),
//           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//           username: faker.internet.userName()
//         },
//         text: faker.lorem.sentence(),
//         status: 'Unanswered',
//         comments: [
//           {
//             id: faker.random.uuid(),
//             author: {
//               id: faker.random.uuid(),
//               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//               username: faker.internet.userName()
//             },
//             text: faker.lorem.sentence(),
//             comments: [
//               {
//                 id: faker.random.uuid(),
//                 author: {
//                   id: faker.random.uuid(),
//                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                   username: faker.internet.userName()
//                 },
//                 text: faker.lorem.sentence()
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: faker.random.uuid(),
//     name: faker.company.companyName(),
//     feedback: [
//       {
//         id: faker.random.uuid(),
//         author: {
//           id: faker.random.uuid(),
//           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//           username: faker.internet.userName()
//         },
//         text: faker.lorem.sentence(),
//         status: 'Unanswered',
//         comments: [
//           {
//             id: faker.random.uuid(),
//             author: {
//               id: faker.random.uuid(),
//               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//               username: faker.internet.userName()
//             },
//             text: faker.lorem.sentence(),
//             comments: [
//               {
//                 id: faker.random.uuid(),
//                 author: {
//                   id: faker.random.uuid(),
//                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                   username: faker.internet.userName()
//                 },
//                 text: faker.lorem.sentence()
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: faker.random.uuid(),
//         author: {
//           id: faker.random.uuid(),
//           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//           username: faker.internet.userName()
//         },
//         text: faker.lorem.sentence(),
//         status: 'Unanswered',
//         comments: [
//           {
//             id: faker.random.uuid(),
//             author: {
//               id: faker.random.uuid(),
//               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//               username: faker.internet.userName()
//             },
//             text: faker.lorem.sentence(),
//             comments: [
//               {
//                 id: faker.random.uuid(),
//                 author: {
//                   id: faker.random.uuid(),
//                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                   username: faker.internet.userName()
//                 },
//                 text: faker.lorem.sentence()
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: faker.random.uuid(),
//         author: {
//           id: faker.random.uuid(),
//           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//           username: faker.internet.userName()
//         },
//         text: faker.lorem.sentence(),
//         status: 'Unanswered',
//         comments: [
//           {
//             id: faker.random.uuid(),
//             author: {
//               id: faker.random.uuid(),
//               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//               username: faker.internet.userName()
//             },
//             text: faker.lorem.sentence(),
//             comments: [
//               {
//                 id: faker.random.uuid(),
//                 author: {
//                   id: faker.random.uuid(),
//                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                   username: faker.internet.userName()
//                 },
//                 text: faker.lorem.sentence()
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   },
//   {
//     id: faker.random.uuid(),
//     name: faker.company.companyName(),
//     feedback: [
//       {
//         id: faker.random.uuid(),
//         author: {
//           id: faker.random.uuid(),
//           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//           username: faker.internet.userName()
//         },
//         text: faker.lorem.sentence(),
//         status: 'Unanswered',
//         comments: [
//           {
//             id: faker.random.uuid(),
//             author: {
//               id: faker.random.uuid(),
//               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//               username: faker.internet.userName()
//             },
//             text: faker.lorem.sentence(),
//             comments: [
//               {
//                 id: faker.random.uuid(),
//                 author: {
//                   id: faker.random.uuid(),
//                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                   username: faker.internet.userName()
//                 },
//                 text: faker.lorem.sentence()
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: faker.random.uuid(),
//         author: {
//           id: faker.random.uuid(),
//           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//           username: faker.internet.userName()
//         },
//         text: faker.lorem.sentence(),
//         status: 'Unanswered',
//         comments: [
//           {
//             id: faker.random.uuid(),
//             author: {
//               id: faker.random.uuid(),
//               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//               username: faker.internet.userName()
//             },
//             text: faker.lorem.sentence(),
//             comments: [
//               {
//                 id: faker.random.uuid(),
//                 author: {
//                   id: faker.random.uuid(),
//                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                   username: faker.internet.userName()
//                 },
//                 text: faker.lorem.sentence()
//               }
//             ]
//           }
//         ]
//       },
//       {
//         id: faker.random.uuid(),
//         author: {
//           id: faker.random.uuid(),
//           name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//           username: faker.internet.userName()
//         },
//         text: faker.lorem.sentence(),
//         status: 'Unanswered',
//         comments: [
//           {
//             id: faker.random.uuid(),
//             author: {
//               id: faker.random.uuid(),
//               name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//               username: faker.internet.userName()
//             },
//             text: faker.lorem.sentence(),
//             comments: [
//               {
//                 id: faker.random.uuid(),
//                 author: {
//                   id: faker.random.uuid(),
//                   name: `${faker.name.firstName()} ${faker.name.lastName()}`,
//                   username: faker.internet.userName()
//                 },
//                 text: faker.lorem.sentence()
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }
// ]
