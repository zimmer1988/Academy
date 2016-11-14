import React from 'react';
import ReactDOM from 'react-dom';
class Parent extends React.Component {
	constructor(){
		super();
		this.state = {
			todo: []
		}
		this.addTodo = this.addTodo.bind(this)
	}
	addTodo(){
		var todoText = document.getElementById('todo').value;
		var arrayOfTodos = this.state.todo;
		arrayOfTodos.push(todoText);
		this.setState({
			todo: arrayOfTodos
		})
		document.getElementById('todo').value =""
	}
	render(){
		return (
			<Child todo={this.state.todo} addTodo={this.addTodo} />
			);
	}
}

class Child extends React.Component {
	render(){
		var todos = <div></div>;
		if(this.props.todo.length){
			todos = [];
			for(var i=0;i<this.props.todo.length;i++){
				todos.push(<div key={this.props.todo[i]}>{this.props.todo[i]}</div>);
			}
		}		
		console.log(todos);
		return(
			<div>
			{todos}
			<input id="todo" />
			<button onClick={this.props.addTodo}>add</button>
			</div>
			);
	}
}

ReactDOM.render(
	<Parent />,
	document.getElementById('app')
	);
