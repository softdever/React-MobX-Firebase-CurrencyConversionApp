import React from "react"
import { observer } from "mobx-react"
import { Fb } from './firebase-store'


@observer
export default class TodoList extends React.Component {


  constructor(props){

      super(props);

      this.state = { concept : "Initial State",
                    fromCurrency : "USD",
                    toCurrency : "EUR",
                    amountIn : 0,
                    amountOut: 0
      }

  }

    handleSend(){
        this.props.store.createTodo(e.target.value);

    }

    handleConceptChange(e){

        this.setState({ concept: e.target.value})
    }

    handleFrom (e){

        this.setState({fromCurrency : e.target.value})
    }

    handleTo (e){

        this.setState({toCurrency : e.target.value})
    }

  createNew(e){

    if(e.which === 13) {
      //this.props.store.createTodo(e.target.value);
        this.props.store.createTodo(this.state);
      e.target.value = "";
    }
  }
  filter(e){

    this.props.store.filter = e.target.value;
  }

  toggleComplete(todo){

    //todo.todo.complete = !todo.todo.complete;
    this.props.store.update(todo.key, todo.todo);
  }

  delete (){


  }

  componentDidMount(){

    console.log('Im in component did mount');
    console.log(Fb.todos);

  }


  render() {

    const {clearComplete, filter, filteredTodos,  todos, data } = this.props.store; //  { todos : this.props.store}

    // { todos }  --> { todos: ['buymilk', 'buy eggs'] }

    console.log("Data is");
    console.log(data);

    //const todoLis = filteredTodos.map(todo=> (
    const todoLis = data.map(todo=> (

        //<li key={todo.key}>
        //  <input type="checkbox" onChange={this.toggleComplete.bind(this, todo)} value={todo.todo.complete} checked={todo.todo.complete} />
        //  {todo.todo.concept}
        //</li>

        <tr>
            <td>{todo.todo.concept}</td>
            <td>{todo.todo.amountIn}</td>
            <td>{todo.todo.fromCurrency}</td>
            <td>{todo.todo.toCurrency}</td>
            <td>{todo.todo.amountOut} </td>
        </tr>

    ));

      return <div>

          <h1>Currency Conversion</h1>


          <div className="spaceHor">
              <span>Concept : </span><span><input value={this.state.concept} onChange={this.handleConceptChange.bind(this)}  className='conceptInput' type="text"/></span>
          </div>
      <span className='space' >From :
          <select value={this.state.fromCurrency} onChange={this.handleFrom.bind(this)} name="" id="">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="MXN">MXN</option>
              <option value="INR">INR</option>
          </select>
      </span>
      <span value={this.state.toCurrency} onChange={this.handleTo.bind(this)} className='space'>To :
          <select name="" id="">
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="MXN">MXN</option>
              <option value="INR">CAD</option>
          </select>
      </span>

          <span>Enter Amount to Convert : </span>
          <span><input type="text" placeholder='0.00' className='create' onKeyPress={this.createNew.bind(this)}/></span>
          <input type="button" value='Send' onClick={this.handleSend.bind(this)}/>

          <table id='historyTable'>
              <tr className="bold">
                  <th>Concept of transaction</th>
                  <th className='center'>Amount</th>
                  <th>From</th>
                  <th>To</th>
                  <th className='center'>Amount Converted</th>
              </tr>
              {todoLis}

          </table>


      </div>
      console.log({ todoLis});
  }
};
