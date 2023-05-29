class Pizza{
    name;
    ingredient1;
    ingredient2;
    ingredient3;
    
    constructor(name, ingredient1, ingredient2, ingredient3){
        this.name = name;
        this.ingredient1 = ingredient1;
        this.ingredient2 = ingredient2;
        this.ingredient3 = ingredient3;
    }
    
    get name(){
        return this.name;
    }
    
    get ingredient1(){
        return this.ingredient1;
    }
    
    get ingredient2(){
        return this.ingredient2;
    }
    
    get ingredient3(){
        return this.ingredient3;
    }
    
    set name(name){
        this.name = name;
    }
    
    set ingredient1(ingredient){
        this.ingredient1 = ingredient;
    }
    
    set ingredient2(ingredient){
        this.ingredient2 = ingredient;
    }
    
    set ingredient3(ingredient){
        this.ingredient3 = ingredient;
    }
}

export {Pizza};