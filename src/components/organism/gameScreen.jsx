import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RESET_GAME, RESTART_GAME } from '../../store/reducer/global.reducer/action';
import Button from '../atoms/button';
import Typography from '../atoms/typography';
import styled from 'styled-components';

const GameScreen = ({ children }) => {
    const { players, gameIsPlaying } = useSelector((state) => state.global);
    const dispatch = useDispatch();


    const resetGame = () => {
        dispatch(RESET_GAME());
    };

    const restartGame = () => {
        dispatch(RESTART_GAME(players.boardSize));
    };

    return (
      <GameScreenStyling
        className='container'
        image={'/assets/images/bg-image-tictactoe.jpg'}
      >
        <div className={'main-form'}>
          {!gameIsPlaying && (
            <Typography.Heading
              level={3}
              text={' Welcome to Tic-Tac-Toe!'}
              className={'Welcome'}
            />
          )}

          {gameIsPlaying && (
            <div className={'Welcome__name'}>
              <div className={'Welcome__name-symbol'}>
                <Typography
                  capitalize
                  text={`${players.player1.name} plays ${players.player1.symbol}`}
                />
                <Typography
                  capitalize
                  text={`${players.player2.name} plays ${players.player2.symbol}`}
                />
              </div>
              <div className={'Welcome__name-symbol'}>
                <Typography
                  capitalize
                  text={`${players[players.isPlaying].name} is playing...`}
                />
                <Typography
                  capitalize
                  text={`${players[players.nextPlayer].name} plays next`}
                />
              </div>
            </div>
          )}
          <div>{children}</div>
          <div className={'Welcome__btn-play'}>
            {gameIsPlaying && (
              <Button
                title='reset game'
                onClick={resetGame}
                red
              />
            )}
            {gameIsPlaying && (
              <Button
                title='play again'
                onClick={restartGame}
                green
              />
            )}
          </div>
        </div>
      </GameScreenStyling>
    )
};

const GameScreenStyling = styled.div`
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  outline: 1px solid red;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .main-form {
    max-width: 90vh;
    width: 100%;
    height: auto;
    background: rgba(0, 0, 0, 0.75) !important;
    border: 1px solid white !important;
    border-radius: 8px;
    color: white;
    font-size: 18px;
    padding: 38px 10px;
  }
  .Welcome {
    text-align: center;
    font-size: 25px;
    color: #fff;
    padding: 25px 10px;
    &__name {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 38px 15px;
    }
    &__name-symbol p:first-child {
      margin-bottom: 10px;
    }
    &__btn-play {
      align-content: center;
      display: flex;
      justify-content: center;
      padding: 25px 0 10px;
    }
    
  }
  @media (max-width: 767px) {
    .Welcome__name {
      width: 100%;
      margin: 0;
      padding-bottom: 10px;
      font-size: 14px;
    }
  }
`
export default GameScreen;
