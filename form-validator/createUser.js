class CreateUser{
    fName;
    lName;
    nName;
    email;
    pswrd1;
    pswrd2;
    biog;
    
    constructor(fName, lName, nName, email, pswrd1, pswrd2, biog = null){
        this.fName = fName;
        this.lName = lName;
        this.nName = nName;
        this.email = email;
        this.pswrd1 = pswrd1;
        this.pswrd2 = pswrd2;
        this.biog = biog;
    }
    
    get fName(){
        return this.fName;
    }
    
    get lName(){
        return this.lName;
    }
    
    get nName(){
        return this.nName;
    }
    
    get email(){
        return this.email;
    }
    
    get pswrd1(){
        return this.pswrd1;
    }
    
    get pswrd2(){
        return this.pswrd2;
    }
    
    get biog(){
        return this.biog;
    }
    
    set fName(name){
        this.fName = name;
    }
    
    set lName(tache){
        this.lName = tache;
    }
    
    set nName(tache){
        this.nName = tache;
    }
    
    set email(tache){
        this.email = tache;
    }
    
    set pswrd1(tache){
        this.pswrd1 = tache;
    }
    
    set pswrd2(tache){
        this.pswrd2 = tache;
    }
    
    set biog(tache){
        this.biog = tache;
    }
    
}

export {CreateUser};