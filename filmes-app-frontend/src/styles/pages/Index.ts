import styled from "styled-components";

export const IndexStyle = styled.div`
  text-align: center;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};

  

  h1 {  
    margin-top: 20px;
  }

  .anime-list {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1.5fr));
    list-style: none;
    grid-gap: 1.5rem;
    padding: 10px;
    margin-top: 20px;      
  }

  .anime-list li {
    padding: 20px;
    background-color: ${({ theme }) => theme.colors.text};
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .anime-list img {
    max-width: 100%;
  }

  .anime-item-average-rating  {
    display: flex;
    justify-content: flex-end;
    padding: 5px;
  }

  .anime-item-average-rating p {
    margin-right: 10px;
  }


  .anime-item-title  {
    font-size: 20px;
    font-weight: bold;
  }

  .anime-item-synopsis {
    font-size: 14px;
    width: 100%;
    max-height: 100px;
    overflow-y: auto;
    display: flex;
    text-align: start;
    padding: 10px;
  }

  .anime-item-synopsis::-webkit-scrollbar {
    width: 1em;
  }
 
  .anime-item-synopsis::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.colors.secondary};
  }
 
  .anime-item-synopsis::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 5px;
  }

  .anime-item-age-rating-guide {
    font-size: 14px;
    text-align: start;
    padding: 10px;
  }

  .anime-item-episode-count {
    font-size: 14px;
    text-align: start;
    padding: 10px;
  }
`