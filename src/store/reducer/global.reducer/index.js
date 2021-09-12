import {
    INIT_GAME,
    RESET_GAME_ACTION,
    RESTART_GAME_ACTION,
    START_GAME_ACTION,
    SWAP_PLAYER_ACTION,
    UPDATE_GAME_BOARD,
} from './actionType';
import { createGameBoard } from '../../../utils/gameLogic';

const initialState = {
    players: {
        player1: { name: '', symbol: 'X', wins: 0 },
        player2: { name: '', symbol: 'O', wins: 0 },
        isPlaying: 'player1',
        nextPlayer: 'player2',
        boardSize: 3,
        allWins: []
    },
    gameIsPlaying: false,
    gameBoard: { board: createGameBoard(3), hasPlayed: false },
};

export const ReduxGlobalReducer = (state = initialState, action) => {
    switch (action.type) {
        case INIT_GAME:
            return { ...state, players: { ...action.payload } };
        case START_GAME_ACTION:
            return { ...state, gameIsPlaying: action.payload };
        case UPDATE_GAME_BOARD:
            return { ...state, gameBoard: { board: action.payload, hasPlayed: true } };
        case RESTART_GAME_ACTION:
            return {
                ...state, gameBoard: {
                    board: createGameBoard(+action.payload),
                    hasPlayed: false,
                },
                players: {
                    ...state.players, isPlaying: 'player1',
                    nextPlayer: 'player2',
                },
            };
        case SWAP_PLAYER_ACTION:
            return { ...state, players: { ...state.players, ...action.payload } };
        case RESET_GAME_ACTION:
            return { ...initialState };
        default:
            return state;
    }
};
