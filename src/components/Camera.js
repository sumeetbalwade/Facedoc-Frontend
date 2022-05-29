import React, { useRef, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import "./Camera.css";
import axios from "axios";

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(","),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: mime });
}

const Camera = (props) => {
  const videoRef = useRef(null);
  const streamRef = useRef(null);
  const photoRef = useRef(null);
  const imageRef = useRef(null);
  const [hasPhoto, setHasPhoto] = useState(false);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({
        video: { width: 1920, height: 1080 },
      })
      .then((stream) => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
        streamRef.current = stream;
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const takePhoto = () => {
    const width = 414;
    const height = width / (16 / 9);

    let video = videoRef.current;
    let photo = photoRef.current;

    photo.width = width;
    photo.height = height;

    let ctx = photo.getContext("2d");
    ctx.drawImage(video, 0, 0, width, height);
    console.log(video);
    imageRef.current = photo.toDataURL("image/jpg");
    let date = new Date().getTime();
    let fil = dataURLtoFile(imageRef.current, date + ".jpg");
    props.getImage(fil, imageRef.current);
    console.log(fil);
    // const formData = new FormData();
    // formData.append("documentName", "test");
    // formData.append("document", fil );

    // let baseUrl = `${process.env.BASEURL}/api/doc/1`;
    // console.log(baseUrl);

    // axios.post(baseUrl, formData,{
    //   Headers:{
    //     'Accept':'image/jpg'
    //   }
    // }).then((res) => {
    //   console.log(res);
    // });
    setHasPhoto(true);
  };

  const closePhoto = () => {
    let photo = photoRef.current;
    let ctx = photo.getContext("2d");

    ctx.clearRect(0, 0, photo.width, photo.height);
    setHasPhoto(false);
  };

  useEffect(() => {
    getVideo();
    return () => {
      streamRef.current.getTracks().forEach((track) => track.stop());
    };
  }, [videoRef]);

  return (
    <div>
      <div className="camera">
        <video ref={videoRef}></video>
        <Button
          variant="primary"
          onClick={takePhoto}
          disabled={props.count >= 20}
        >
          Click
        </Button>
      </div>
      <div className={"result" + (hasPhoto ? "hasPhoto" : "")}>
        <p>{props.count}</p>
        <canvas ref={photoRef}></canvas>

        <Button variant="danger" onClick={closePhoto}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Camera;
