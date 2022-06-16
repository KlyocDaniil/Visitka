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
             </div>
                      <!--Удаление задачи-->
                           <button onclick="deletePost(${index})" class="btn-delete"></button>
            </div>
<!--             <div class ="datePost"  onclick="dateTime()" </div>-->
     </div>
     
            <div class = "dateTime"> ${post.time}</div>
         <div class="descriptionPost"> ${post.description}  </div>
            
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