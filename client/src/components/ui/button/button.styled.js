import styled from '@emotion/styled'

export const ButtonStyled = styled.button`
  padding: 0.8rem;
  border: 1px solid var(--color-light-gray);
  color: var(--color-primary);
  cursor: pointer;
  text-align: center;
  background-color: var(--color-white);

  &:focus {
    outline: none
  }
`