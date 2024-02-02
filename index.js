// DONT FORGET TO TAKE OUT THE API KEY!!!!!!!

let breakingImg = document.querySelector('#breakingImg')
let breakingNews_title = document.querySelector('#breakingNews .title')
let breakingNews_description = document.querySelector('#breakingNews .description')
let topNews = document.querySelector('.topNews')
let sportsNews = document.querySelector('#sportsNews .newsBox')
let businessNews = document.querySelector('#businessNews .newsBox')
let techNews = document.querySelector('#techNews .newsBox')

let header = document.querySelector('.header')
let toggleMenu = document.querySelector('.bar')
let menu = document.querySelector('nav ul')


const toggle = (e)=>{
    toggleMenu.classList.toggle('active')
    menu.classList.toggle('activeMenu')
}
toggleMenu.addEventListener('click',toggle)


// making the header sticky
window.addEventListener('scroll',()=>{
    if(window.scrollY>50){
        header.classList.add('sticky')
    }
    else{
        header.classList.remove('sticky')
    }
})


 


// getting news data from a news API 
const api_url = "64cf3ca8db12427bb12ae8e0731ab632"

// look at 33 minutes of the vide if this doesnt work 
const fetchData = async (category,pageSize)=>{
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&pageSize=${pageSize}&apiKey=${api_url}`
    const data = await fetch(url)
    const response = await data.json()
    console.log(response);
    return response.articles
}     
// fetchData('general',5)

// adding breaking news 
const add_breakingNews = (data)=>{
    breakingImg.innerHTML = `<img src=${data[0].urlToImage} alt="image">`
    breakingNews_title.innerHTML = `<a href=${data[0].url} target="_blank"><h2>${data[0].title}</h2></a>`
    breakingNews_description.innerHTML = `<p>${data[0].description}</p>`
}
fetchData('general',5).then(add_breakingNews)

const add_topNews = (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if(element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100)+'...'
        }

        html += `<div class="news">
                    <div class="img">
                        <img src="${element.urlToImage}" alt="image">
                    </div>
                    <div class="text">
                            <div class="title">
                            <a href="${element.url} target="_blank""><p>${title}</p></a>
                            </div>
                    </div>
                </div>`
    })
    topNews.innerHTML = html
}
fetchData('general',20).then(add_topNews)


// ADDING SPorts nEWS
const add_sportsNews = (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if(element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100)+'...'
        }

        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${element.urlToImage}" alt="image">
                    </div>
                    <div class="text">
                            <div class="title">
                            <a href="${element.url} target="_blank""><p>${title}</p></a>
                            </div>
                    </div>
                </div>`
    })
    sportsNews.innerHTML = html
}
fetchData('sports',5).then(add_sportsNews)

// ADDING BUSINESS NEWS
const add_businessNews = (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if(element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100)+'...'
        }

        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${element.urlToImage}" alt="image">
                    </div>
                    <div class="text">
                            <div class="title">
                            <a href="${element.url} target="_blank""><p>${title}</p></a>
                            </div>
                    </div>
                </div>`
    })
    businessNews.innerHTML = html
}
fetchData('business',5).then(add_businessNews)

// ADDING TECH NEWS
const add_techNews = (data)=>{
    let html = ''
    let title = ''
    data.forEach((element)=>{
        if(element.title.length<100){
            title = element.title
        }
        else{
            title = element.title.slice(0,100)+'...'
        }

        html += `<div class="newsCard">
                    <div class="img">
                        <img src="${element.urlToImage}" alt="image">
                    </div>
                    <div class="text">
                            <div class="title">
                            <a href="${element.url} target="_blank""><p>${title}</p></a>
                            </div>
                    </div>
                </div>`
    })
    techNews.innerHTML = html
}
fetchData('technology',5).then(add_techNews)