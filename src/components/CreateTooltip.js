import React from 'react';
import dynamic from "next/dynamic";

// Dynamically import the ReactTooltip component, disabling server-side rendering
const ReactTooltip = dynamic(() => import("react-tooltip").then((mod) => mod.default), {
    ssr: false,
});

/**
 * CreateTooltip component renders a tooltip with customizable content and appearance.
 * @param {Object} props
 * @param {string} props.id - The unique identifier for the tooltip.
 * @param {Object} props.background - Inline CSS styles for the tooltip trigger.
 * @param {Function} props.action - Callback function to be called when the tooltip trigger is clicked.
 * @param {React.ReactNode} props.icon - The icon or content to be displayed as the tooltip trigger.
 * @param {string} props.type - The type of tooltip (light, dark, etc.).
 * @param {string} props.effect - The tooltip's entrance and exit effect.
 * @param {string} props.text - The text to be displayed inside the tooltip.
 * @param {string} props.stylesClass - CSS class to be applied to the tooltip trigger.
 **/

function CreateTooltip({ id, background, action, icon, type, effect, text, stylesClass }) {
    return (
        <div>
            {/* Render the tooltip trigger */}
            <a data-tip data-for={id} style={background} onClick={action} className={stylesClass}> {icon} </a>
            {/* Render the ReactTooltip component */}
            <ReactTooltip id={id} type={type} effect={effect}>
                <span>{text}</span>
            </ReactTooltip>
        </div>
    );
}

export default CreateTooltip;