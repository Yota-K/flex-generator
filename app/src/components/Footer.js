import React from 'react';

import { FooterBar } from '../styled-components/AppBar.js';

const Footer = () => {
    const getYear = () => {
        const year = new Date().getFullYear();
        return year;
    }

    return (
        <FooterBar>
            <span className="copyright">
                Copyright© Flex Generator { getYear() } All Rights Reserved.
            </span>
        </FooterBar>
    )
}

export default Footer;
