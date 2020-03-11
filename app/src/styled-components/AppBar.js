import styled from 'styled-components';

const AppBar = `
    background:  #98d679;
    color: #fff;
`;

export const HeaderBar = styled.header`
    ${AppBar}
    margin-bottom: 60px;
    padding: 14px;
    box-shadow: 0 3px 6px rgba(0,0,0,0.2);
`;

export const FooterBar = styled.footer`
    ${AppBar}
    margin-top: 80px;
    padding: 24px;
    text-align: center;
    .copyright {
        font-weight: 600;
    }
`;
