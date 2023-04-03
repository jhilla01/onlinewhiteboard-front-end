import React from 'react';
import styles from '@/styles/InfoPanel.css';

// The InfoPanel component displays a panel containing information on whiteboard controls.
function InfoPanel({ setInfoPanel }) {
    // Close the panel by setting the state to false.
    const closePanel = () => {
        setInfoPanel(false);
    };

    return (
        <div className={styles.infoPanel} onClick={closePanel}>
            <div className={styles.inner}>
                {/* Top section of the panel */}
                <div className={styles.top}>
                    <div className={styles.paragraph}>
                        <h1>Whiteboard Controls</h1>
                        <div className={styles.close}>x</div>
                    </div>
                </div>
                {/* Middle section of the panel */}
                <div className={styles.middle}>
                    {/* Drawing instructions */}
                    <div className={styles.paragraph}>
                        <h1 className={styles.heading}>Drawing</h1>
                        <p className={styles.details}>🖱️ Left Click / ☝️ Single-finger-touch</p>
                    </div>
                    {/* Moving instructions */}
                    <div className={styles.paragraph}>
                        <h1 className={styles.heading}>Moving</h1>
                        <p className={styles.details}>🖱️ Right Click / ✌️ Two-finger-touch</p>
                    </div>
                    {/* Zooming instructions */}
                    <div className={styles.paragraph}>
                        <h1 className={styles.heading}>Zooming</h1>
                        <p className={styles.details}>🖱️ Scroll Wheel / 🤏 Pinch</p>
                    </div>
                </div>
                {/* Bottom section of the panel */}
                <div className={styles.bottom}>
                    <div className={styles.closeBtn} onClick={closePanel}>Close</div>
                </div>
            </div>
        </div>
    );
}

export default InfoPanel;