import React from 'react';
import renderer from 'react-test-renderer';
import Display from './Display';

describe('Display Component', () => {
	const comp = renderer.create(<Display value={'2030*30'} />);
	it('should be able to create', () => {
		expect(comp.getInstance()).toBeTruthy();
	});
});
