const addNews = document.getElementById('addNews')
const infoAboutNews = document.getElementById('textNews')
const newsAll = document.getElementById('AllNews')

let posts;
!localStorage.posts ? posts = [] : posts = JSON.parse(localStorage.getItem('posts'))

let newsItemElements = []

function Post(description){
    this.description = description

}
const createPost = (post,index) => {
 return`
 <div class = "post_item">
 
         <div class="descriptionPost"> ${post.description}</div>
     
     
            <div class="buttons">
            
                      <!--Удаление задачи-->
                           <button onclick="deletePost(${index})" class="btn-delete">×</button>
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
document.getElementById("checkNewsForm").onsubmit = function (){
    return false
}