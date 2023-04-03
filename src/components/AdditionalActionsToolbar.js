import React, { useState, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";

import SelectInstrument from "./InstrumentSelector";
import styles from "../styles/AdditionalActionsToolbar.css";

// AdditionalActionsToolbar component is a toolbar for changing drawing instrument, and line width in a drawing app
function AdditionalActionsToolbar({ lineWidth, setLineWidth, setInstrument, instrument, color }) {
    const { theme } = React.useContext(ThemeContext);

    const [backgroundColor, setBackgroundColor] = useState("#E2E6EA");
    const [height, setHeight] = useState(45);
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    // Update the background color based on the current theme
    useEffect(() => {
        if (!theme.secondaryColor) return;
        setBackgroundColor(theme.secondaryColor);
    }, [theme]);

    // Open the menu and set its height
    const openMenu = () => {
        setHeight(180);
        setIsMenuOpened(true);
    };

    // Close the menu and set its height
    const closeMenu = () => {
        setHeight(45);
        setIsMenuOpened(false);
    };

    // Menu component displays a list of drawing instruments
    const Menu = () => {
        return (
            <div className={styles.menuInner}>
                <div className={styles.closeMenu} onClick={closeMenu}>
                    ❌
                </div>
                <SelectInstrument
                    color={color}
                    setInstrument={setInstrument}
                    instrument={instrument}
                    lineWidth={lineWidth}
                    setLineWidth={setLineWidth}/>
            </div>
        );
    };

    return (
        <div
            className={styles.moreActionsBar}
            style={{
                background: `${backgroundColor}`,
                width: '45px',
                height: `${height}px`,
            }}>
            {isMenuOpened ? (
                Menu()
            ) : (
                <div className={styles.openMenu} onClick={openMenu}>
                    📖
                </div>
            )}
        </div>
    );
}

export default AdditionalActionsToolbar;