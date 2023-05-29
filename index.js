// import {Pizza} from "./pizza.js";
import {ToDoList} from "./toDoList.js";

const main = document.querySelector("main");

let toDoListUl;
const addNewListBtn = document.querySelector("#add-new-list");
const modalAddList = document.querySelector("#modal-add-list");
const validModalAdd = document.querySelector("#valide-new-list");

const inputName = modalAddList.querySelector("#input-name");
const inputTache1 = modalAddList.querySelector("#input-tache1");
const inputTache2 = modalAddList.querySelector("#input-tache2");
const inputTache3 = modalAddList.querySelector("#input-tache3");
const inputTache4 = modalAddList.querySelector("#input-tache4");
const inputTache5 = modalAddList.querySelector("#input-tache5");

let toDoList;
let tabToDoLists = [];


window.addEventListener("DOMContentLoaded", function(){
    // const veggie = new Pizza("Veggie", "tomate", "fromage", "légumes");
    // const meattie = new Pizza("Meattie", "tomate", "fromage", "viande");
    // const fishie = new Pizza("Fishie", "tomate", "fromage", "poisson");
    
    // console.log("La pizza " + veggie.name + " est composé de " + veggie.ingredient1 + ", de " + veggie.ingredient2 + ", et de " + veggie.ingredient3);
    // console.log("La pizza " + meattie.name + " est composé de " + meattie.ingredient1 + ", de " + meattie.ingredient2 + ", et de " + meattie.ingredient3);
    // console.log("La pizza " + fishie.name + " est composé de " + fishie.ingredient1 + ", de " + fishie.ingredient2 + ", et de " + fishie.ingredient3);
    
    btnListener();
    
})

function btnListener(){
    addNewListBtn.addEventListener("click", function(){
        modalAddList.style.display = "flex";
    })
    validModalAdd.addEventListener("click", function(){
        if(inputName.value != "" && inputTache1.value != "" && inputTache2.value != "" && inputTache3.value != "" && inputTache4.value != "" && inputTache5.value != ""){
            toDoList = new ToDoList(inputName.value, inputTache1.value, inputTache2.value, inputTache3.value, inputTache4.value, inputTache5.value);
            displayNewlist();
            modalAddList.style.display = "none";
        }else{
            alert("Vous devez remplir tout les champs!");
        }
    })
}



function displayNewlist(){
    
    toDoListUl = document.createElement("ul");
    toDoListUl.classList.add("tab");
    main.appendChild(toDoListUl);

        for(let i=0; i < 6; i++){
            let newLi = document.createElement("li");
            newLi.style.marginBottom = "0.5rem";
            toDoListUl.appendChild(newLi);
          if(i === 0){
              newLi.textContent = toDoList.listName;
              newLi.style.fontSize = "1.5rem";
          }else if(i === 1){
              newLi.textContent = toDoList.tache1;
          }else if(i === 2){
              newLi.textContent = toDoList.tache2;
          }else if(i === 3){
              newLi.textContent = toDoList.tache3;
          }else if(i === 4){
              newLi.textContent = toDoList.tache4;
          }else if(i === 5){
              newLi.textContent = toDoList.tache5;
          }
        }
}