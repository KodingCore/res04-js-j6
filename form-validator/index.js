import {CreateUser} from "./createUser.js";

const main = document.querySelector("main");

let userUl;
const addNewListBtn = document.querySelector("#add-new-user");
const modalAddUser = document.querySelector("#modal-add-user");
const validModalAdd = document.querySelector("#valide-new-user");

const inputFName = modalAddUser.querySelector("#input-fname");
const inputLName = modalAddUser.querySelector("#input-lname");
const inputNName = modalAddUser.querySelector("#input-nname");
const inputEmail = modalAddUser.querySelector("#input-email");
const inputPswrd1 = modalAddUser.querySelector("#input-pswrd1");
const inputPswrd2 = modalAddUser.querySelector("#input-pswrd2");
const inputBiog = modalAddUser.querySelector("#input-biog");


let tabUsers = [];


window.addEventListener("DOMContentLoaded", function(){

    btnListener();
    
})
let user;
function btnListener(){
    
    
    addNewListBtn.addEventListener("click", function(){
        console.log("hello");
        modalAddUser.style.display = "flex";
    })
    modalAddUser.addEventListener("submit", function(event){
        event.preventDefault();
        if(inputPswrd1.value != inputPswrd2.value){
            alert("la confirmation du mot de pass est érronnée");
        }else{
            user = new CreateUser(inputFName.value, inputLName.value, inputNName.value, inputEmail.value, inputPswrd1.value, inputPswrd2.value, inputBiog.value);
            tabUsers.push(user);
            displayNewlist();
        }
    })
}

function resetInputs(){
    let inputs = document.querySelectorAll("input");
    
    for(let input of inputs){
        if(input != validModalAdd){
            input.value = "";
        }
    }
}

function displayNewlist(){

        userUl = document.createElement("ul");
        userUl.classList.add("tab");
        main.appendChild(userUl);
        if(tabUsers.length%2 === 0){
            userUl.style.gridColumnStart = "3";
        }
        
        for(let i=0; i < 7; i++){
            let newLi = document.createElement("li");
            newLi.style.marginBottom = "0.5rem";
            userUl.appendChild(newLi);
            if(i === 0){
                newLi.textContent = "Pseudo: " + user.nName;
                newLi.style.fontSize = "1.5rem";
                newLi.style.textDecoration = "underline";
            }else if(i === 1){
                newLi.textContent = "Nom: " + user.fName;
            }else if(i === 2){
                newLi.textContent = "Prénom: " + user.lName;
            }else if(i === 3){
                newLi.textContent = "Email: " + user.email;
            }else if(i === 4){
                newLi.textContent = "MDP: " + user.pswrd1;
            }else if(i === 5){
                newLi.textContent = "MDP conf: " + user.pswrd2;
            }else if(i === 6){
                newLi.textContent = "Bio: " + user.biog;
            }
        }
    resetInputs();
    modalAddUser.style.display = "none";
}