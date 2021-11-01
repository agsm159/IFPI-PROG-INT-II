import styled from "styled-components";

export const PaginationStyle = styled.div`
  display: flex;
  justify-content: center;

  ul {
    height: 100px;
    width: 30%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    list-style: none;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.primary};
  }

  .__item--active {
    color: ${({ theme }) => theme.colors.text};
    font-weight: bold;
    border: none;
  }

  .__item--active:focus {
    outline: none;
  }
`