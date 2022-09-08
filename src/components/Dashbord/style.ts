import styled from "styled-components";
import ImgBackground from "../../assets/imgs/Background.jpg";

export const Container = styled.div`
    padding: 0;
    margin: 0;
    position: relative;
    height: 100vh;
    width: 100vw;
    background: url(${ImgBackground});
    background-size: cover;
    
    #Nor {
    position:absolute;
    font-size: 50px;
    color: #fff;
    top:60%;
    left:68%;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px rgb(5, 162, 112), 0 0 70px rgb(5, 162, 112), 0 0 80px rgb(5, 162, 112), 0 0 100px rgb(5, 162, 112), 0 0 150px rgb(5, 162, 112);
    }

    #Leg {
    position:absolute; 
    font-size: 50px;
    color: #fff;
    top:60%;
    left:22%;
    text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
    }

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