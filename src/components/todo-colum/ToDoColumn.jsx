import { Button, Flex, Space } from "antd";
import { forwardRef, useState } from "react";
import PlusIcon from "../icons/plus-icon";
import AddTaskModal from "./AddTaskModal";
import { useDispatch, useSelector } from "react-redux";
import { mutateTask } from "../../app/features/to-do/todo.slice";

const ToDoColumn = forwardRef((props, ref) => {
  const tasks = useSelector((state) => state.toDos);
  const dispatch = useDispatch();
  console.log(tasks);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSave = () => {};
  return (
    <div ref={ref} style={{ flex: 1 }}>
      <Space direction="vertical" size={12} style={{ width: "100%" }}>
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
      </Space>
      {/* modal for adding task */}
      <AddTaskModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleSave={handleSave}
      />
    </div>
  );
});

ToDoColumn.displayName = "ToDoColumn";

export default ToDoColumn;
