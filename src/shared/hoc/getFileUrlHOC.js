import React from "react";
import filesService from "../services/file-service";

const getFileUrlHOC = (Component, name) => {
  return props => {
    const newProps = {
      ...props,
      [name]: filesService.getFileUrl(props[name])
    };
    return <Component {...newProps} />;
  };
};

export default getFileUrlHOC;
