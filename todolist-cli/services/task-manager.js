import { readData, writeData } from "../utils/readfiles.js";
import Task from "./task.js";

export default class TaskManager {
    constructor(filepath){
        this.filepath = filepath;
        this.data = readData(filepath).map((t) =>
            t = new Task(t.id, t.name, t.complete)
        )
    }

    addTask(name){
        const id = Date.now().toString().slice(-6);
        const task = new Task(id, name, false);
        this.data.push(task);
        this.save()
    }

    removeTask(id){
        this.data = this.data.filter( t => t.id !== String(id));
        this.save()
    }

    listTask(){
        this.data
            .filter( t => t.complete === false)
            .map(t => console.log(`${t.id}, ${t.name}`));
    }

    listComplete(){
        this.data
            .filter( t => t.complete === true)
            .map(t => console.log(`${t.id}, ${t.name}`));
    }

    toggleComplete(id){
        const task = this.data.find( t => t.id === String(id));
        !task ? console.log(`${id} tidak ditemukan`) : task.changeStatus();
        this.save()
    }

    save(){
        writeData(this.filepath, this.data);
    }

}