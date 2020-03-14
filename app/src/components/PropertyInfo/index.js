import React, { useState } from 'react';

import axios from 'axios';
import marked from 'marked';
// import hljs from 'highlight.js';
import 'highlight.js/styles/dracula.css';

import { InfoSection } from '../../styled-components/SectionStyle';
import { InfoContainer } from '../../styled-components/Container';
import { DialogButton } from '../../styled-components/Button';

import DialogContent from './ContentDialog';

import { propertyNames } from '../../propertyArray.js';

const PropertyInfo = () => {
    const [open, setOpen] = React.useState(false);
    const [markdown, setMarkdown] = React.useState('');

    const handleClickOpen = e => {
        const target = e.target;
        const fileName = target.getAttribute('data-name');

        axios.get(`../markdown/${fileName}.md`)
        .then(res => {
            marked.setOptions({
                headerIds: false,
                // highlight: code => {
                //     return hljs.highlightAuto(code).value;
                // },
            });
            const md = res.data;
            const html = marked(md);

            setMarkdown(html);
        })
        .catch(er => {
            const errorMessage = `
            接続エラーが発生しました。<br>
            ネットが繋がる場所でアクセスしてください。
            `

            setMarkdown(errorMessage);
        })

        setOpen(true);
    }

    return (
        <InfoSection>
            <InfoContainer>
                {propertyNames.map(name => (
                    <DialogButton key={name} data-name={name} onClick={handleClickOpen}>{name}</DialogButton>
                ))}
            </InfoContainer>
            <DialogContent 
                markdown={markdown}
                setOpen={setOpen}
                open={open}
            />
        </InfoSection>
    );
}

export default PropertyInfo;
