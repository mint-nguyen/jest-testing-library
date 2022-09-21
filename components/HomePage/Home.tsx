import { Component } from "react";

interface MyState {
	counter: number;
	counterBelowZero: boolean;
}
class HomePage extends Component<{}, MyState> {
	constructor(props: any) {
		super(props);
		this.state = {
			counter: 0,
			counterBelowZero: false,
		};
	}

	onClickCounter = () => {
		this.setState({ counterBelowZero: false });
		this.setState({ counter: this.state.counter + 1 });
	};

	onClickDeCounter = () => {
		this.state.counter == 0
			? this.setState({ counterBelowZero: true })
			: this.setState({ counter: this.state.counter - 1 });
	};

	render() {
		console.log(this.state.counter);
		return (
			<div style={{ textAlign: "center" }} data-test="component-home">
				<h1 data-test="counter-display">The counter is {this.state.counter}</h1>
				{this.state.counterBelowZero && (
					<h2 style={{ color: "red" }}>Counter cannot be under 0</h2>
				)}
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
