import styled from 'styled-components';

export const Tag = styled.button`
  ${(props) => {
    switch (props.color) {
      case 'primary':
        break;

      default:
        break;
    }

    console.log();
    return 'green';
  }};

  ${props => console.log(props)}
`;
