import styles from "./dashboard.module.css";
import sidebarLogo from "../../images/logo.png";
import DashboardIcon from "../../images/dashboard.png";
import CompanyIcon from "../../images/companies.png";
import OrderPoolIcon from "../../images/orders.png";
import OrderHistoryIcon from "../../images/history.png";
import SubscriptionIcon from "../../images/subscription.png";
import EarningsIcon from "../../images/earnings.png";
import ReportIcon from "../../images/report.png";
import SettingsIcon from "../../images/settings.png";
import SupportIcon from "../../images/supports.png";
import LogoutIcon from "../../images/sign-out.png";
import SearchIcon from "../../images/search.png";
import UserAvatar from "../../images/photo.png";
import { Link } from "react-router-dom";

import AreaChart from "../../components/chart/Chart";

const Dashboard = () => {
  return (
    <section className={styles.dashboardContainer}>
      <section className={styles.sidebarContainer}>
        <div className={styles.sidebarLogo}>
          <img src={sidebarLogo} alt="sidebar logo" className={styles.logo} />
        </div>
        <section className={styles.sidebarContent}>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <Link>
                <img src={DashboardIcon} alt="dashboard icon" />
                <span className={styles.text}>Dashboard</span>
              </Link>
            </li>
          </ul>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <Link>
                <img src={CompanyIcon} alt="dashboard icon" />
                <span className={styles.text}>Company</span>
              </Link>
            </li>
          </ul>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <Link>
                <img src={OrderPoolIcon} alt="dashboard icon" />
                <span className={styles.text}>OrderPool</span>
              </Link>
            </li>
          </ul>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <Link>
                <img src={OrderHistoryIcon} alt="dashboard icon" />
                <span className={styles.text}>OrderHistory</span>
              </Link>
            </li>
          </ul>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <Link>
                <img src={SubscriptionIcon} alt="dashboard icon" />
                <span className={styles.text}>Subscription</span>
              </Link>
            </li>
          </ul>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <Link>
                <img src={EarningsIcon} alt="dashboard icon" />
                <span className={styles.text}>Earnings</span>
              </Link>
            </li>
          </ul>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <Link>
                <img src={ReportIcon} alt="dashboard icon" />
                <span className={styles.text}>Report</span>
              </Link>
            </li>
          </ul>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <Link>
                <img src={SettingsIcon} alt="dashboard icon" />
                <span className={styles.text}>Settings</span>
              </Link>
            </li>
          </ul>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <Link>
                <img src={SupportIcon} alt="dashboard icon" />
                <span className={styles.text}>Support</span>
              </Link>
            </li>
          </ul>
          <ul className={styles.sidebarList}>
            <li className={styles.sidebarListItem}>
              <Link to="/login">
                <img src={LogoutIcon} alt="dashboard icon" />
                <span className={styles.text}>Logout</span>
              </Link>
            </li>
          </ul>
        </section>
      </section>

      <section className={styles.mainContainer}>
        <section className={styles.navbarContainer}>
          <div className={styles.searchContainer}>
            <img src={SearchIcon} alt="" />
            <input type="search" placeholder="Search" />
          </div>
          <div className={styles.userProfile}>
            <div className={styles.userAvatar}>
              <img src={UserAvatar} alt="user avatar" />
            </div>
            <div className={styles.userInfo}>
              <span>Jude Adam</span>
              <small>Admin</small>
            </div>
          </div>
        </section>

        <section className={styles.dashboardAnalysis}>
          <h3>Dashboard</h3>
          <div className={styles.dashboardWrapper}>
            <div className={styles.leftContainer}>
              <div className={styles.card}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat aspernatur fugiat sint doloremque sed sequi possimus
                alias harum odit totam!
              </div>
              <div className={styles.card}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat aspernatur fugiat sint doloremque sed sequi possimus
                alias harum odit totam!
              </div>
              <div className={styles.card}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat aspernatur fugiat sint doloremque sed sequi possimus
                alias harum odit totam!
              </div>
              <div className={styles.card}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Quaerat aspernatur fugiat sint doloremque sed sequi possimus
                alias harum odit totam!
              </div>
            </div>
            <div className={styles.rightContainer}>
              <div className={styles.toprightContainer}>
                <div className={styles.topRightOne}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  expedita neque consequuntur delectus quis consequatur?
                </div>
                <div className={styles.topRightTwo}>
                  <AreaChart />
                </div>
              </div>
              <div className={styles.bottomrightContainer}>
                <div className={styles.bottomRightOne}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum, soluta voluptatum. Aspernatur quaerat laboriosam
                  voluptates?
                </div>
                <div className={styles.bottomRightTwo}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
                  ullam, possimus ex recusandae hic nesciunt!
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};
export default Dashboard;
