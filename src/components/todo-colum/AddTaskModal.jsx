import { Button, Flex, Form, Input, Modal, Select, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import { useDispatch } from "react-redux";
import { addTask } from "../../app/features/to-do/todo.slice";

const AddTaskModal = ({ isModalOpen, setIsModalOpen }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const handleSubmit = (value) => {
    dispatch(
      addTask({
        path: "toDos",
        value,
      })
    );
    form.resetFields();
    setIsModalOpen(false);
  };

  return (
    <Modal
      title="Add New Task"
      centered
      open={isModalOpen}
      footer={[]}
      onCancel={() => setIsModalOpen(false)}
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        name="task-save-form"
        labelCol={{
          span: 6,
        }}
      >
        <Form.Item
          label="Select Priority"
          name={"priority"}
          rules={[
            {
              required: true,
              message: "Please select priority",
            },
          ]}
        >
          <Select
            placeholder="Select priority"
            allowClear
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
        </Form.Item>
        <Form.Item
          name={"name"}
          label="Task Name"
          rules={[
            {
              required: true,
              message: "Please enter a name please",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item initialValue={""} name={"description"} label="Description">
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Flex justify="end" gap={"middle"}>
            <Button danger onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
          </Flex>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default AddTaskModal;
