import React from 'react';
import propTypes from 'prop-types';

export default class Display extends React.PureComponent {
	render() {
		return <div className="Display">{this.props.value}</div>;
	}
}

Display.propTypes = {
	value: propTypes.oneOfType([propTypes.string, propTypes.number]),
};
