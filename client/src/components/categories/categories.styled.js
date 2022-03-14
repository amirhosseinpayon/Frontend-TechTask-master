import styled from '@emotion/styled'

export const CategoriesStyled = styled.div`
  grid-area: sidebar;
  position: sticky;
  top: 10rem;
  height: 50vh;
  
  & > h1 {
    font-size: 1.6rem;
    margin-bottom: 1rem
  }

  & > ul {
    list-style-type: none;
    font-size: 1.6rem;
  }
`

export const ListItemStyled = styled.li`
  padding: 0.8rem 0;
` 