//рекурсия url до 5 щтук
// const fetchUrl = url =>{
//   let count = 0;
//   console.log('fetchUrl');
//   return new Promise((resolve, reject)=>{
//       let reset = url =>{
//           fetch(url)
//               .then(res => {
//                   if (res.ok) {
//                       console.log('i am res.ok')
//                       return resolve(res)
//                   }else{
//                       console.log('i am bad')
//                       return reject(res)
//                   }})
//               .catch((reject)=>{
//                   console.log(reject)
//                   count<7?reset(url):Promise.reject();
//                   count++;
//                   console.log('misstake count',count)
//               })
//       }
//       console.log('i am before reset first')
//       reset(url)
//   })

// }


export const getItemsWithDelay = data => new Promise((resolve, reject) => {

  setTimeout(() => {
    // переведёт промис в состояние fulfilled с результатом "result"
    resolve(data);
  }, 1000);
});

