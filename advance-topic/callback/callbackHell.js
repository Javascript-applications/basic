// function loadScript(path, callback) {
//   let script = document.createElement('script');
//   script.src = path;
//   script.onload = () => callback(null, script);
//   script.onerror = () =>
//     callback(new Error(`Script load error for ${path}`), null);

//   document.head.append(script);
// }

// loadScript('./script1.js', function (error, script) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(`Cool, the script ${script.src} is loaded`);

//     loadScript('./script2.js', function (error, script) {
//       if (error) {
//         console.log(error);
//       } else {
//         console.log(`Cool, the script ${script.src} is loaded`);

//         loadScript('./script3.js', function (error, script) {
//           if (error) {
//             console.log(error);
//           } else {
//             console.log(`Cool, the script ${script.src} is loaded`);
//           }
//         });
//       }
//     });
//   }
// });

// function loadScript(path, callback) {
//   let script = document.createElement('script');
//   script.src = path;
//   script.onload = () => callback(null, script);
//   script.onerror = () => callback(new Error(`script ${path} not loaded`));
//   document.head.append(script);
// }

// loadScript('./script1.js', function (err, script) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(`Cool, the script ${script.src} is loaded`);
//     loadScript('./script2.js', function (err, script) {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(`Cool, the script ${script.src} is loaded`);
//         loadScript('./script3.js', function (err, script) {
//           if (err) {
//             console.log(err);
//           } else {
//             console.log(`Cool, the script ${script.src} is loaded`);
//           }
//         });
//       }
//     });
//   }
// });

// console.log('loading..');
