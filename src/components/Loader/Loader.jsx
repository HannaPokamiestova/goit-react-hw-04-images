import { Watch } from 'react-loader-spinner';
import { BackdropLoader, StyledLoader } from './Loader.styled';

export const Loader = () => {
  return (
    <BackdropLoader>
      <StyledLoader>
        <Watch
          height="200"
          width="200"
          radius="48"
          color="#2196f3"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </StyledLoader>
    </BackdropLoader>
  );
};
