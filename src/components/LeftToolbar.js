import React, { useState, useEffect } from 'react';
import styles from '@/styles/LeftToolbar.css';
import { ThemeContext } from '@/context/ThemeContext';
import CreateTooltip from './CreateTooltip';

/**
 * LeftToolbar component renders a toolbar with two buttons for saving and importing the canvas.
 * @param {Object} props
 * @param {Function} props.save - Function to save the canvas.
 * @param {boolean} props.disabled - Determines if the save button is disabled.
 * @param {Function} props.importFile - Function to import a canvas file.
 **/
function LeftToolbar({ save, disabled, importFile }) {
    // Access the theme context values
    const { theme, dark, toggle } = React.useContext(ThemeContext);

    // State to hold the background color of the buttons
    const [backgroundColor, setBackgroundColor] = useState('#E2E6EA');

    // Update background color whenever the theme context changes
    useEffect(() => {
        if (!theme.secondaryColor) return;
        setBackgroundColor(theme.secondaryColor);
    }, [theme]);

    return (
        <div className={styles.leftbar}>
            <CreateTooltip
                id="save"
                background={{
                    background: `${disabled ? '#222' : backgroundColor}`,
                }}
                action={save}
                icon="💾"
                type={`${disabled ? 'error' : 'info'}`}
                effect="solid"
                text={'Save Canvas'}
            />

            <CreateTooltip
                id="import"
                background={{ background: `${backgroundColor}` }}
                action={importFile}
                icon="📁"
                type={'info'}
                effect="solid"
                text={'Import Canvas'}
            />
        </div>
    );
}

export default LeftToolbar;