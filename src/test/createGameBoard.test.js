import '@testing-library/jest-dom/extend-expect';
import { createGameBoard } from '../utils/gameLogic';


test('Checks if board is valid', () => {
    const entries = [1, 19, 5, 2, 30, 20];

    const result = entries.map((size) => createGameBoard(size));

    expect(result[0].length).toEqual(3 * 3);
    expect(result[1].length).toEqual(19 * 19);
    expect(result[2].length).toEqual(5 * 5);
    expect(result[3].length).toEqual(3 * 3);
    expect(result[4].length).toEqual(3 * 3);
    expect(result[5].length).toEqual(20 * 20);
});
