import React, { useState, useRef } from "react";
import AWS from 'aws-sdk';
import { Container, Row, Col } from "react-bootstrap";

const Recorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const mediaRecorderRef = useRef(null);
  const [blobData, setBlobData] = useState(null);
  const [disabled, setDisabled] = useState(false);

  AWS.config.update({
    accessKeyId: 'AKIARRFP5ZGB3MAH6A5G',
    secretAccessKey: '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',
    region: 'us-east-1',
    signatureVersion: 'v4',
    sslEnabled: true,
    s3ForcePathStyle: true
  });
  
  const s3 = new AWS.S3();

  const startRecording = () => {
    const mediaRecorder = new MediaRecorder(window.stream);

    mediaRecorder.addEventListener("dataavailable", (event) => {
     

      const blobData = event.data;
      setBlobData(blobData);
      uploadFile(blobData);
    });

    mediaRecorderRef.current = mediaRecorder;
    mediaRecorder.start();
    setRecording(true);
    
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
    setDisabled(true);
  };

  const uploadFile = async (blobData) => {
  
    var file = new File([blobData], "name", {type: "audio/wav"});
   
    var sampleName = `${Date.now()}.blob`
    const params = { 
        Bucket: 'voice-clone-assets', 
        Key: sampleName,
        Body: file,
      };
    const { Location } = await s3.upload(params).promise();
    const formData = new FormData();
    formData.append("name", sampleName);

    fetch('https://www.shuibatingting.com/api/upload', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
    },
    body: formData
    })
    .then(response => response.json())
    .then(data => {
        const audioURL = "https://s3.amazonaws.com/voice-clone-assets/" +data.message+".wav";
        setAudioURL(audioURL);
        setDisabled(false);
    })
    .catch(error => console.error(error));
   
  };

  const handleStartRecording = () => {
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        window.stream = stream;
        startRecording();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleStopRecording = () => {
    stopRecording();
    window.stream.getTracks().forEach((track) => track.stop());
  };

  return (
    <Container id="about" className="my-5">
        <Col md={12}>
          <h2>上傳您的聲音</h2>
          <div>
                {recording ? (
                    <button onClick={handleStopRecording} disabled={disabled}>完成錄音</button>
                ) : (
                    <button onClick={handleStartRecording} disabled={disabled}> {disabled ? "複製中，大約 1 分鐘完成" : "開始錄音" }</button>
                )}
                {audioURL && <audio src={audioURL} controls />}
            </div>
        </Col>
        
    </Container>
    
  );
};

export default Recorder;
