import styled from 'styled-components';

const green = '#009688';

export const Content = styled.div`
    h2 {
        background: ${green};
        color: #fff;
        margin: 18px 0;
        padding: 8px;
        border-radius: 3px;
        font-size: 22px;
        font-weight: normal;
    }
    h3 {
        margin: 12px 0;
        font-size: 18px;
        font-weight: normal;
        border-bottom: 2px solid ${green};
    }
    p {
        line-height: 190%;
        code {
            background: #ddd;
        }
    }
    pre {
        background: #272c34;
        border-radius: 4px;
        margin-bottom: 50px;
        padding: 12px;
        overflow-x: scroll;
        code {
            color:#2df335;
            .hljs-selector-id {
                color: #ff47b6;
            }
        }
    }
`
