const addNews = document.getElementById('addNews')
const infoAboutNews = document.getElementById('textNews')
const newsAll = document.getElementById('AllNews')

let posts;
!localStorage.posts ? posts = [] : posts = JSON.parse(localStorage.getItem('posts'))

let newsItemElements = []


 function setDatePost() {
     let date = new Date()
     let options = {
         // era: 'long',
         year: 'numeric',
         month: 'long',
         day: 'numeric',
         // weekday: 'long',
         // timezone: 'UTC',
         hour: 'numeric',
         minute: 'numeric',
         second: 'numeric'
     };
     return (date.toLocaleDateString("ru", options))
     // alert(date.toLocaleDateString("ru", options))
 }
 let nameWhoPosted = document.getElementById("nameChel")

function getName(){
    return (nameWhoPosted.innerHTML)
}
//
// let imgAva = document.getElementById("avaToPost")
//
// function getAvatar(){
//     return(imgAva.innerHTML)
// }

function Post(description){
    this.description = description
    this.time = setDatePost()
    this.name = getName()
    // this.ava = getAvatar()
}


const createPost = (post,index) => {
 return`
 <div class = "post_item">
     <div class="infoAboutPost">
     <div class="PostName_Delete">
             <div class="name_people_who_posted"> ${post.name} </div>
             
             
             <div class="buttons">
             
                      <!--Удаление задачи-->
                          <svg width="27" height="6" viewBox="0 0 27 6" fill="none" xmlns="http://www.w3.org/2000/svg" style="margin-right: 20px; margin-top: 10px">
                                    <circle cx="24.5" cy="3" r="2.5" fill="#1D212C"/>
                                    <circle cx="13.5" cy="3" r="2.5" fill="#1D212C"/>
                                    <circle cx="2.5" cy="3" r="2.5" fill="#1D212C"/>
                                </svg>
                           <button onclick="deletePost(${index})" class="btn-delete"></button>
                           </div>
            </div>
<!--             <div class ="datePost"  onclick="dateTime()" </div>-->
     </div>
     
            <div class = "dateTime"> ${post.time}</div>
         <div class="descriptionPost"> ${post.description}  </div>
         <div class = "LikeAndComment">
         <button id = "LikePostF" class="Button-Like" > 
         <svg id ="like-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.9 1C3.19386 1 1 3.00868 1 5.4864C1 9.97279 6.79091 14.0513 9.90909 15C13.0273 14.0513 18.8182 9.97279 18.8182 5.4864C18.8182 3.00868 16.6243 1 13.9182 1C12.2611 1 10.7955 1.75331 9.90909 2.90631C9.45726 2.31705 8.857 1.83614 8.15914 1.50431C7.46128 1.17248 6.68636 0.999492 5.9 1Z" stroke="#727272" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            </button>
                            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.8708 6.78364C19.1224 4.84759 17.823 3.1733 16.1333 1.96769C14.4437 0.762081 12.4378 0.078001 10.3635 0C8.28933 0.078001 6.28343 0.762081 4.59376 1.96769C2.9041 3.1733 1.60474 4.84759 0.85627 6.78364C0.805722 6.92345 0.805722 7.07655 0.85627 7.21636C1.60474 9.15241 2.9041 10.8267 4.59376 12.0323C6.28343 13.2379 8.28933 13.922 10.3635 14C12.4378 13.922 14.4437 13.2379 16.1333 12.0323C17.823 10.8267 19.1224 9.15241 19.8708 7.21636C19.9214 7.07655 19.9214 6.92345 19.8708 6.78364ZM10.3635 12.7273C6.99082 12.7273 3.42718 10.2264 2.13536 7C3.42718 3.77364 6.99082 1.27273 10.3635 1.27273C13.7363 1.27273 17.2999 3.77364 18.5917 7C17.2999 10.2264 13.7363 12.7273 10.3635 12.7273Z" fill="#727272"/>
                                <path d="M10.3636 3.18164C9.60843 3.18164 8.87022 3.40557 8.24233 3.82512C7.61443 4.24467 7.12504 4.84099 6.83605 5.53867C6.54706 6.23635 6.47145 7.00406 6.61878 7.74471C6.7661 8.48537 7.12975 9.1657 7.66373 9.69969C8.19771 10.2337 8.87805 10.5973 9.6187 10.7446C10.3594 10.892 11.1271 10.8164 11.8247 10.5274C12.5224 10.2384 13.1187 9.74899 13.5383 9.12109C13.9578 8.49319 14.1818 7.75499 14.1818 6.99982C14.1818 5.98718 13.7795 5.01601 13.0635 4.29996C12.3474 3.58391 11.3762 3.18164 10.3636 3.18164ZM10.3636 9.54528C9.86015 9.54528 9.36801 9.39599 8.94942 9.11629C8.53082 8.83659 8.20456 8.43905 8.0119 7.97393C7.81924 7.5088 7.76883 6.997 7.86705 6.50323C7.96527 6.00946 8.2077 5.5559 8.56369 5.19991C8.91967 4.84393 9.37323 4.60149 9.867 4.50328C10.3608 4.40506 10.8726 4.45547 11.3377 4.64813C11.8028 4.84079 12.2004 5.16705 12.4801 5.58564C12.7598 6.00424 12.909 6.49638 12.909 6.99982C12.909 7.67492 12.6409 8.32236 12.1635 8.79973C11.6861 9.2771 11.0387 9.54528 10.3636 9.54528Z" fill="#727272"/>
                            </svg>
          
                            </svg>
                             
                            
</div>
            
 </div>
 `}
    const fillHtmlList = () => {
         newsAll.innerHTML = ""
            if ( posts.length > 0) {
                posts.forEach((item, index) => {
                        newsAll.innerHTML += createPost(item, index)
                })
                newsItemElements = document.querySelector('.post_item')
            }
    }
    fillHtmlList();


    function updateLocalStorage() {
        localStorage.setItem('posts', JSON.stringify(posts))

    }
let buttonLike = document.getElementById("LikePostF"), count = 0;

buttonLike.onclick = function (){
    count+=1
    buttonLike.innerHTML = "Кликов" + count
    fillHtmlList();

}

    addNews.addEventListener('click',()=>{
        posts.push(new Post(infoAboutNews.value))
        updateLocalStorage()
        fillHtmlList()
        infoAboutNews.value = ''
    })
const deletePost = index =>{
        // newsItemElements[index].classList.add('delition')
    // setTimeout(()=>{
        posts.splice(index,1)
        updateLocalStorage()
        fillHtmlList()
    // },500)
}
// function dateTime (){
//     document.write(Date())
// }
document.getElementById("checkNewsForm").onsubmit = function (){
    return false
}