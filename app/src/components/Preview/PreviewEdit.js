import React, { useState } from 'react';

import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import { EditArea } from '../../styled-components/FlexPreview';

import { widthAry } from '../../widthArray.js';

const PreviewEdit = ({ 
        width, 
        setWidth, 
        numberAry,
        setNumberAry,
    }) =>  {
    const [increment, setIncrement] = React.useState(false);
    const [decrement, setDecrement] = React.useState(false);

    const handleChange = e => {
        const value = e.target.value;
        setWidth(value);
    }
    
    const aryCopy = numberAry.numbers.slice();

    const addSquare = () => {
        let last = numberAry.numbers.slice(-1)[0];
        last === 15 ? setIncrement(true) : setDecrement(false);
        setNumberAry({
            numbers: [...aryCopy, last + 1]
        });
    }
    
    const removeSquare = () => {
        let last = aryCopy.pop();
        last === 2 ? setDecrement(true) : setIncrement(false);
        setNumberAry({
            numbers: aryCopy
        });
    };

    return (
        <EditArea>
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
            <FormControl>
                <Tooltip title="Add" placement="top">
                    <span className="increment-btn">
                        <IconButton 
                            onClick={addSquare}
                            disabled={increment}
                        >
                            <AddIcon  />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Remove" placement="top">
                    <span className="decrement-btn">
                        <IconButton 
                            onClick={removeSquare}
                            disabled={decrement}
                        >
                            <RemoveIcon />
                        </IconButton>
                    </span>
                </Tooltip>
            </FormControl>
        </EditArea>
    )
}

export default PreviewEdit;
