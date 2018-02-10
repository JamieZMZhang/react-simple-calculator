import React from 'react';
import renderer from 'react-test-renderer';
import KeyBoard from './KeyBoard';

describe('KeyBoard Component', () => {
	const inputFunction = () => {};
	const comp = renderer.create(<KeyBoard onInput={inputFunction} />);
	it('should be able to create', () => {
		expect(comp.getInstance()).toBeTruthy();
	});
});
