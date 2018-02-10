import Calculator from './Calculator';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Calculator', () => {
	const component = renderer.create(<Calculator />);
	const instance = component.getInstance();

	it('should be able to create', () => {
		expect(instance).toBeTruthy();
	});

	it('should calculat right', () => {
		expect(instance.calc('+1=')).toBe(1);
		expect(instance.calc('-1=')).toBe(-1);
		expect(instance.calc('10+100=')).toBe(110);
		expect(instance.calc('30+20=')).toBe(50);
		expect(instance.calc('30+20+80=')).toBe(130);
		expect(instance.calc('30-80+100=')).toBe(50);
	});

	it('should handle key input', () => {
		const input = instance.makeInputCallBack();
		input('9');
		expect(instance.state.value).toBe('9');
		input('9');
		expect(instance.state.value).toBe('99');
		input('+');
		expect(instance.state.value).toBe('99+');
		input('1');
		expect(instance.state.value).toBe('99+1');
		input('=');
		expect(instance.state.value).toBe(100);
		input('8');
		expect(instance.state.value).toBe('8');
		input('*');
		expect(instance.state.value).toBe('8*');
		input('3');
		expect(instance.state.value).toBe('8*3');
		input('=');
		expect(instance.state.value).toBe(24);
	});
});
