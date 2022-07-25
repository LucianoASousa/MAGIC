import styled from 'styled-components';

export const Container = styled.div`
    padding: 0;
    margin: 0;
    position: relative;
    height: 100vh;
    width: 100vw;
    background: url('src/assets/imgs/MAGICBACKGROUND.jpg');
    background-size: cover;
    
    #First {
    position:absolute; 
    top:50%;
    left:70%;
    transform: translate(-50%, -50%);
    width: 20rem;
    border-radius: 15px;
    }

    #Second {
    position:absolute; 
    top:50%;
    left:30%;
    transform: translate(-50%, -50%);
    width: 20rem;
    border-radius: 15px;
    }
        
    .icon {
    position: absolute;
    top:75%;
    left:51%;
    transition-delay: .5s;
    width: 3rem;
    height: 3rem;
    border: 5px solid #3c3830;
    border-top-color: transparent;
    border-bottom-color: transparent;
    border-radius: 50%;
    animation: spin 1s infinite;
    margin-top: -24px;
    margin-left: -23px;
    }

    @keyframes spin {
    
    0%{
        transform: rotate(0);
    }
    50% {
        transform: rotate(180deg);
        border-top-color: #a28974;
        border-bottom-color: #F2CA80;
        border-right-color: transparent;
        border-left-color: transparent;
    }
    100%{
        transform: rotate(360deg);
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
