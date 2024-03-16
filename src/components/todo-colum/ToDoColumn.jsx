import { Button, Flex, Space } from "antd";
import { forwardRef, useState } from "react";
import { useSelector } from "react-redux";
import PlusIcon from "../icons/plus-icon";
import AddTaskModal from "./AddTaskModal";
import TaskItem from "../task-item/TaskItem";

const ToDoColumn = forwardRef((props, ref) => {
  const { toDos } = useSelector((state) => state.toDos);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        <div
          style={{
            maxHeight: "calc(100vh - 340px)",
            overflow: "scroll",
            scrollbarGutter: "stable",
          }}
        >
          <Space direction="vertical">
            {toDos?.map((todo) => (
              <TaskItem key={todo.id} todo={todo} path="toDos" />
            ))}
          </Space>
        </div>
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
      <AddTaskModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </div>
  );
});

ToDoColumn.displayName = "ToDoColumn";

export default ToDoColumn;
