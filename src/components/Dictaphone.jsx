import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { ReactComponent as MicrophoneIcon } from './Images/microphone.svg'; // Import your microphone icon SVG file

const Dictaphone = (props) => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  // Function to handle button click
  const handleButtonClick = () => {
    // Call props.onclick if it's provided
    if (props.onclick) {
      props.onclick();
    }
    // Start listening for speech recognition
    SpeechRecognition.startListening();
  };

  // Callback function to update input box with transcript
  const handleTranscriptUpdate = () => {
    if (props.onTranscriptUpdate) {
      props.onTranscriptUpdate(transcript);
    }
  };

  // Call the callback function whenever there's a new transcript
  if (transcript !== '') {
    handleTranscriptUpdate();
  }

  // Callback function to refresh the page
  const handleResetTranscript = () => {
    if (props.onResetTranscript) {
      props.onResetTranscript();
    }
    resetTranscript();
    // Refresh the page
    window.location.reload();
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
      <button onClick={handleButtonClick} style={{ display: 'flex', alignItems: 'center', border: 'none', background: 'transparent', marginRight: '10px' }}>
        <MicrophoneIcon style={{ width: '20px', height: '20px', fill: 'blue', marginRight: '5px' }} />
        Start 
      </button>
      <button onClick={SpeechRecognition.stopListening} style={{ marginRight: '10px',display:'hidden' }}>Stop</button>
      <button onClick={handleResetTranscript} style={{ marginRight: '10px' }}>Reset</button>
      {/* <p>{transcript}</p> */}
    </div>
  );
};

export default Dictaphone;
