

import { computed, autorun, observable, map } from "mobx";
import {Fb} from './firebase-store.js';



class Todo {

    //@observable value;
    //@observable id;
    //@observable complete;
    @observable concept;
    @observable amountIn;
    @observable amountOut;
    @observable fromCurrency;
    @observable toCurrency;
    //@observable date;

    constructor(value) {
        //this.value = value;
        //this.id = Date.now();
        //this.complete = false;

        this.concept = value.concept;
        this.amountIn = value.amountIn;
        this.amountOut = value.amountOut;
        this.fromCurrency = value.fromCurrency;
        this.toCurrency = value.toCurrency;
        //this.date = date;
    }
}


class TodoStore {

    @observable todos = [];
    //@observable todos = map({});
    @observable data = [];
    //data = [];


    constructor(){

        //Fb.todos.on("value", (snapshot) => {
        //
        //    this.data = snapshot.val();
        //})
        //let data = [];
        var that = this;

        Fb.todos.on("value", (snapshot) => {

            that.data = [];
            console.log("on value is triggered");
            snapshot.forEach((todo) =>{

                that.data.push({key: todo.key, todo: todo.val()})
            });

            that.data = that.data.slice();
            //console.log(that.data);
            //this.data = snapshot.val();
        })
    }


    @observable filter = "";
    @computed get filteredTodos(){

        var matchesFiltered = new RegExp(this.filter, "i");
        return this.todos.filter(todo=> !this.filter || matchesFiltered.test(todo.value))
    }

    createTodo(value){

        var val = new Todo(value);

        this.todos.push(val);

        Fb.todos.push(val);


        //console.log(value);
        //const id = Fb.todos.push().key;
        //this.update(id, val);

    }

    update = (id, data)=>{

      Fb.todos.update({[id]: {data}});
    };

    del = (id) =>{

        Fb.todos.child(id).remove();

    };

    clearComplete = ()=>{

        const incompleteTodos = this.todos.filter(todo => !todo.complete);
        this.todos.replace(incompleteTodos);
    }
}

var store = window.store = new TodoStore;

export default store;
