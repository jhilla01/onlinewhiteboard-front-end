import React, { useState, useEffect } from 'react';
import styles from '../styles/ConnectedUsers.css';
import { ThemeContext } from '@/context/ThemeContext';

/**
 * ConnectedUsers component displays the number of connected users with a theme context.
 * @param {Object} props
 * @param {Array} props.usersList - The list of connected users.
 **/
function ConnectedUsers({ usersList }) {
    // Access the theme context values
    const { theme, dark, toggle } = React.useContext(ThemeContext);

    // State to hold the background color and text color of the component
    const [backgroundColor, setBackgroundColor] = useState('#e4e8ee');
    const [color, setColor] = useState('#222');

    // Update background and text color whenever the theme context changes
    useEffect(() => {
        if (!theme.secondaryColor) return;
        setBackgroundColor(theme.secondaryColor);

        if (!theme.color) return;
        setColor(theme.color);
    }, [theme]);

    return (
        // Apply the styles with dynamic background and text color
        <div
            className={styles.connectedUsers}
            style={{ background: `${backgroundColor}`, color: `${color}` }}
        >
            <p>{usersList.length}</p>
            <p>👥</p>
        </div>
    );
}

export default ConnectedUsers;