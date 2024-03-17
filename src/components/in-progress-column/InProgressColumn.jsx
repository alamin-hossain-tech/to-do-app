import { Flex, Space } from "antd";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { selectFilteredToDos } from "../../app/features/to-do/todo.slice";
import TaskItem from "../task-item/TaskItem";

const InProgressColumn = ({ query }) => {
  const { inProgress } = useSelector((state) =>
    selectFilteredToDos(state, query)
  );

  return (
    <div style={{ flex: 1 }}>
      <Space direction="vertical" size={12} style={{ width: "100%" }}>
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
        <Droppable droppableId="inProgress">
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
              {inProgress?.map((todo, index) => (
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
                      <TaskItem todo={todo} path={"inProgress"} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Space>
          )}
        </Droppable>
      </Space>
    </div>
  );
};

export default InProgressColumn;
