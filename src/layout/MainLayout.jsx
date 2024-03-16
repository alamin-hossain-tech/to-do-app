import { Flex, Image, Layout } from "antd";
import DashboardIcon from "../components/icons/dashboard-icon";
import TaskIcon from "../components/icons/task-icon";
import AnalyticsIcon from "../components/icons/analytics-icon";
import ProfileIcon from "../components/icons/profile-icon";
import MessageIcon from "../components/icons/message-icon";
import SettingIcon from "../components/icons/setting-icon";
import LogoutIcon from "../components/icons/logout-icon";
import { useState } from "react";
const { Header, Sider, Content } = Layout;

const headerStyle = {
  paddingInline: "40px",
  height: 64,
  backgroundColor: "var(--white-color)",
};
const contentStyle = {
  padding: "40px",
};
const siderStyle = {
  padding: "40px 35px",
  backgroundColor: "var(--white-color)",
  height: "100vh",
  textAlign: "center",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
};

const menuList = [
  { id: "item-1", name: "Dashboard", icon: <DashboardIcon /> },
  { id: "item-2", name: "Task", icon: <TaskIcon /> },
  { id: "item-3", name: "Analytics", icon: <AnalyticsIcon /> },
  { id: "item-4", name: "Profile", icon: <ProfileIcon /> },
  { id: "item-5", name: "Message", icon: <MessageIcon /> },
  { id: "item-6", name: "Setting", icon: <SettingIcon /> },
  { id: "item-7", name: "Log out", icon: <LogoutIcon /> },
];

const MainLayout = ({ children }) => {
  const [selectedMenu, setSelectedMenu] = useState("Task");

  return (
    <Layout style={layoutStyle}>
      <Sider width="260px" style={siderStyle}>
        <Image src="logo.png" width={"45px"} />
        <Flex vertical gap={"middle"} style={{ marginTop: "24px" }}>
          {menuList.map((menuItem) => (
            <Flex
              style={{
                paddingInline: "12px",
                borderRadius: "8px",
                backgroundColor:
                  selectedMenu === menuItem.name
                    ? "var(--primary-color)"
                    : "transparent",
                color:
                  selectedMenu === menuItem.name
                    ? "var(--white-color)"
                    : "var(--text-50)",

                cursor: "pointer",
              }}
              align="center"
              gap={"middle"}
              key={menuItem.id}
              onClick={() => setSelectedMenu(menuItem.name)}
            >
              {menuItem.icon}
              <p>{menuItem.name}</p>
            </Flex>
          ))}
        </Flex>
      </Sider>
      <Layout>
        <Header style={headerStyle}>Header</Header>
        <Content style={contentStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
};
export default MainLayout;
