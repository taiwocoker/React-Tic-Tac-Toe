import React, { useEffect, useState } from 'react'
import Typography from '../components/atoms/typography'
import styled from 'styled-components/macro'
import Button from '../components/atoms/button'
import {
  RESET_GAME,
  RESTART_GAME,
} from '../store/reducer/global.reducer/action'
import { useDispatch, useSelector } from 'react-redux'
import GameScreen from '../components/organism/gameScreen'

const GameResult = (props) => {
  const [result, setScreenResult] = useState({})
  const { players, gameisnotplaying } = useSelector((state) => state.global)
  const dispatch = useDispatch()

  const resetGame = () => {
    dispatch(RESET_GAME())
    props.history.replace('/')
  }

  const restartGame = () => {
    dispatch(RESTART_GAME(players.boardSize))
    props.history.replace('/')
  }

  useEffect(() => {
    if (!props.location.state) {
      props.history.replace('/')
    } else {
      setScreenResult(props.location.state)
    }
  }, [])

  // console.log(result);
  return (
    <ResultStyling image={'/assets/images/bg-image-tictactoe.jpg'}>
      <div className={'Result'}>
        <div className={'Result__result1'}>
          <div className={'Result__result'}>
            {result?.boardFull && (
              <div>
                <Typography>There's a Tie!!</Typography>
              </div>
            )}
            {result?.win && (
              <div className={"heading"}>
                <Typography.Heading
                  capitalize
                  level={2}
                  text={`${result.lastPlayer} won the game!`}
                />
                <Typography.Heading level={3} text={'Do you want to play again?'}/>
              </div>
            )}
          </div>
          <div className={'Result__btn-submit'}>
            {
              <Button
                title='reset game'
                onClick={resetGame}
                red
              />
            }
            {
              <Button
                title='play again'
                onClick={restartGame}
                green
              />
            }
          </div>
        </div>
      </div>
    </ResultStyling>
  )
}

const ResultStyling = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
//   border: 1px solid black;
  height: 100vh;
  // .green {
  //   background-color: #66b366;
  //   color: #fff;
  // }
  .heading h2{
      margin-bottom: 15px;
  }
  // .red {
  //   background-color: transparent;
  //   color: red;
  //   border: 1px solid red;
  // }
  .Result {
    width: 50%;
    height: 50vh;
    background: rgba(0, 0, 0, 0.75) !important;
    color: white;
    font-size: 18px;
    padding: 38px 10px;
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__result {
    //   border: 1px solid red;
    }
    &__result1 {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      height: 30%;
    }
    &__btn-submit {
    //   border: 1px solid red;
      padding: 20px 0;
    }
    // &__btn-color {
    //   padding: 0.375rem 0.75rem;
    //   font-size: 1rem;
    //   line-height: 1.5;
    //   border-radius: 0.25rem;
    //   transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    //     border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    //   display: inline-block;
    //   font-weight: 400;
    //   text-align: center;
    //   white-space: nowrap;
    //   vertical-align: middle;
    //   margin: 0 10px;
    //   border-radius: 8px;
    // }
  }
  @media (max-width: 767px){
     .Result {
    width: 100%;
    height: 50vh;
    &__result{
        margin-bottom: 15px;
    } 
  }
`

GameResult.propTypes = {}

export default GameResult
