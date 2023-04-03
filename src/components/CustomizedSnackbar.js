// Import React
import React, { useState, useEffect } from 'react';
// Import Snackbar, Slide from @material-ui/core instead of @material-ui/snackbar
import { Snackbar, Slide } from '@mui/material';
// Import MuiAlert from @material-ui/lab instead of @material-ui/lab/Alert
import MuiAlert from '@mui/lab';

function TransitionLeft(props) {
    return <Slide {...props} direction="left"/>;
}

function TransitionUp(props) {
    return <Slide {...props} direction="up"/>;
}

function TransitionRight(props) {
    return <Slide {...props} direction="right"/>;
}

function TransitionDown(props) {
    return <Slide {...props} direction="down"/>;
}

const Alert = React.forwardRef((props, ref) => <MuiAlert elevation={6} variant="filled" {...props} ref={ref} />);
Alert.displayName = 'Alert';

const SnackbarComponent = React.forwardRef((props, ref) => <Snackbar autoHideDuration={4000} {...props} ref={ref} />);
SnackbarComponent.displayName = 'SnackbarComponent';
export default function CustomizedSnackbar({open, setShowSnackbar, snackbarMsg, severity, transition, verticalAnchor, horizontalAnchor }) {
    const [vertical, setVertical] = useState('bottom');
    const [horizontal, setHorizontal] = useState('center');

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowSnackbar(false);
    };

    useEffect(() => {
        if(verticalAnchor) {
            setVertical(verticalAnchor)
        }

        if(horizontalAnchor) {
            setHorizontal(horizontalAnchor)
        }
    }, [horizontalAnchor, verticalAnchor])

    return (<div style={{position: 'absolute'}}>

            <SnackbarComponent
                open={open}
                onClose={handleClose}
                TransitionComponent={
                    transition ==='right'
                        ? TransitionRight
                        : transition ==='left'
                            ? TransitionLeft
                            : transition === 'down'
                                ? TransitionDown
                                : transition === 'up'
                                    ? TransitionUp
                                    : TransitionUp
                }
                anchorOrigin={{ vertical, horizontal }}>

                <Alert onClose={handleClose} severity={severity ? severity : 'success'}>
                    {snackbarMsg}
                </Alert>

            </SnackbarComponent>
        </div>
    );
}