import PropTypes from 'prop-types';
import { LoadButton } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <LoadButton onClick={onClick} type="button">
      Load more
    </LoadButton>
  );
};

LoadButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};
