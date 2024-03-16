import { Input, Modal, Select, Space } from "antd";
import TextArea from "antd/es/input/TextArea";

const AddTaskModal = ({ isModalOpen, setIsModalOpen, handleSave }) => {
  return (
    <Modal
      title="Add New Task"
      open={isModalOpen}
      onOk={handleSave}
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
  );
};

export default AddTaskModal;
