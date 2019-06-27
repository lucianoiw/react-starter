import styled from 'styled-components';

export const Tag = styled.button`
  ${(props) => {
    switch (props.color) {
      case 'primary':
        break;

      default:
        break;
    }

    return 'green';
  }};
`;
