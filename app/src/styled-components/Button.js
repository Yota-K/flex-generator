import styled from 'styled-components';
import { device } from './MediaQuery';

const green = '#009688';

const Button = `
    display: inline-block;
    padding: 0.6rem;
    font-size: 14px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    transition: all 0.4s;
`

export const DialogButton = styled.a`
    ${Button}
    width: 100px;
    margin: 14px;
    color: ${green};
    border: 1px solid ${green};
    &:hover {
        background: ${green};
        color: #fff;
        transition: all 0.4s;
    }
    @media ${device.mobileS} {
        width: 36%;
        margin: 14px 2%;
    }
`

export const CloseButton = styled.a`
    ${Button}
    width: 60px;
    color: gray;
    &:hover {
        background:  #eee;
        transition: all 0.4s;
    }
`
