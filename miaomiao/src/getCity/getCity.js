// import axios from 'axios';

// const $http = axios.create({
//     baseURL: 'http://39.97.33.178/api/',
//     timeout: 3000,
//     headers: { 'X-Custom-Header': 'foobar' }
// });


// // function getTopics(options) {
// //     // 处理默认参数
// //     var newOptions = Object.assign({
// //         // 默认参数
// //         tab: 'all',
// //         page: 1,
// //         limit: 20
// //     }, options)

// //     // 返回 axios 对象    
// //     return $http({
// //         // 请求的路径  拼接到 上面  base url
// //         url: '/topics',
// //         // 发送请求方法
// //         method: 'get', // default get 
// //         // 参数
// //         params: newOptions
// //     })
// // }


// function getCity(citys) {
//     return $http({
//         // 请求的路径  拼接到 上面  base url
//         url: '/cityList',
//         // 发送请求方法
//         method: 'get', // default get 
//         // 参数
//         params: {
//             citys: 'nm',
//         }
//     })
// }

// export { getCity }