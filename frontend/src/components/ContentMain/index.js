import styled from 'styled-components';

const ContentMain = styled.div.attrs(props => ({}))`
   width: ${(props => props.popup ? '100%' : '85%')};
   float: left;
   box-sizing: border-box;

   .go_back {
      position: absolute;
      right: 9%;
      top: 20%;
   }

   h2, h3 {
      margin: 5% auto 10px auto;
      width: 85%;
      box-sizing: border-box;
   }

   form {
      width: 85%;
      margin: 0 auto 75px;

      input {
         height: 30px;
         border-radius: 5px;
         border: solid 1px #50b792;
         color: #50b792;
         text-indent: 5px;
         margin-right: 20px;
         float: left;
      }

      a {
         width: 100px;
         height: 30px;
         background-color: #50b792;
         border: none;
         color: #fff;
         border-radius: 3px;
         float: left;
         display: flex;
         justify-content: center;
         align-items: center;
         text-decoration: none;

         svg {
            margin-right: 5px;
         }
      }

      button:hover {
         background-color: #3f9475;
      }
   }

   table {
      border-collapse: collapse;
      border-top: solid 1px #36767f;
      margin: 0 auto 25px;
      width: 85%;

      thead {
         tr {
            th {
               padding: 10px 0;
            }
            
            .th_acao {
               min-width: 110px;
            }
         }
      }

      tbody {
         tr {
            td {
               padding: 10px 25px;
               text-align: center;

               > button, a {
                  background-color: transparent;
                  border: none;
                  margin-right: 15px;
               }
            }
         }

         tr:nth-child(odd) {
            background-color: #50b792;
            color: #fff;
         }

         tr:nth-child(odd) button, tr:nth-child(odd) a {
            color: #fff;
         }

         tr:nth-child(even) button, tr:nth-child(even) a {
            color: #665;
         }

         tr:last-child {
            border-bottom: solid 1px #36767f;
         }
      }
   }
`;

export default ContentMain;