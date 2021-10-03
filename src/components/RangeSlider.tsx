import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import * as React from 'react';

const valuetext = (value: number) => `${value}°C`;

const RangeSlider = () => {
    const [value, setValue] = React.useState<number | number[]>([20, 37]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    );
};

export default RangeSlider;
