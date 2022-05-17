import AuthForm, { authType } from "components/AuthForm/AuthForm";
import { useTranslation } from "react-i18next";
import s from "./LoginPage.module.scss";

import LanguageSwitcher from "assets/LanguageSwitcher/LanguageSwitcher";

const LoginPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <section className={s.section}>
        <LanguageSwitcher />
        <div className={s.container}>
          <div className={s.wrapper}>
            <div className={s.hero}>
              <h1 className={s.title}>{t("loginPage.financeApp")}</h1>
            </div>
          </div>
          <div className={s.form}>
            <AuthForm type={authType.login} />
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginPage;
