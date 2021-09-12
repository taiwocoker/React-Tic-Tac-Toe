import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkWinner, createGameBoard } from '../../utils/gameLogic';
import styled from 'styled-components/macro';
import { SWAP_PLAYER, UPDATE_BOARD } from '../../store/reducer/global.reducer/action';
import {useHistory} from 'react-router-dom'

const GameBoard = () => {
    const { players, gameBoard: { board, hasPlayed }, gameIsPlaying } = useSelector((state) => state.global);
    const dispatch = useDispatch();
    const history = useHistory();

    const setGameBoard = (data) => {
        return dispatch(UPDATE_BOARD(data));
    };

    const handleCellSelection = (event) => {
        if (event.target.id) {
            const cellNumber = +event.target.id;
            const newBoard = [...board];
            if (!newBoard[cellNumber]) {
                newBoard[cellNumber] = players[players.isPlaying].symbol;
                dispatch(SWAP_PLAYER(players.isPlaying));
                setGameBoard(newBoard);
            } else {
               alert('that cell is already taken')
            }
        }
    };


    useEffect(() => {
        if (!hasPlayed) {
            setGameBoard(createGameBoard(+players.boardSize));
        }
    }, []);

    useEffect(() => {
        const gameResp = checkWinner(players, board);

        if (gameResp.win || gameResp.boardFull) {
            // setGameWinOrBoardFull(win || boardFull);
            history.push('/result', gameResp);
        }
    }, [board]);

    return (
        <GameBoardStyling boardSize={players.boardSize} onClick={handleCellSelection}>
            <div className={'GameBoard'}>
                {board.map((cur, i) => (
                    <div id={i} className={'GameBoard__board-cell'} role={'button'} key={i}>
                        {cur}
                    </div>
                ))}
            </div>
        </GameBoardStyling>
    );
};

const GameBoardStyling = styled.div`
  --cellSize: 15px;
  
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;

  .GameBoard {
    display: grid;
     grid-template-columns: repeat(${({ boardSize }) => boardSize}, 1fr);
    // grid-template-rows: repeat(${({ boardSize }) => boardSize}, minmax(auto, 30px));

    grid-auto-rows: 1fr;
    
    width: 90%;
    height: 90%;
    max-width: 600px;

    &__board-cell {
      width: 100%;
      height: 100%;
      border: 1px solid black;
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: var(--cellSize);
      min-height: var(--cellSize);
      font-size: 2.3em;
      border: 1px solid #fff;

      &:hover, &:focus {
        background: red;
        cursor: pointer;
      }
    }
  }
`;

export default GameBoard;
