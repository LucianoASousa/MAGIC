import styled from "styled-components";

export const Container = styled.div`
    padding: 0;
    margin: 0;
    position: relative;
    height: 100vh;
    width: 100vw;
    background: url('src/assets/imgs/Background.jpg');
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