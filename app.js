const http = new easyHTTP;

// //get posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (error, posts){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(posts);
//   }

// });


// //GET single posts

// http.get('https://jsonplaceholder.typicode.com/posts/1', function (error, post){
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(post);
//   }

// });

//Create data

const data = {
  title: 'Custom Post',
  body : 'This is a custom post nna'
};

//Create Post for POST request
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (error, post) {
//   if (error) {
//         console.log(error);
//       } else {
//         console.log(post);
//       }
// }); 

// UPDATE POST

// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (error, post) {
//     if (error) {
//         console.log(error);
//       } else {
//         console.log(post);
//       }
// });

//DELETE POST

http.delete('https://jsonplaceholder.typicode.com/posts/1', function (error, response){
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }

});