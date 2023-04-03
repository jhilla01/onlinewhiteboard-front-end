import React, { useState } from 'react';
import styles from '@/styles/FileUploader.css';

function FileUploader({ setShowFileUploader, setTextReadFromFile }) {
    const [message, setMessage] = useState('Please upload a file!');

    // Function to handle showing the file content
    const showFile = () => {
        // Check if the browser supports File APIs
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            const preview = document.getElementById('show-text');
            const file = document.querySelector('input[type=file]').files[0];
            const reader = new FileReader();

            const textFile = /text.*/;

            // Check if the file is a text file
            if (file.type.match(textFile)) {
                reader.onload = (event) => {
                    // Display the file content in the preview element
                    preview.innerHTML = event.target.result;
                };
            } else {
                // If the file is not a text file, display an error message
                preview.innerHTML = "<span class='error'>No file attached!</span>";
            }

            // Read the file content as text
            reader.readAsText(file);

            // Set the result to the state and close the file uploader
            reader.onload = (e) => {
                setTextReadFromFile(e.target.result);
                setMessage('File uploaded successfully.');
                setShowFileUploader(false);
            };
        } else {
            // If the browser does not support File APIs, show an error message
            setMessage('There was an error uploading your file. Please try again.');
        }
    };

    // Function to handle closing the file uploader
    const closeFileUploader = () => {
        setShowFileUploader(false);
    };

    return (
        <div className={styles.fileUploader}>
            <input type="file" onChange={showFile} />
            <div id="show-text">{message}</div>
            <div className={styles.icon} onClick={closeFileUploader}>
                Cancel
            </div>
        </div>
    );
}

export default FileUploader;