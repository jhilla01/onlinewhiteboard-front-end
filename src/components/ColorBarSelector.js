import React from 'react';
import styles from '@/styles/ColorBarSelector.css';

/**
 * ColorBarSelector component displays a list of color options for the user to choose from.
 * @param {Object} props
 * @param {Function} props.setStrokeStyle - Callback function to set the selected color.
 **/
function ColorBarSelector({ setStrokeStyle }) {
    const colorList = [
        '#23272B',
        '#C82333',
        '#FD7E14',
        '#E0A800',
        '#218838',
        '#0069D9',
        '#6610F2',
    ];

    const changeStrokeStyle = (color) => {
        setStrokeStyle(color);
    };

    return (
        <div className={styles.colorBarSelector}>
            {colorList.map((color, index) => (
                <div
                    key={index}
                     style={{ background: `${color}` }}
                    onClick={() => changeStrokeStyle(color)}/>
            ))}
        </div>
    );
}

export default ColorBarSelector;