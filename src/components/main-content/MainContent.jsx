import { Divider, Flex, Select } from "antd";
import CompletedColumn from "../completed-column/CompletedColumn";
import InProgressColumn from "../in-progress-column/InProgressColumn";
import ToDoColumn from "../todo-colum/ToDoColumn";

const MainContent = () => {
  return (
    <Flex gap={"large"}>
      <div style={{ flex: 3 }}>
        <Flex justify="space-between">
          <h3>All my task</h3>
          <Select
            placeholder="Filter"
            style={{ width: 150 }}
            options={[
              { value: "jack", label: "Jack" },
              { value: "lucy", label: "Lucy" },
              { value: "Yiminghe", label: "yiminghe" },
            ]}
          />
        </Flex>
        <Divider />
        <Flex gap={"large"}>
          <ToDoColumn />
          <InProgressColumn />
          <CompletedColumn />
        </Flex>
      </div>
      <div
        style={{
          flex: 1,
          backgroundColor: "white",
          height: "calc(100vh - 144px)",
          borderRadius: "8px",
        }}
      ></div>
    </Flex>
  );
};

export default MainContent;
