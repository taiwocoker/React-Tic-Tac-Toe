import { INIT_GAME, RESET_GAME_ACTION, RESTART_GAME_ACTION, START_GAME_ACTION, UPDATE_GAME_BOARD, SWAP_PLAYER_ACTION } from './actionType';

/**
 * Gets data of the players
 * @param {{player1: string, player2: string}} data - players data
 */
export const SET_PLAYERS = (data) => {
    return {
        type: INIT_GAME,
        payload: data,
    };
};

/**
 * Reset Game State
 * @return {{type: string}}
 * @constructor
 */
export const RESET_GAME = () => {
    return {
        type: RESET_GAME_ACTION,
    };
};

/**
 * Restart Game and leave winnings
 * @return {{type: string}}
 * @constructor
 */
export const RESTART_GAME = (boardSize = 3) => {
    return {
        type: RESTART_GAME_ACTION,
        payload: boardSize
    };
};

export const START_GAME = (state = true) => {
    return {
        type: START_GAME_ACTION,
        payload: state,
    };
};


export const UPDATE_BOARD = (data) => {
    return {
        type: UPDATE_GAME_BOARD,
        payload: data,
    }
}

export const SWAP_PLAYER = (currentPlayer) => {

    return {
        type: SWAP_PLAYER_ACTION,
        payload: { isPlaying: currentPlayer === 'player1' ? 'player2' : 'player1', nextPlayer: currentPlayer }
    }
}
