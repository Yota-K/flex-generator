import React, { useState } from 'react';

import PreviewEdit from './PreviewEdit';

import { PreviewSection } from '../../styled-components/SectionStyle';
import { FlexPreview } from '../../styled-components/FlexPreview';
import { H2 } from '../../styled-components/Heading';

const Preview = ({
        flex,
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
    }) => {
    const [width, setWidth] = React.useState(100);
    const [numberAry, setNumberAry] = React.useState({
        numbers: [1,2,3,4,5,6]
    });

    const numbers = numberAry.numbers;

    return (
        <PreviewSection>
            <H2>Preview</H2>
            <PreviewEdit 
                width={width}
                setWidth={setWidth}
                numberAry={numberAry}
                setNumberAry={setNumberAry}
            />
            <FlexPreview
                flex={flex}
                width={width}
                flexDirection={flexDirection}
                flexWrap={flexWrap}
                justifyContent={justifyContent}
                alignItems={alignItems}
                alignContent={alignContent}
            >
                {numbers.map(num => (
                    <div key={num}>{num}</div>
                ))}
            </FlexPreview>
        </PreviewSection>
    )
}

export default Preview;
