//variables for source
let source = 'google-news-in';
let apiKey = '075bad24985645559a89ea892f8c9cba';

//grabbing the div
const newsAccordian = document.getElementById('newsAccordian');

//create get request
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

//function to perform on load
xhr.onload = function() {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText)
    let articles = json.articles;
    console.log(articles);
    let newsHTML = '';
    articles.forEach(function(element, index) {
      let news = `
             <div class="card">
                     <div class="card-header" id="heading${index}">
                       <h2 class="mb-0">
                         <button class="btn btn-link collapsed btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
                         <b>Breaking News ${index+1}:</b>
                           ${element.title }
                         </button>
                       </h2>
                     </div>
                     <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordian">
                       <div class="card-body">
                         ${element.description}.<a href="${element.url}" target='_blank'>Read more here</a>
                       </div>
                     </div>
                   </div>`
      newsHTML += news;

    })


    newsAccordian.innerHTML = newsHTML;
  } else {
    console.log('error')
  }
}
xhr.send();