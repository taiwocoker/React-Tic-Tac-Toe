/**
 *
 * @param {number}_size
 * @return {any[]}
 */
export const createGameBoard = (_size) => {
    const size = +_size >= 3 && +_size <= 20 ? +_size : 3;
    return Array(size * size).fill('');
};

/**
 * Get all wins from selected board
 * @param boardSize
 * @return {*[]}
 * @constructor
 */
export const getAllWinsFromBoard = (boardSize) => {
    const solutions = [];
    const diagonal1 = [];
    const diagonal2 = [];
    for (let rowIndex = 0; rowIndex < boardSize; rowIndex++) {
        let rowSolution = [];
        let columnSolution = [];
        diagonal1.push(rowIndex * boardSize + rowIndex);
        diagonal2.push(rowIndex * boardSize + (boardSize - rowIndex - 1));
        const rowStart = rowIndex * boardSize;
        for (let columnIndex = 0; columnIndex < boardSize; columnIndex++) {
            rowSolution.push(rowStart + columnIndex);
            columnSolution.push(columnIndex * boardSize + rowIndex);
        }
        solutions.push(rowSolution);
        solutions.push(columnSolution);
        rowSolution = [];
        columnSolution = [];
    }
    solutions.push(diagonal1);
    solutions.push(diagonal2);

    return solutions;
};

const boardMatchSolutionShape = (boardSize, boardArr) => {
    let packSelections = [];
    return boardArr.reduce((res, cur, i) => {
        packSelections.push(cur);
        if ((i + 1) % boardSize === 0) {
            res.push(packSelections);
            packSelections = [];
        }
        return res;
    }, []);
};

/**
 *
 * @param {{
        player1: { name: string, symbol: string, wins: number },
        player2: { name: string, symbol: string, wins: number },
        isPlaying: string,
        nextPlayer: string,
        boardSize: number,
        allWins: []
 * }}players
 * @param {Array<*>}board
 * @returns {{win: boolean, lastPlayer: string, lastPlayerSymbol, boardFull: boolean}}
 */
export const checkWinner = (players, board) => {
    const solutions = players.allWins;
    const symbol = players[players.nextPlayer].symbol;

    const colRowResult = solutions.reduce((res, cur, i) => {
        const checkLetters = [];
        cur.forEach((winIdx, pos) => {
            checkLetters.push(board[winIdx]);
        });
        if (checkLetters.every((el) => el === symbol)) {
            res.win = true;
        }
        res.boardFull = board.every((el) => el)
        return res;
    }, { win: false, boardFull: false });

    return { ...colRowResult, lastPlayer:  players[players.nextPlayer].name, lastPlayerSymbol: symbol };
};
