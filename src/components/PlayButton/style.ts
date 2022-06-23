import styled from 'styled-components';

export const Container = styled.div`
    
    #primeira{
    position:absolute; 
    top:50%;
    left:70%;
    transform: translate(-50%, -50%);
    width: 20rem;
    border-radius: 15px;
    }

    #segunda{
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
    border: 5px solid #BF3326;
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
        border-top-color: #D96E30;
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
    left:51%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: #BF3326;
    color:rgba(255, 255, 255, 0.945);
    width: 100px;
    height: 38px;
}
