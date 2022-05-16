import AuthForm, { authType } from "components/AuthForm/AuthForm";
import { useTranslation } from "react-i18next";

import s from "./RegistrationPage.module.scss";

const RegistrationPage = () => {
  const { t } = useTranslation();
  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.hero}>
            <h1 className={s.title}>{t("registrationPage.regPage")}</h1>
          </div>
        </div>
        <div className={s.form}>
          <AuthForm type={authType.registration} />
        </div>
      </div>
    </section>
  );
};
export default RegistrationPage;
