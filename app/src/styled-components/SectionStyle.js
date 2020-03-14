import styled from 'styled-components';
import { device } from './MediaQuery';

const Base = `
    padding: 14px;
    margin: 20px 0;
`;

export const PropertySection = styled.section`
    ${Base}
    border: 1px solid #ddd;
    border-radius: 4px;
    .MuiFormControl-root {
        width: 26%;
        margin: 10px 2%;
        @media ${device.mobileM} {
            width: 46%;
        }
        .MuiInput-root {
            .MuiInputBase-input {
                width: 100%;
            }
        }
    }
`;

export const InfoSection = styled.section`
    margin: 40px 0;
`

export const PreviewSection = styled.section`
    ${Base}
    padding: 0;
    .MuiFormControl-root {
        margin: 20px 0;
        .MuiInputBase-root {
            width: 120px;
        }
    }
`

export const CodeSection = styled.section`
    #code-view {
        ${Base}
        border: 1px solid #ddd;
        background:  #272c34;
        color: #fff;
        line-height: 160%;
        .copy-btn {
            color: #eee;
        }
        .property {
            color: #b78eff;
        }
    }
`;
