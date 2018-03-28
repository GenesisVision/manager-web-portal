import SwaggerFileApi from "../../services/api-client/swagger-file-api";

const getFileUrl = id => {
  if (id === null) return "";
  return `${process.env.REACT_APP_API_URL}/api/files/${id}`;
};

const uploadFile = file => {
  return SwaggerFileApi.apiFilesUploadPost(file).then(response => response.id);
};
const filesService = { getFileUrl, uploadFile };
export default filesService;
