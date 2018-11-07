import Yup from "yup";

const profileImageValidationSchema = ({ t }) =>
  Yup.object().shape({
    logo: Yup.object().shape({
      width: Yup.number().min(
        300,
        t("create-program-page.settings.validation.image-resolution-incorrect")
      ),
      height: Yup.number().min(
        300,
        t("create-program-page.settings.validation.image-resolution-incorrect")
      ),
      size: Yup.number().max(
        2097152,
        t("create-program-page.settings.validation.image-file-is-large")
      )
    })
  });

export default profileImageValidationSchema;
