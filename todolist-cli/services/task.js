export default class Task {
    id;
    name;
    #complete;

    constructor(id, name, complete = false){
        this.id = id;
        this.name = name;
        this.complete = complete;
    }

    changeStatus(){
        this.complete = !this.complete;
    }

}