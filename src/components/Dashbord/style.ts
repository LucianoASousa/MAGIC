import styled from "styled-components";

export const Container = styled.div`
    padding: 0;
    margin: 0;
    position: relative;
    height: 100vh;
    width: 100vw;
    background: url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8f77979c-3b74-4427-9685-7d4e4ec9d5cb/d8dkpzo-34a35edb-5937-4ea8-80a4-8cf50c388aea.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhmNzc5NzljLTNiNzQtNDQyNy05Njg1LTdkNGU0ZWM5ZDVjYlwvZDhka3B6by0zNGEzNWVkYi01OTM3LTRlYTgtODBhNC04Y2Y1MGMzODhhZWEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.BV3w0ptuKZA3Gq_uCt1IHr7JJIw_nmykFczsmf79u8g');
    background-size: cover;
    
 #Legendary {
    display: grid;
    position:absolute; 
    top:50%;
    left:28%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    width: 100%;
    max-width:550px;
    margin: 0 auto;
    background-color: #fff;
    filter: blur(5px);
    transition: filter 0.2s;
    :hover {
        filter:blur(0px);
    }
 }

 #Normal {
    position:absolute; 
    top:50%;
    left:72%;
    transform: translate(-50%, -50%);
    border-radius: 15px;
    width: 100%;
    max-width:550px;
    max-height: 1000px;
    margin: 0 auto;
    background-color: #fff;
    filter: blur(5px);
    transition: filter 0.2s;

    :hover {
        filter: blur(0px);
    }
    
 }
`