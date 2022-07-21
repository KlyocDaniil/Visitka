const newName = document.getElementById('getNewFirstName')
const newLastName = document.getElementById('getNewLastName')

function printNewUserName(){

document.getElementById('nameChel').innerHTML = newName.value +  ' ' +newLastName.value

}

document.getElementById("CheckForm").onsubmit = function (){
    return false
}