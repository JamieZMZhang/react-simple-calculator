import React from 'react';
import propTypes from 'prop-types';

export default class KeyButton extends React.PureComponent {
	_onClick() {
		this.props.onInput(this.props.keyValue);
	}

	_calcStyle() {
		let { width } = this.props;
		width = width || 1;
		return {
			width: 40 * width + 10 * (width - 1) + 'px',
		};
	}

	render() {
		return (
			<button onClick={() => this._onClick()} style={this._calcStyle()}>
				{this.props.keyValue}
			</button>
		);
	}
}

KeyButton.propTypes = {
	keyValue: propTypes.string.isRequired,
	onInput: propTypes.func.isRequired,
	width: propTypes.number,
};
