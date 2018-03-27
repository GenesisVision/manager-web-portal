import Dropzone from "react-dropzone";
import React, { Component } from "react";
import "./input-file.css";
import managerAvatar from "../../../media/manager-avatar.png";

//import fileUploadService from "../../../service/file-upload-service";

class InputFile extends Component {
  state = {
    thumb: managerAvatar
  };

  render() {
    const { name, setFieldValue } = this.props;
    const onDrop = acceptedFiles => {
      if (acceptedFiles.length === 0) {
        return;
      }

      const value = acceptedFiles[0];
      /*fileUploadService.uploadAvatar(value).then(fileName => {
        this.setState({
          thumb: value.preview
        });
        setFieldValue(name, fileName);
      });*/ setFieldValue(
        name,
        value.name
      );
    };

    return (
      <div className="input-file">
        <div className="input-file__avatar">
          <img src={this.state.thumb} alt="Avatar" />
          <p className="input-file__text--big">
            Drag the image here or click{" "}
            <span className="input-file__text--lighter">upload</span> to browse
            your files
          </p>
          <p className="input-file__text--small">Tap to upload the image</p>
        </div>
        <div className="input-file__dropzone">
          <Dropzone
            className="dropzone"
            accept="image/jpeg, image/png"
            onDrop={onDrop}
          >
            {({ isDragActive, isDragReject }) => {
              if (isDragReject) {
                return (
                  <p className="dropzone__text dropzone__text--error">
                    Only image upload!
                  </p>
                );
              } else if (isDragActive) {
                return (
                  <div className="dropzone--active">
                    <p className="dropzone__text">Drop the image here.</p>
                  </div>
                );
              }
            }}
          </Dropzone>
        </div>
      </div>
    );
  }
}

export default InputFile;
