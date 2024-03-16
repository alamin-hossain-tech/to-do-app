import { Flex } from "antd";
import React from "react";

const InProgressColumn = () => {
  return (
    <div style={{ flex: 1 }}>
      <Flex
        align="center"
        gap={"small"}
        style={{
          backgroundColor: "white",
          padding: "12px 24px",
          borderRadius: 8,
          color: "var(--primary-color)",
        }}
      >
        <div
          style={{
            width: "16px",
            height: "16px",
            backgroundColor: "var(--primary-color)",
            borderRadius: 4,
          }}
        ></div>
        <h4>In Progress</h4>
      </Flex>
    </div>
  );
};

export default InProgressColumn;
