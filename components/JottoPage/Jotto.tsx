import { Component } from "react";

interface MyState {
	guessedWord: string;
	showGuessedWordTable: boolean;
	wordFound: boolean;
}

type guessedWordType = { guessedWord: string; matchingLetters: number };

const CountMatchingLetters = (word1: any, word2: any) => {
	let count = 0;

	for (let i in word1) {
		word2.includes(word1[i]) ? count++ : false;
	}

	return count;
};

class JottoPage extends Component<{}, MyState> {
	constructor(props: any) {
		super(props);
		this.state = {
			guessedWord: "",
			showGuessedWordTable: false,
			wordFound: false,
		};
	}

	secretWord = "Confidential";

	guessedWordsTable: guessedWordType[] = [];

	onChangeInput = (e: any) => this.setState({ guessedWord: e.target.value });

	onClickButton = () => {
		this.setState({ showGuessedWordTable: true });
		this.secretWord == this.state.guessedWord
			? this.setState({ wordFound: true })
			: false;
		this.guessedWordsTable.push({
			guessedWord: this.state.guessedWord,
			matchingLetters: CountMatchingLetters(
				this.secretWord,
				this.state.guessedWord
			),
		});
		this.setState({ guessedWord: "" });
	};

	render() {
		console.log(this.state.guessedWord);
		return (
			<div>
				<h1>Jotto</h1>
				<input value={this.state.guessedWord} onChange={this.onChangeInput} />
				<button onClick={this.onClickButton}>Guess</button>
				<p>Try to guess the secret word</p>
				{this.state.wordFound && (
					<h3 style={{ color: "green" }} data-test="congrats-msg">
						Congrats, you found the secret word: {this.secretWord}
					</h3>
				)}
				{this.state.showGuessedWordTable && (
					<table style={{ display: "inline-table", width: 500 }}>
						<thead>
							<tr>
								<td>
									<h4>Guessed Word</h4>
								</td>
								<td>
									<h4>Matching Letters</h4>
								</td>
							</tr>
						</thead>
						<tbody>
							{this.guessedWordsTable.map((row) => (
								<tr key={row.guessedWord}>
									<td>{row.guessedWord}</td>
									<td>{row.matchingLetters}</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		);
	}
}

export default JottoPage;
