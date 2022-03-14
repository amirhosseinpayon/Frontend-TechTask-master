import styled from '@emotion/styled'

export const LayoutStyled = styled.div`
  max-width: var(--desktop-width);
  margin: 0 auto;
  padding-top: 8rem;

  & > main {
    min-height: calc(100vh - 13.5rem);
  }
`