import styled from 'styled-components';

const Base = `
    padding: 14px;
    margin: 20px 0;
`;

export const PropertySection = styled.section`
    ${Base}
    border: 1px solid #ddd;
    .MuiFormControl-root {
        width: 26%;
        margin: 10px 2%;
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
    #flex-preview {
        ${Base}
        border: 1px solid #ddd;
        min-height: 200px;
        display: ${props => props.flex};
        flex-direction: ${props => props.flexDirection};
        flex-wrap: ${props => props.flexWrap};
        justify-content: ${props => props.justifyContent};
        align-items: ${props => props.alignItems};
        align-content: ${props => props.alignContent};
        div {
            width: 30px;
            height: 30px;
            margin: 8px;
            padding: 10px;
            background:  #ffc107;
            color: #fff;
            text-align: center;
            font-size: 18px;
            font-weight: bold;
        }
    }
`

export const CodeSection = styled.section`
    margin: 20px 0 40px;
    #code-view {
        .copy-btn {
            color: #eee;
        }
        padding: 14px;
        background:  #272c34;
        color: #fff;
        border-radius: 4px;
        line-height: 160%;
        .property {
            color: #b78eff;
        }
    }
`;
