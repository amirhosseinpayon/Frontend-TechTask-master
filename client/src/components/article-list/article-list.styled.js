import styled from '@emotion/styled'

export const ArticleListStyled = styled.div`
  grid-area: content;
  grid-column: span 3;

  & > h1 {
    margin-bottom: 2rem;
    font-size: 1.6rem;
  }
`

export const ArticlesStyled = styled.div`
  display: grid;
  grid-gap: 6rem;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
`