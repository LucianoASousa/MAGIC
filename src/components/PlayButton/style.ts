import styled from 'styled-components';

export const Container = styled.div`
    #primeira{
    position:absolute; 
    top:50%;
    left:70%;
    transform: translate(-50%, -50%);
    width: 20rem;
    border-radius: 10px;
    }

    #segunda{
    position:absolute; 
    top:50%;
    left:30%;
    transform: translate(-50%, -50%);
    width: 20rem;
    border-radius: 10px;
    }

    button {
    position:absolute; 
    top:75%;
    left:51%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    border: none;
    border-radius: 4px;
    background-color: rgba(0, 0, 0, 0.5);
    color:rgba(255, 255, 255, 0.945);
    width: 100px;
    height: 38px;
}
`