import classnames from "classnames";
import Dropzone from "react-dropzone";
import React, { Component } from "react";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import "./input-file.css";
import managerAvatar from "../../../media/manager-avatar.png";

class InputFile extends Component {
  state = {
    thumb: managerAvatar,
    dropzoneActive: false
  };

  onDragEnter = () => {
    this.setState({
      dropzoneActive: true
    });
  };

  onDragLeave = () => {
    this.setState({
      dropzoneActive: false
    });
  };

  onDrop = files => {
    if (files.length === 0) {
      return;
    } else {
      this.setState({
        files: files[0]
      });
    }
    this.setState({
      dropzoneActive: false
    });
  };

  applyMimeTypes(event) {
    this.setState({
      accept: event.target.value
    });
  }

  render() {
    const { name, label, className, setFieldValue, uploadAvatar } = this.props;
    const { accept, files, dropzoneActive } = this.state;

    const _crop = () => {
      // image in dataUrl
      //console.log(this.refs.cropper.getCroppedCanvas().toDataURL());
    };
    const overlayStyle = {
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: "2.5em 0",
      background: "rgba(0,0,0,0.5)",
      textAlign: "center",
      color: "#fff"
    };

    return (
      <div className={classnames("input-file", className)}>
        {label && <div className="input-file__label">{label}</div>}
        <div className="input-file__avatar">
          <div className="input-file__dropzone">
            <Dropzone
              disableClick
              className="dropzone"
              accept="image/jpeg, image/png"
              onDrop={this.onDrop}
              onDragEnter={this.onDragEnter}
              onDragLeave={this.onDragLeave}
            >
              {dropzoneActive && <div style={overlayStyle}>Drop files...</div>}
              <div>
                <Cropper
                  ref="cropper"
                  src={this.state.thumb}
                  style={{ height: 200, width: 200 }}
                  aspectRatio={1}
                  autoCropArea={1}
                  crop={_crop}
                />
                <p className="input-file__text--big">
                  Drag the image here or click{" "}
                  <span className="input-file__text--lighter">upload</span> to
                  browse your files
                </p>
                <p className="input-file__text--small">
                  Tap to upload the image
                </p>
              </div>
            </Dropzone>
          </div>
        </div>
      </div>
    );
  }
}

export default InputFile;
