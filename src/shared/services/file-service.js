import FileApi from "services/api-client/file-api";

const getFileUrl = id => {
  if (id === null) return "";
  return `${process.env.REACT_APP_API_URL}/api/files/${id}`;
};

const uploadFile = (file, authorization) => {
  return FileApi.v10FileUploadPost(file, { authorization }).then(
    response => response.id
  );
};

const addLogoSrc = key => data => {
  const target = data[key];

  if (target === null || target === undefined) {
    return data;
  }

  if (Array.isArray(target)) {
    target.forEach(ip => {
      ip.logoSrc = getFileUrl(ip.logo);
    });
  }

  if (typeof target === "object") {
    target.logoSrc = getFileUrl(target.logo);
  }

  if (typeof target === "string") {
    data.logoSrc = getFileUrl(target);
  }

  return data;
};

const filesService = { getFileUrl, uploadFile, addLogoSrc };
export default filesService;
