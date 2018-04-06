import classnames from "classnames";
import Cropper from "react-cropper";
import Dropzone from "react-dropzone";
import React, { PureComponent } from "react";

import "cropperjs/dist/cropper.css";

import "./input-file.css";

class InputFile extends PureComponent {
  state = {
    thumb: this.props.field.value || this.props.defaultImage,
    dropzoneActive: false,
    shouldCrop: false
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
    this.setState({
      dropzoneActive: false
    });
    if (files.length === 0) {
      return;
    } else {
      const img = files[0];
      this.setState({
        thumb: img.preview
      });
    }
  };

  onCropEnd = () => {    
    const croppedCanvas = this.cropper.getCroppedCanvas();
    croppedCanvas.toBlob(updateFiledValue.bind(this), "image/png");

    function updateFiledValue(blob){
      if (blob){
        blob.name = "image.png";
      }

      this.props.form.setFieldValue(this.props.field.name, blob);
    }
  }

  openFileDialog = () => {
    this.dropzone.open();
  };

  ready = () => {
    //skip first crop on render
    //then crop every time when file is changed
    if(!this.state.shouldCrop){
      this.setState({shouldCrop: true});
    }
    else{
      this.onCropEnd();
    }
  }

  render() {   
    const { label, className } = this.props;
    const { thumb, dropzoneActive } = this.state;
    return (
      <div className={classnames("input-file", className)}>
        {label && <div className="input-file__label">{label}</div>}
        <div className="input-file__avatar">
          <div className="input-file__dropzone">
            <Dropzone
              disableClick
              className="dropzone"
              accept="image/jpeg, image/png"
              ref={dropzone => {
                this.dropzone = dropzone;
              }}
              onDrop={this.onDrop}
              onDragEnter={this.onDragEnter}
              onDragLeave={this.onDragLeave}
            >
              {dropzoneActive && (
                <div className="dropzone--active">Drop files...</div>
              )}
              <div>
                <Cropper
                  ref={cropper => {
                    this.cropper = cropper;
                  }}
                  src={thumb}
                  aspectRatio={1}
                  autoCropArea={1}
                  cropend={this.onCropEnd.bind(this)}
                  ready={this.ready}
                />
                <p className="input-file__text--big">
                  Drag the image here or click{" "}
                  <span
                    className="input-file__text--lighter"
                    onClick={this.openFileDialog}
                  >
                    upload
                  </span>{" "}
                  to browse your files
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
