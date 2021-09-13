import React from 'react';
import styled from 'styled-components';
import Typography from '../components/atoms/typography'


const Notfound = (props) => {
    return (
      <NotFoundStyling
      image={'/assets/images/bg-image-tictactoe.jpg'}
      >
        <Typography.Heading
          capitalize
          level={2}
          text={`Not Found`}
        />
      </NotFoundStyling>
    )
};

const NotFoundStyling = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`
export default Notfound;
