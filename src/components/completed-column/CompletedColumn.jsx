import { Flex } from "antd";
import React from "react";

const CompletedColumn = () => {
  return (
    <div style={{ flex: 1 }}>
      <Flex
        align="center"
        gap={"small"}
        style={{
          backgroundColor: "white",
          padding: "12px 24px",
          borderRadius: 8,
          color: "var(--green-100)",
        }}
      >
        <div
          style={{
            width: "16px",
            height: "16px",
            backgroundColor: "var(--green-100)",
            borderRadius: 4,
          }}
        ></div>
        <h4>Completed</h4>
      </Flex>
    </div>
  );
};

export default CompletedColumn;
