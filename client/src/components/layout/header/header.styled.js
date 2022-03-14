import styled from '@emotion/styled'

export const HeaderStyled = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1;
  width: 100vw;
  grid-area: header;
  background-color: var(--color-bg-header);
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 10%);
  padding: 0 1rem;

  & > div {
    max-width: var(--desktop-width);
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > img {
      width: 8rem;
    }
  }
`
