// fetch('simdata.json')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Work with your JSON data here
//     console.log(data);
//   })
//   .catch(error => {
//     console.error('There was a problem with your fetch operation:', error);
//   });
data = fetch('simdata.json')
console.log(data)
