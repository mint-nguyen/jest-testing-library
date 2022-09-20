import { Component } from "react";

class HomePage extends Component<{}, { counter: number }> {
	constructor(props: any) {
		super(props);
		this.state = {
			counter: 0,
		};
	}

	onClickCounter = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	onClickDeCounter = () => {
		this.setState({ counter: this.state.counter - 1 });
	};

	render() {
		console.log(this.state.counter);
		return (
			<div style={{ textAlign: "center" }} data-test="component-home">
				<h1 data-test="counter-display">The count is {this.state.counter}</h1>
				<button data-test="increment-button" onClick={this.onClickCounter}>
					Increment counter
				</button>
				<button data-test="decrement-button" onClick={this.onClickDeCounter}>
					Decrement counter
				</button>
			</div>
		);
	}
}

export default HomePage;
