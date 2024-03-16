import { Layout } from "antd";
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
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  // maxWidth: "calc(50% - 8px)",
};
const MainLayout = () => (
  <Layout style={layoutStyle}>
    <Sider width="260px" style={siderStyle}>
      Sider
    </Sider>
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>Content</Content>
    </Layout>
  </Layout>
);
export default MainLayout;
