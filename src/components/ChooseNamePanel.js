import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/InfoPanel.css';
import CustomizedSnackbar from './CustomizedSnackbar';
import { createRoom } from '@/utils/createRoom';
import { useRouter } from 'next/router';
import Spinner from './Spinner';
import { getRoom } from '@/utils/getRoom';

/**
 * ChooseNamePanel component displays an interface for users to either create
 * a new room or join an existing one.
 */
function ChooseNamePanel() {
    const router = useRouter();

    // State variables
    const [button, setButton] = useState(styles.closeBtnDisabled);
    const [open, setOpen] = useState(false);
    const [snackbarMsg, setSnackbarMsg] = useState('');
    const [username, setUsername] = useState('');
    const [roomName, setRoomName] = useState('');
    const [roomAddress, setRoomAddress] = useState('');
    const [createRoom, setCreateRoom] = useState(true);
    const [loading, setLoading] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [connecting, setConnecting] = useState(false);

    // Refs
    const usernameRef = useRef(null);
    const roomNameRef = useRef(null);
    const roomAddressRef = useRef(null);

    // Input change handlers
    const handleInputChange = (e) => {
        setUsername(e.target.value);
    };

    const handleRoomNameChange = (e) => {
        setRoomName(e.target.value);
    };

    const handleRoomAddressChange = (e) => {
        setRoomAddress(e.target.value);
    };

    // Enable/disable the action button based on input values
    useEffect(() => {
        if (createRoom) {
            if (username && roomName) setButton(styles.closeBtn);
            else setButton(styles.closeBtnDisabled);
        } else {
            if (username && roomAddress) setButton(styles.closeBtn);
            else setButton(styles.closeBtnDisabled);
        }
    }, [username, roomName, roomAddress, createRoom]);

    // Snackbar control
    const openSnackbar = (msg) => {
        setOpen(true);
        setSnackbarMsg(msg);
    };

    // Room creation and joining handlers
    const handleCreateRoom = async () => {
        if (button !== styles.closeBtnDisabled && createRoom) {
            setLoading(true);
            const message = `User ${username} has successfully created room ${roomName}`;
            openSnackbar(message);

            const participants = [];

            await createRoom(roomName, '', participants)
                .then((resp) => {
                    router.push(`/room/${resp.id}?username=${username}`);
                })
                .catch((err) => console.log(err));
        }
    };

    const handleJoinRoom = () => {
        if (button !== styles.closeBtnDisabled && !createRoom) {
            getRoom(roomAddress)
                .then(() => {
                    setLoading(true);
                    setConnecting(true);
                    router.push(`/room/${roomAddress}?username=${username}`);
                })
                .catch((err) => {
                    openSnackbar("Room doesn't exist");
                    setSnackbarSeverity('error');
                    setLoading(false);
                    console.log(err);
                });
        }
    };

    // Switch between Create Room and Join Room panels
    const changePanel = () => {
        setCreateRoom(!createRoom);
        setButton(styles.closeBtnDisabled);
    };
    return (
        <>
            {loading ? (
                <Spinner color="#fff" loading={loading} connecting={connecting} />
            ) : (
                <div className={styles.infoPanel}>
                    <div className={styles.inner}>
                        <div className={styles.top}>
                            <div className={styles.tabs}>
                                <p
                                    style={{
                                        borderBottom: createRoom
                                            ? '2px solid #333'
                                            : 'none',
                                    }}
                                    onClick={changePanel}>
                                    Create a Room
                                </p>

                                <p
                                    style={{
                                        borderBottom: !createRoom
                                            ? '2px solid #333'
                                            : 'none',
                                    }}
                                    onClick={changePanel}>
                                    Join Existing Room
                                </p>
                            </div>
                        </div>
                        <div className={styles.middle}>
                            <div className={styles.enterUsername}>
                                <p>Pick a username: 👉 </p>
                                <input className={styles.input}
                                       placeholder="Username"
                                       ref={usernameRef}
                                       onChange={handleInputChange}/>
                            </div>
                            {createRoom ? (
                                <>
                                    <div className={styles.enterUsername}>
                                        <p>Pick a room name: 👉</p>
                                        <input className={styles.input}
                                               placeholder="Room Name"
                                               ref={roomNameRef}
                                               onChange={handleRoomNameChange}/>
                                    </div>
                                </>
                            ) : (
                                <div className={styles.enterUsername}>
                                    <p>Enter Room Address: 👉</p>
                                    <input className={styles.input}
                                           placeholder="Room Address"
                                           ref={roomAddressRef}
                                           onChange={handleRoomAddressChange}/>
                                </div>
                            )}
                        </div>
                        <div className={styles.bottom}>
                            {createRoom ? (
                                <div className={button} onClick={handleCreateRoom}>
                                    Create Room
                                </div>
                            ) : (
                                <div className={button} onClick={handleJoinRoom}>
                                    Join Room
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
            <CustomizedSnackbar
                open={open}
                setSnackbar={setOpen}
                snackbarMsg={snackbarMsg}
                severity={snackbarSeverity}/>
        </>
    );
}

export default ChooseNamePanel;