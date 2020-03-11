import React from 'react';

import { PreviewSection } from '../styled-components/SectionStyle.js';
import { H2 } from '../styled-components/Heading';

const Preview = ({
        flex,
        flexDirection,
        flexWrap,
        justifyContent,
        alignItems,
        alignContent,
    }) => {
    const numberAry = [1,2,3,4,5,6];

    return (
        <PreviewSection
            flex={flex}
            flexDirection={flexDirection}
            flexWrap={flexWrap}
            justifyContent={justifyContent}
            alignItems={alignItems}
            alignContent={alignContent}
        >
        <H2>Preview</H2>
            <div id="flex-preview">
                {numberAry.map(num => (
                    <div key={num}>{num}</div>
                ))}
            </div>
        </PreviewSection>
    )
}

export default Preview;
