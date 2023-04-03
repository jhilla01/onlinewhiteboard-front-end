import React, { useState, useEffect } from 'react';
import { Slider } from 'rsuite';
import { ThemeContext } from '@/context/ThemeContext';
import 'rsuite/dist/styles/rsuite-default.css';
import styles from '@/styles/ThicknessSliderSelector.css';

function ThicknessSliderSelector({ lineWidth, setLineWidth, instrument }) {
    // Access theme context
    const { theme, dark, toggle } = React.useContext(ThemeContext);

    // State for storing the color
    const [color, setColor] = useState('#222');
    // State for storing the maximum value for the slider
    const [maxVal, setMaxVal] = useState(10);

    // Update color when the theme changes
    useEffect(() => {
        if (!theme.color) return;
        setColor(theme.color);
    }, [theme]);

    // Update the maximum value for the slider depending on the instrument
    useEffect(() => {
        if (instrument === 'pencil') {
            setMaxVal(40);
            // Update lineWidth if it exceeds the new maximum value
            if (lineWidth > 40) setLineWidth(40);
        } else if (instrument === 'eraser') {
            setMaxVal(40);
        } else {
            console.log('error!');
        }
    }, [instrument, lineWidth, setLineWidth]);

    return (
        <div className={styles.selectThicknessSlider}>
            <p className={styles.text} style={{ color: color }}>
                Thickness
            </p>
            <Slider
                progress
                defaultValue={lineWidth}
                onChange={(value) => {
                    setLineWidth(value);
                }}
                min={1}
                max={maxVal}
                style={{ width: '150px' }}/>
        </div>
    );
}

export default ThicknessSliderSelector;