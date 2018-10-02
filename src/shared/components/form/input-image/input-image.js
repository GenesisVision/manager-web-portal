import "cropperjs/dist/cropper.css";

import "./input-image.scss";

import classnames from "classnames";
import React, { Component } from "react";
import Cropper from "react-cropper";
import Dropzone from "react-dropzone";

import InputImageDefault from "./input-image-default";

class InputFile extends Component {
  constructor(props) {
    super(props);
    const { onChange, value, name } = this.props;

    if (value.src) {
      onChange(name, { ...value, isDefault: false });
    }
  }

  onDrop = files => {
    const { name, onChange } = this.props;
    if (files.length === 0) return;

    const img = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const data = {
        src: reader.result,
        filename: img.name,
        filetype: img.type,
        isNew: true,
        isDefault: false
      };
      onChange(name, data);
    };
    reader.readAsDataURL(img);
  };

  onCrop = () => {
    const { name, value, onChange } = this.props;
    const cropper = this.cropper;

    if (!cropper) return;

    const croppedCanvas = cropper.getCroppedCanvas();

    if (!croppedCanvas) return;

    croppedCanvas.toBlob(blob => {
      if (blob !== null) {
        blob.name = value.filename;
      }
      const img = {
        ...value,
        cropped: blob
      };
      onChange(name, img);
    }, value.filetype);
    console.log(
      "crop and isDefault :" + value.isDefault + " isNew:" + value.isNew
    );
  };

  openFileDialog = () => {
    this.dropzone.open();
  };

  clear = event => {
    const { onChange, name } = this.props;
    onChange(name, { cropped: null, src: "", isDefault: true, isNew: false });
    event.preventDefault();
    event.stopPropagation();
  };

  render() {
    const { className, value, defaultImage } = this.props;
    const { isDefault, isNew, src } = value;
    const { onDrop, onCrop, clear } = this;
    return (
      <div className={classnames("input-image", className)}>
        <Dropzone
          disableClick
          className="input-image__dropzone"
          activeClassName="input-image__dropzone--active"
          accept="image/jpeg, image/png"
          ref={dropzone => {
            this.dropzone = dropzone;
          }}
          onDrop={onDrop}
        >
          <div className="input-image__dropzone-helper">Drop files...</div>
          <div className="input-image__dropzone-content">
            <div className="input-image__image-container">
              {isNew && (
                <Cropper
                  ref={cropper => {
                    this.cropper = cropper;
                  }}
                  src={src}
                  aspectRatio={1}
                  autoCropArea={1}
                  imageSmoothingEnabled={false}
                  imageSmoothingQuality="high"
                  crop={onCrop}
                />
              )}

              {!isNew &&
                !isDefault && (
                  <span
                    className="input-image__preview-img"
                    style={{
                      backgroundImage: `url(${src})`
                    }}
                  />
                )}

              {!isNew &&
                isDefault && <InputImageDefault defaultImage={defaultImage} />}
            </div>
            <p className="input-image__text input-image__text--big">
              Drag the image here or click{" "}
              <span
                className="input-image__text-upload"
                onClick={this.openFileDialog}
              >
                upload
              </span>{" "}
              to browse your files
            </p>
            <p
              className="input-image__text input-image__text--small"
              onClick={this.openFileDialog}
            >
              Tap to upload the image
            </p>
          </div>
        </Dropzone>
        {!isDefault && (
          <div className="input-image__clear-btn" onClick={clear}>
            &#10006;
          </div>
        )}
      </div>
    );
  }
}

export default InputFile;
