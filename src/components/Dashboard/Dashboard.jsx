import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Balance from "components/Balance";
import Currency from "components/Currency";
import Navigation from "components/Navigation";

import { MOBILE_ONLY } from "assets/constants/MEDIA";
import s from "./Dashboard.module.scss";

const Dashboard = () => {
  const isMobile = useMediaQuery(MOBILE_ONLY);
  return (
    <div className={s.container}>
      <div className={s.sidebar}>
        <div className={s.wrapper}>
          <Navigation />
          {!isMobile && <Balance />}
        </div>
        {!isMobile && <Currency />}
      </div>
      <Outlet />
    </div>
  );
};
export default Dashboard;
