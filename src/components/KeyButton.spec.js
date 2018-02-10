import React from 'react';
import renderer from 'react-test-renderer';
import KeyButton from './KeyButton';

describe('KeyButton Component', () => {
  const inputFunction = () => { };
  const comp = renderer.create(<KeyButton keyValue="2" onInput={inputFunction} />);
  it('should be able to create', () => {
    expect(comp.getInstance()).toBeTruthy();
  });
});
