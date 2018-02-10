import React from 'react';
import KeyButton from './KeyButton';
import propTypes from 'prop-types';

export default class KeyBoard extends React.PureComponent {
	static propTypes = {
		onInput: propTypes.func,
	};

	render() {
		return (
			<div className="KeyBoard">
				<div className="row">
					<KeyButton keyValue="7" onInput={this.props.onInput} />
					<KeyButton keyValue="8" onInput={this.props.onInput} />
					<KeyButton keyValue="9" onInput={this.props.onInput} />
					<KeyButton keyValue="/" onInput={this.props.onInput} />
				</div>
				<div className="row">
					<KeyButton keyValue="4" onInput={this.props.onInput} />
					<KeyButton keyValue="5" onInput={this.props.onInput} />
					<KeyButton keyValue="6" onInput={this.props.onInput} />
					<KeyButton keyValue="*" onInput={this.props.onInput} />
				</div>
				<div className="row">
					<KeyButton keyValue="1" onInput={this.props.onInput} />
					<KeyButton keyValue="2" onInput={this.props.onInput} />
					<KeyButton keyValue="3" onInput={this.props.onInput} />
					<KeyButton keyValue="-" onInput={this.props.onInput} />
				</div>
				<div className="row">
					<KeyButton keyValue="0" width={2} onInput={this.props.onInput} />
					<KeyButton keyValue="=" onInput={this.props.onInput} />
					<KeyButton keyValue="+" onInput={this.props.onInput} />
				</div>
			</div>
		);
	}
}
