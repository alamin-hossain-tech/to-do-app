import { Divider, Flex, Select } from "antd";
import CompletedColumn from "../completed-column/CompletedColumn";
import InProgressColumn from "../in-progress-column/InProgressColumn";
import ToDoColumn from "../todo-colum/ToDoColumn";
import { useState } from "react";

const MainContent = () => {
  const [query, setQuery] = useState("all");
  return (
    <Flex gap={"large"}>
      <div style={{ flex: 3 }}>
        <Flex justify="space-between">
          <h3>All my task</h3>
          <Select
            onChange={(e) => {
              if (e) {
                setQuery(e);
              } else {
                setQuery("all");
              }
            }}
            allowClear
            placeholder="Filter"
            style={{ width: 150 }}
            options={[
              { value: "low", label: "Low" },
              { value: "medium", label: "Medium" },
              { value: "high", label: "High" },
            ]}
          />
        </Flex>
        <Divider />
        <Flex gap={"large"}>
          <ToDoColumn query={query} />
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
