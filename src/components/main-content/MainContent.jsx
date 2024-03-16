import { Button, Divider, Flex, Input, Modal, Select, Space } from "antd";
import PlusIcon from "../icons/plus-icon";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";

const MainContent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          <Space direction="vertical" size={12} style={{ flex: 1 }}>
            <Flex
              align="center"
              gap={"small"}
              style={{
                backgroundColor: "white",
                padding: "12px 24px",
                borderRadius: 8,
              }}
            >
              <div
                style={{
                  width: "16px",
                  height: "16px",
                  backgroundColor: "var(--text-10)",
                  borderRadius: 4,
                }}
              ></div>
              <h4>To Do</h4>
            </Flex>
            <Button
              size="large"
              type="primary"
              style={{ width: "100%" }}
              icon={<PlusIcon />}
              onClick={() => setIsModalOpen(true)}
            >
              Add New Task
            </Button>
            <Modal
              title="Add New Task"
              open={isModalOpen}
              //   onOk={handleOk}
              onCancel={() => setIsModalOpen(false)}
              okText="Save"
              okButtonProps={{ type: "primary" }}
            >
              <Space size={12} direction="vertical" style={{ width: "100%" }}>
                <div>
                  <div>
                    <label htmlFor="priority">Select Priority</label>
                  </div>
                  <Select
                    id="priority"
                    placeholder="Select priority"
                    allowClear
                    style={{ width: 150 }}
                    options={[
                      {
                        label: (
                          <Space align="center">
                            <div
                              style={{
                                width: 10,
                                height: 10,
                                borderRadius: 4,
                                backgroundColor: "#90EE90",
                              }}
                            ></div>
                            <span>Low</span>
                          </Space>
                        ),
                        value: "low",
                      },
                      {
                        label: (
                          <Space align="center">
                            <div
                              style={{
                                width: 10,
                                height: 10,
                                borderRadius: 4,
                                backgroundColor: "#FFD700",
                              }}
                            ></div>
                            <span>Medium</span>
                          </Space>
                        ),
                        value: "medium",
                      },
                      {
                        label: (
                          <Space align="center">
                            <div
                              style={{
                                width: 10,
                                height: 10,
                                borderRadius: 4,
                                backgroundColor: "#FFA07A",
                              }}
                            ></div>
                            <span>High</span>
                          </Space>
                        ),
                        value: "high",
                      },
                    ]}
                  />
                </div>
                <div>
                  <label htmlFor="name">Task Name</label>
                  <Input id="name" />
                </div>
                <div>
                  <label htmlFor="description">Task Description</label>
                  <TextArea id="description" rows={4} />
                </div>
              </Space>
            </Modal>
          </Space>
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
