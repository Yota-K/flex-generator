import React, { useEffect, useState } from 'react';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import PropertyInfo from '../components/PropertyInfo/index.js';
import Preview from '../components/Preview';
import Code from '../components/Code';

import { PropertySection } from '../styled-components/SectionStyle.js';
import { PropertyContainer } from '../styled-components/Container.js';

import { 
    displayObj,
    directionObj,
    wrapObj,
    justifyObj,
    itemsObj,
    contentObj,
} from '../propertyObj.js';

const Property = () => {

    const [state, setState] = React.useState({
        flex: 'flex',
        flexDirection: 'row',
        flexWrap: 'now-rap',
        justifyContent: 'flex-start',
        alignItems: 'normal',
        alignContent: 'normal',
    });

    const handleChange = name => e => {
        setState({...state, [name]: e.target.value})
    };

    return (
        <>
        <PropertySection>
            <PropertyContainer>
            <FormControl>
                <InputLabel>display</InputLabel>
                <Select
                    value={state.flex}
                    onChange={handleChange('flex')}
                >
                {Object.values(displayObj).map(name => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel>flex-direction</InputLabel>
                <Select
                    value={state.flexDirection}
                    onChange={handleChange('flexDirection')}
                >
                {Object.values(directionObj).map(name => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel>flex-wrap</InputLabel>
                <Select
                    value={state.flexWrap}
                    onChange={handleChange('flexWrap')}
                >
                {Object.values(wrapObj).map(name => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel>justify-content</InputLabel>
                <Select
                    value={state.justifyContent}
                    onChange={handleChange('justifyContent')}
                >
                {Object.values(justifyObj).map(name => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel>align-items</InputLabel>
                <Select
                    value={state.alignItems}
                    onChange={handleChange('alignItems')}
                >
                {Object.values(itemsObj).map(name => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            <FormControl>
                <InputLabel>align-content</InputLabel>
                <Select
                    value={state.alignContent}
                    onChange={handleChange('alignContent')}
                >
                {Object.values(contentObj).map(name => (
                    <MenuItem key={name} value={name}>
                        {name}
                    </MenuItem>
                ))}
                </Select>
            </FormControl>
            </PropertyContainer>
        </PropertySection>
        <PropertyInfo />
        <Preview
            flex={state.flex}
            flexDirection={state.flexDirection}
            flexWrap={state.flexWrap}
            justifyContent={state.justifyContent}
            alignItems={state.alignItems}
            alignContent={state.alignContent}
        />
        <Code 
            flex={state.flex}
            flexDirection={state.flexDirection}
            flexWrap={state.flexWrap}
            justifyContent={state.justifyContent}
            alignItems={state.alignItems}
            alignContent={state.alignContent}
        />
        </>
    )
}

export default Property;
