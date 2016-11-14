import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			red: 0,
			green: 0,
			blue: 0
		}
		this.update = this.update.bind(this)
	}
	update(e) {
		this.setState({
			red: ReactDOM.findDOMNode(this.refs.red).value,
			green: ReactDOM.findDOMNode(this.refs.green).value,
			blue: ReactDOM.findDOMNode(this.refs.blue).value
		})
	}
	render(){
		return (
			<div>
			<Slider ref="red" update={this.update} />
			{this.state.red}
			<br />
			<Slider ref="green" update={this.update} />
			{this.state.green}
			<br />
			<Slider ref="blue" update={this.update} />
			{this.state.blue}
			<br />
			</div>
		);
	}
}

App.propTypes = {
	txt: React.PropTypes.string, 
	cat: React.PropTypes.number.isRequired
}

// App.defaultProps = {
// 	txt: 'this is the default txt'
// }

class Slider extends React.Component {
	render() {
		return (
			<input type="range"
			min="0" 
			max="255" 
			onChange={this.props.update} />
		);
	}
}

// class SecondApp extends React.Component {
// 	render() {
// 		return <Button> <Heart /> React</Button>
// 	}
// }
// class Button extends React.Component {
// 	render() {
// 		return <button>{this.props.children}</button>
// 	}
// }

// const Heart = () => <span className="glyphicon glyphicon-heart"></span>

let Mixin = InnerComponent => class extends React.Component {
	constructor() {
		super();
		this.state = {
			val: 0
		};
		this.update = this.update.bind(this);
	}
	update(){
		this.setState({
			val: this.state.val + 1
		})
	}
	componentWillMount(){
	 	console.log('will mount');
	 }
	 render(){
	 	return(
			<InnerComponent update={this.update}
			{...this.state}
			{...this.props} />
	 	);
	 }
	componentDidMount(){
	 	console.log('mounted')
	}
}

const Button = (props) => <button 
														onClick={props.update}>
														{props.txt} - {props.val}
													</button>
const Label = (props) => <label 
														onMouseMove={props.update}>
														{props.txt} - {props.val}
													</label>

let ButtonMixed = Mixin(Button)
let LabelMixed = Mixin(Label)

class ThirdApp extends React.Component {
	
	render() {
		return (
			<div>
				<ButtonMixed txt="button" />
				<LabelMixed txt="label" />
			</div>
		);
	}
	
	// componentWillMount(){
	// 	this.setState({
	// 		m: 2
	// 	})
	// }
	// componentDidMount(){
	// 	this.inc = setInterval(this.update, 500)
	// }
	// componentWillUnmount(){
	// 	clearInterval(this.inc)
	// }
	// componentWillReceiveProps(nextProps){
	// 	this.setState({increasing: nextProps.val > this.props.val})
	// }
	// shouldComponentUpdate(nextProps, nextState){
	// 	return nextProps.val % 5 === 0;
	// }
	// componentDidUpdate(prevProps, prevState){
	// 	console.log('prevProps', prevProps);
	// }
}
ThirdApp.defaultProps = {txt: 'button'}


ReactDOM.render(
	<ThirdApp />,
	document.getElementById('third-app')
)

ReactDOM.render(
	<App cat={5} />,
	document.getElementById('app')
)
// ReactDOM.render(
// 	<SecondApp />,
// 	document.getElementById('second-app')
// )

