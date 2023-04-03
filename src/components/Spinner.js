import { css } from '@emotion/react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import styles from '../styles/Spinner.css';

// Emotion CSS for the loader
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

/**
 * Spinner component renders a loading spinner with an optional text message.
 * @param {Object} props
 * @param {string} props.color - The color of the spinner.
 * @param {boolean} props.loading - Indicates whether the spinner is visible or not.
 * @param {boolean} props.connecting - Determines if the loading text should be displayed.
 **/
function Spinner({ color, loading, connecting }) {
    return (
        <div className={styles.spinner}>
            <div className={`sweet-loading ${styles.centerInner}`}>
                <ClimbingBoxLoader
                    color={color}
                    loading={loading}
                    css={override}
                    size={15}/>
                {connecting && <p className={styles.text}>Loading...</p>}
            </div>
        </div>
    );
}

export default Spinner;