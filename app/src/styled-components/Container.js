import styled from 'styled-components';

const Base = `
    display: flex;
    flex-wrap: wrap;
`

export const PropertyContainer = styled.div`
    ${Base}
    justify-content: center;
`;

export const InfoContainer = styled.div`
    ${Base}
    justify-content: space-around;
`
