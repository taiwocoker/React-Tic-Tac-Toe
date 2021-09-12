import React from 'react';
import { useSelector } from 'react-redux';
import GameInitForm from '../components/molecule/gameInitForm';
import GameBoard from '../components/organism/gameBoard';
import GameScreen from '../components/organism/gameScreen';

const Game = () => {
    const { gameIsPlaying } = useSelector((state) => state.global);
    return <GameScreen>{gameIsPlaying ? <GameBoard /> : <GameInitForm />}</GameScreen>;
};

export default Game;
