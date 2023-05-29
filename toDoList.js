class ToDoList{
    listName;
    tache1;
    tache2;
    tache3;
    tache4;
    tache5;
    
    constructor(listName, tache1, tache2, tache3, tache4, tache5){
        this.listName = listName;
        this.tache1 = tache1;
        this.tache2 = tache2;
        this.tache3 = tache3;
        this.tache4 = tache4;
        this.tache5 = tache5;
    }
    
    get listName(){
        return this.listName;
    }
    
    get tache1(){
        return this.tache1;
    }
    
    get tache2(){
        return this.tache2;
    }
    
    get tache3(){
        return this.tache3;
    }
    
    get tache4(){
        return this.tache4;
    }
    
    get tache5(){
        return this.tache5;
    }
    
    set listName(name){
        this.list = name;
    }
    
    set tache1(tache){
        this.tache1 = tache;
    }
    
    set tache2(tache){
        this.tache2 = tache;
    }
    
    set tache3(tache){
        this.tache3 = tache;
    }
    
    set tache4(tache){
        this.tache4 = tache;
    }
    
    set tache5(tache){
        this.tache5 = tache;
    }
    
}

export {ToDoList};