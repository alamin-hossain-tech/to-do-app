import { Button, Flex, Space } from "antd";
import { forwardRef, useState } from "react";
import { useSelector } from "react-redux";
import PlusIcon from "../icons/plus-icon";
import AddTaskModal from "./AddTaskModal";
import TaskItem from "../task-item/TaskItem";
import { selectFilteredToDos } from "../../app/features/to-do/todo.slice";
import { Draggable, Droppable } from "react-beautiful-dnd";

const ToDoColumn = forwardRef(({ query }, ref) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toDos } = useSelector((state) => selectFilteredToDos(state, query));

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
        <Droppable droppableId="toDos">
          {(provided, snap) => (
            <Space
              style={{
                maxHeight: "calc(100vh - 340px)",
                overflow: "scroll",
                scrollbarGutter: "stable",
                width: "100%",
                backgroundColor: snap.isUsingPlaceholder
                  ? "var(--text-10)"
                  : "transparent",
                minHeight: 20,
                borderRadius: 4,
              }}
              ref={provided.innerRef}
              {...provided.droppableProps}
              direction="vertical"
            >
              {toDos?.map((todo, index) => (
                <Draggable
                  key={todo.id}
                  index={index}
                  draggableId={todo.id.toString()}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="task-item"
                    >
                      <TaskItem todo={todo} path={"toDos"} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Space>
          )}
        </Droppable>
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
