import styled from 'styled-components';
import ImgNBackground from "../../assets/imgs/NormalBACKGROUND.jpg";

export const Container = styled.div`
    padding: 0;
    margin: 0;
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: black;
    background: url(${ImgNBackground});
    background-size: cover;
    
    #First {
    position:absolute; 
    top:50%;
    left:70%;
    transform: translate(-50%, -50%);
    width: 20rem;
    border-radius: 15px;
    animation: hey 3s linear;
    }

    #Second {
    position:absolute; 
    top:50%;
    left:30%;
    transform: translate(-50%, -50%);
    width: 20rem;
    border-radius: 15px;
    animation: hey 3s linear;
    }

    @keyframes hey {
        0%{
            opacity: 0;
        }
        100%{
            opacity: 1;
        }
        
    }
        
    #Loading {
    position:absolute; 
    top:75%;
    left:51.25%;
    transform: translate(-50%, -50%);
    border: none;
    background: transparent;
    border-radius: 4px;
    width: 100px;
    height: 38px;
    display: block;

     img{
        width: 100%;
        animation: spin 2s linear infinite;
     }
    }

    @keyframes spin {
    0%{
        transform: rotatey(0deg);
    }
    100%{
        transform: rotatey(360deg);
    }
}

    button {
    position:absolute; 
    top:75%;
    left:51.25%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    border: none;
    background: transparent;
    border-radius: 4px;
    width: 100px;
    height: 38px;
    display: block;

    img{
    width: 100%;
    }
        
    &:hover {
        img {
            filter: brightness(0.8);
        };
    }
}
`
