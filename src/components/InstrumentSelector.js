import React, { useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import styles from "@/styles/InstrumentSelector.css";

// The InstrumentSelector component allows the user to select an instrument and adjust the lineWidth.
function InstrumentSelector({ setInstrument, instrument, lineWidth, setLineWidth, color }) {
    // Access the theme context.
    const { theme } = React.useContext(ThemeContext);

    // Local state for the pencil menu width and visibility.
    const [width, setWidth] = useState(0);
    const [showPencilMenu, setShowPencilMenu] = useState(false);

    // Open the pencil menu and set its width.
    const openPencilMenu = () => {
        if (!showPencilMenu) {
            setShowPencilMenu(true);
            setWidth(160);
        } else return;
    };

    // Close the pencil menu and reset its width.
    const closePencilMenu = () => {
        setShowPencilMenu(false);
        setWidth(0);
    };

    // Helper function to conditionally set the background color of an instrument.
    const getInstrumentBackground = (selectedInstrument) => {
        return instrument === selectedInstrument ? "#bbb" : undefined;
    };

    return (
        <div className={styles.selectInstrument}>
            {/* Pencil instrument button */}
            <div className={styles.instrument}
                 style={{ background: getInstrumentBackground("pencil") }}
                 onClick={() => setInstrument("pencil")}
                 onMouseEnter={openPencilMenu}
                 onMouseLeave={closePencilMenu}>
                ✏️
                {/* Pencil menu containing lineWidth options */}
                <div className={styles.pencilMenu}
                     style={{ background: theme.secondaryColor, width: `${width}px` }}>

                    {/* First row of lineWidth options */}
                    <div className={styles.row}>
                        {/* lineWidth option buttons */}
                        {/* ... */}
                    </div>
                    {/* Second row of lineWidth options */}
                    <div className={styles.row}>
                        {/* lineWidth option buttons */}
                        {/* ... */}
                    </div>
                </div>
            </div>
            {/* Eraser instrument button */}
            <div className={styles.instrument}
                 style={{ background: getInstrumentBackground("eraser") }}
                 onClick={() => setInstrument("eraser")}>
                🖌️
            </div>
        </div>
    );
}
/* 🖊️✏️📜 🖌️ 🧹 */
export default InstrumentSelector;