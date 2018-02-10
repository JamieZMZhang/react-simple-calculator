import React from 'react';
import Display from './../components/Display';
import KeyBoard from './../components/KeyBoard';

export default class Calculator extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
		};
	}

	makeInputCallBack() {
		return key => {
			let value = this.state.value;
			if (typeof value === 'string') {
				value += key;
			} else {
				value = key;
			}
			if (key === '=') {
				value = this.calc(value);
			}
			this.setState({ value });
		};
	}

	calc(expString) {
		const operations = {
			'+': (a, b) => a + b,
			'-': (a, b) => a - b,
			'*': (a, b) => a * b,
			'/': (a, b) => a / b,
		};
		let numA = 0;
		let buffer = 0;
		let op = '+';
		for (let c of expString) {
			if (c >= '0' && c <= '9') {
				buffer = buffer * 10 + parseInt(c, 10);
			} else {
				numA = operations[op](numA, buffer);
				op = c;
				buffer = 0;
			}
		}
		return Math.floor(numA);
	}

	render() {
		return (
			<div className="Calculator">
				<Display value={this.state.value} />
				<KeyBoard onInput={this.makeInputCallBack()} />
			</div>
		);
	}
}
