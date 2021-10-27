import { createGlobalStyle } from "styled-components";

export default createGlobalStyle `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: "Roboto", sans-serif;
  }

  .main-container {
    width: 100%;
    height: 100vh;
    background-color: #00A19D;
    overflow-y: auto;
  }

  .header-main-container {
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 500px;
  }

  .logo-service-app img {
    width: 64px;
    height: 64px;
  }

  .box-container {
    width: 55%;
    min-width: 200px;
    min-height: 500px;
    max-height: 500px;
    background-color: #E5E5E5;
    border-radius: 5px;
    box-shadow: 5px 5px 6px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .title-box-container {
    margin-bottom: 40px;
    color: #E05D5D;
  }

  .form-box-container {
    display: flex;
    flex-direction: column;
    width: 35%;
    min-height: 150px;
    min-width: 150px;
    justify-content: space-around;
  }

  .input-box-container {
    margin-bottom: 10px;
    border: 1.2px solid #FFB344;
    background-color: transparent;
    color: #111;
    padding: 5px;
    border-radius: 5px;
  }

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #111;
    opacity: 1;
    /* Firefox */
  }

  ::-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #111;
  }

  ::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #111;
  }

  .button-box-container {
    min-width: 55px;
    height: 30px;
    border: none;
    cursor: pointer;
    border-radius: 4px;
    padding: 5px;
    background-color: rgba(0, 161, 157, 0.4)
  }
`;