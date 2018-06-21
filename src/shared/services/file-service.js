import SwaggerFileApi from "../../services/api-client/swagger-file-api";

const getFileUrl = id => {
  if (id === null) return "";
  return `${process.env.REACT_APP_API_URL}/api/files/${id}`;
};

const uploadFile = file => {
  return SwaggerFileApi.apiFilesUploadPost(file).then(response => response.id);
};

const addLogoSrc = key => data => {
  const target = data[key];

  if (Array.isArray(target)) {
    target.forEach(ip => {
      ip.logoSrc = getFileUrl(ip.logo);
    });
  }

  if (typeof target === "object") {
    target.logoSrc = getFileUrl(target.logo);
  }

  return data;
};

const filesService = { getFileUrl, uploadFile, addLogoSrc };
export default filesService;
