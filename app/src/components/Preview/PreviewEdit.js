import React, { useState } from 'react';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { widthAry } from '../../widthArray.js';

const PreviewEdit = ({width, setWidth}) =>  {

    const handleChange = e => {
        const value = e.target.value;
        setWidth(value);
    }

    return (
        <>
            <FormControl>
                <InputLabel>Preview width</InputLabel>
                <Select
                    value={width}
                    onChange={handleChange}
                >
                {widthAry.map(width => (
                    <MenuItem key={width} value={width}>{width}%</MenuItem>
                ))}
                </Select>
            </FormControl>
        </>
    )
}

export default PreviewEdit;
