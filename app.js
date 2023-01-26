const apiUrl = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'

const imgPath = 'https://image.tmdb.org/t/p/w1280'

const searchApi = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='

const mainEl = document.querySelector('.main-container')

async function apiFun(url){
 const res = await fetch(url)
 const data = await res.json()
 console.log(data)
  showMovies(data.results)
}


function showMovies(movies){
  mainEl.textContent= " ";
  movies.forEach((item)=>{
     const box = document.createElement('div')
     box.classList.add('container')
     box.innerHTML = ` <img src="${imgPath + item.poster_path}" alt="">
       <div class="info">
         <p class="m-name">${item.original_title}</p>
         <p class="rating">${item.vote_average}</p>
     </div>`
     mainEl.appendChild(box)
    
  })
}

document.querySelector('.input').addEventListener('keyup', (e) =>{
  e.preventDefault()
  if(e.target.value != ''){
    apiFun(searchApi + e.target.value)
   }else{
    apiFun(apiUrl)
   }
  }
)

apiFun(apiUrl)
