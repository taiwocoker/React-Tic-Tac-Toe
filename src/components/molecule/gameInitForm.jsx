import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../atoms/button';
import Input from '../atoms/input';
import Card from '../atoms/card';
import { SET_PLAYERS, START_GAME } from '../../store/reducer/global.reducer/action';
import { getAllWinsFromBoard } from '../../utils/gameLogic';
import styled from 'styled-components'

const GameInitForm = () => {
    const { players } = useSelector((state) => state.global);
    const dispatch = useDispatch();
    const [formErrors, setFormErrors] = useState({});
    const [data, setData] = useState(players);

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]:
                event.target.name === 'boardSize'
                    ? +event.target.value
                    : { ...data[event.target.name], name: event.target.value },
        });
        setFormErrors({ ...formErrors, [event.target.name]: '' });
    };

    const handleSetPlayers = (event) => {
        const errors = {};
        event.preventDefault();
        if (!data.player1.name) errors.player1 = 'Player 1 name is required!';
        if (!data.player2.name) errors.player2 = 'Player 2 name is required!';
        if (!data.boardSize) errors.boardSize = 'Required!';
        else if (data.boardSize < 3 || data.boardSize > 20) errors.boardSize = 'Select value between 3 - 20';

        if (!Object.keys(errors).length) {
            // set Redux to the users playing
            dispatch(SET_PLAYERS({ ...data, allWins: getAllWinsFromBoard(data.boardSize) }));
            dispatch(START_GAME());
        } else {
            setFormErrors(errors);
        }
    };

    return (
      <CardStyling>
        <Card className={'Card'}>
          <form onSubmit={handleSetPlayers} className={'Card__form'}>
            <Input
              label='Player One Username'
              name='player1'
              value={data.player1.name}
              onChange={handleChange}
              error={formErrors}
              className={'Card__input'}
            />
            <Input
              label='Player Two Username'
              name='player2'
              value={data.player2.name}
              onChange={handleChange}
              error={formErrors}
              className={'Card__input'}
            />
            <div>
              <Input
                label='Select Board Size'
                name='boardSize'
                type='number'
                value={data.boardSize}
                onChange={handleChange}
                error={formErrors}
                className={'Card__input'}
              />
            </div>
            <Button
              type='submit'
              title='start game'
              className={'Card__submit'}
            />
          </form>
        </Card>
      </CardStyling>
    )
};
 
const CardStyling = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: -15px;
  margin-left: -15px;
  .Card {
    width: 90vh;
    height: auto;
    background: rgba(0, 0, 0, 0.75) !important;
    color: white;
    font-size: 18px;
    padding: 38px 10px;
    margin: 0 10px;
    &__input {
      display: block;
      width: 100%;
      height: calc(2.25rem + 2px);
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      color: #495057;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #ced4da;
      border-radius: 0.25rem;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      &__input_label {
        display: inline-block;
        margin-bottom: 0.5rem;
      }
    }
    &__submit {
      color: #fff;
      background-color: #dc3545;
      border-color: #dc3545;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.25rem;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
        border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
      display: inline-block;
      font-weight: 400;
      text-align: center;
      white-space: nowrap;
      vertical-align: middle;
    }
  }
`
export default GameInitForm;
