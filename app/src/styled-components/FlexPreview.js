import styled from 'styled-components';

export const FlexPreview = styled.div`
    width: ${props => props.width}%;
    background: #fffef4;
    border: 1px solid #ddd;
    border-radius: 4px;
    min-height: 240px;
    display: ${props => props.flex};
    flex-direction: ${props => props.flexDirection};
    flex-wrap: ${props => props.flexWrap};
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    align-content: ${props => props.alignContent};
    transition: all 0.8s;
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
`;

export const EditArea = styled.div`
    display: flex;
    justify-content: space-between;
`;
