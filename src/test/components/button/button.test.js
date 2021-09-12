import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Button from '../../../components/atoms/button';

it('renders correctly', () => {
    const tree = renderer
        .create(
                <MemoryRouter>
                    <Button title={'This Works'} />
                </MemoryRouter>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
