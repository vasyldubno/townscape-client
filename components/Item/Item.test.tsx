import { render, screen } from '@testing-library/react';
import { Item } from './Item';
import React from 'react';
import userEvent from '@testing-library/user-event';

describe('Item component', () => {
  it('useState called once', async () => {
    const setAdd = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setAdd];
    jest.spyOn(React, 'useState').mockImplementation(useStateMock);

    jest.spyOn(React, 'useEffect').mockImplementation((f) => f());

    render(<Item />);
    const button = screen.getByTestId('button');
    await userEvent.click(button);
    expect(setAdd).toHaveBeenCalledTimes(1);
  });
});
