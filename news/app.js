// function fetchData(callBack) {
//   fetch("https://newsdata.io/api/1/news?apikey=pub_11480f047e5036992a9345d9df8e3ce014665&q=geo%20news")
//       .then((res) => res.json())
//       .then((res) => {
//           callBack(res);
//       })
//       .catch((err) => {
//           console.log("Error==>", err);
//       });
// }
// function foo(data) {
//   console.log(data);
//   let array = data.results
//   console.log(array)
// }
// fetchData(foo)

// fetch('https://newsdata.io/api/1/news?apikey=pub_1146132735a4f7785925c437d83aa44f809c5&q=geo%20news')
//     .then(response => response.json())
//     .then(response => console.log(response))
//  .catch(err => console.error(err));
// var getDic = document.getElementById('div')
// const getData = new Promise((resolve, reject) => {
//   fetch(
//     "https://newsdata.io/api/1/news?apikey=pub_1146132735a4f7785925c437d83aa44f809c5&q=geo%20news"
//   )
//     .then((res) => res.json())
//     .then((res) => resolve(res))
//     .catch((err) => reject(err));
// });

// getData.then((res) => console.log(res));
var div = document.getElementById("div")
fetch("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=804a9d32ff5349bfb27a32f35e38bd67")
  .then((res) => res.json())
  .then((res) => {
    console.log(res)
    let array = res.articles
    console.log(array)
    let title = []
    array.forEach(element => {
      // console.log(element['title'])
      let news = `
          <div class="div">
          <div class="data">
          
         <div class="api_img"> <img src=${element['urlToImage']}/></div>
      <div class="para"> <P> ${element[`title`]}</P>
      <P>${element[`description`]}</p>
      <a href="${element[`url`]}">seee more</a>
      
      </div> 
          
          </div>

          
          </div>
          `
      title += news
    });
    div.innerHTML = title

  })
  .catch((err) => {
    console.log("Error==>", err);
  });

