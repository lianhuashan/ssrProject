import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin:0px;
    padding:0px;
  }
  html,body {
    background: rgba(0,0,0,.9) ;
    color: #fafafa;
  }
  .flex-row-box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }
  .flex-col-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .text-ellipsis {
    word-wrap: nowrap;
    white-space: break-all;
    text-overflow: ellipsis;
  }

  .text-multi-line-ellipsis {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .text-title {
    font-size: 14px;
    color: #fafafa;
  }
  .text-sub-title {
    font-size: 12px;
    color: #cacaca;
  }
  .small-text {
    font-size: 12px;
  }

  .text-pink {
    color: pink;
  }
  .text-yellow {
    color: yellow;
  }
  .text-blue {
    color: blue;
  }
  .text-gray {
    color: #cacaca;
  }
`;
