import styled from "styled-components";

export const IndexStyle = styled.div`
  text-align: center;

  .anime-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    list-style: none;
    grid-gap: 1.5rem;
  }

  .anime-list img {
    max-width: 100%;
  }
`