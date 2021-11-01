import styled from "styled-components";

export const SearchInputStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
  margin-top: 20px;

  .input-search {
    border: none;
    padding: 0.5rem;
    box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    margin-right: 10px;

    &:focus {
      outline: none;
    }
  }
  
  .icon-search {
    color: ${({ theme }) => theme.colors.primary};
  }
`