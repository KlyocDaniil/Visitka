const Name = document.getElementById("NameMember")
const LastName = document.getElementById("LastNameMember")
const About = document.getElementById("AboutMember")

function getName (){
    return (Name.innerHTML)
}
function getLastName (){
    return (LastName.innerHTML)
}
function getInfoAbout (){
    return (About.innerHTML)
}

function FullInfo(nameMem){
    this.nameMem = getName()
    this.lastName = getLastName()
    this.infoabout = getInfoAbout()
}
// let result = location.search.substring(1).split("&")
// let i = 0;
// for (i ;i<result.length; i++){
//     alert(result[i])
// }
