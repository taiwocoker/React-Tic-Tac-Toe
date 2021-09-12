import '@testing-library/jest-dom/extend-expect';
import { getAllWinsFromBoard } from '../utils/gameLogic';

test('Checks for a win', () => {

    expect(getAllWinsFromBoard(3)).toMatchObject([[0, 1, 2], [0, 3, 6], [3, 4, 5], [1, 4, 7], [6, 7, 8], [2, 5, 8], [0, 4, 8], [2, 4, 6]]);
});

