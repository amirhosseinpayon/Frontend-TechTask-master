import styled from '@emotion/styled'

export const ArticlesStyled = styled.div`
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: 24rem auto auto;
  grid-template-areas:
    'header header header'
    'sidebar content content'
    'footer footer footer';
`