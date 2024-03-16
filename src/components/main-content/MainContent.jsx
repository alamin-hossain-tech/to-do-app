import { Divider, Flex, Select } from "antd";
import CompletedColumn from "../completed-column/CompletedColumn";
import InProgressColumn from "../in-progress-column/InProgressColumn";
import ToDoColumn from "../todo-colum/ToDoColumn";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { mutateTask } from "../../app/features/to-do/todo.slice";

const MainContent = () => {
  const state = useSelector((state) => state.toDos);
  const [query, setQuery] = useState("all");
  const dispatch = useDispatch();
  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!result.destination) return;

    if (destination.droppableId === source.droppableId) {
      const newItems = Array.from(state[destination.droppableId]);
      const [removed] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, removed);
      dispatch(
        mutateTask({
          path: destination.droppableId,
          value: newItems,
        })
      );
    } else {
      console.log("false");
    }
  };
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
          <DragDropContext onDragEnd={onDragEnd}>
            <ToDoColumn query={query} />
            <InProgressColumn />
            <CompletedColumn />
          </DragDropContext>
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
