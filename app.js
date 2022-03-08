const article = document.getElementById("card");
const btn = document.getElementById("search");
const result = document.getElementById("result");
const input = document.getElementById("input");
const loader = document.getElementById("preloader");


window.addEventListener("load", function () {
});


const url = 'https://newsapi.org/v2/everything?' +
    'q=Apple&' +
    'from=2022-03-08&' +
    'sortBy=popularity&' +
    'apiKey=ba7013f7062b4c729a73cb9989534c4d';


fetch(url)
    .then(function (res) {
        return res.json();
    })
    .then(function (data) {
        console.log(data.articles);
        article.innerHTML = data.articles.map(el => {
            return `
                <div class="col-12 col-md-6 col-lg-4">
                    <a href="${el.url}">
                    <div class="card shadow border-0">
                        <img src="${el.urlToImage}" class="card-img-top h-50" alt="...">
                        <div class="card-body">
                            <h6 class="card-title">${el.title}</h5>
                            <p class="card-text text-muted">${new Date(el.publishedAt).toDateString()}</p>
                        </div>
                    </div>
                    </a>
                </div>
            `
        }).join("")
    }).finally(e => {
        loader.style.display = "none";
    });



btn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value == "") {
        article.innerHTML = `<p class="display-3 text-danger fw-bold text-center">Not Found</p>`
    }else{
        fetch(`https://newsapi.org/v2/everything?q=${input.value}&from=2022-03-07&to=2022-03-07&sortBy=popularity&apiKey=ba7013f7062b4c729a73cb9989534c4d`)
        .then(function (res) {
            loader.style.display = "flex";
            return res.json();
        })
        .then(function (data) {
            console.log(data.articles);
            article.innerHTML = data.articles.map(el => {
                return `
                <div class="col-12 col-md-6 col-lg-4">
                    <div class="card shadow border-0">
                        <img src="${el.urlToImage}" class="card-img-top h-50" alt="...">
                        <div class="card-body">
                            <h6 class="card-title">${el.title}</h5>
                            <p class="card-text blockquote">${new Date(el.publishedAt).toDateString()}</p>
                        </div>
                    </div>
                </div>
            `
            }).join("")
        }).finally(e => {
            loader.style.display = "none";
        })
    }
    

})



