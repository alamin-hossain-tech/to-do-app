import { Col, Divider, Flex, List, Row, Select, Space, Statistic } from "antd";
import CompletedColumn from "../completed-column/CompletedColumn";
import InProgressColumn from "../in-progress-column/InProgressColumn";
import ToDoColumn from "../todo-colum/ToDoColumn";
import { useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  mutateTask,
  selectFilteredToDos,
} from "../../app/features/to-do/todo.slice";
import StatsPieChart from "../stats-pie-chart/StatsPieChart";

const MainContent = () => {
  const [query, setQuery] = useState("all");
  const state = useSelector((state) => state.toDos);
  const filterState = useSelector((state) => selectFilteredToDos(state, query));
  const dispatch = useDispatch();

  const stats = {
    total: Object.keys(state)
      .map((key) => state[key].length)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0),
    completed: state.completed.length,
    inProgress: state.inProgress.length,
    toDo: state.toDos.length,
  };

  // handle drag and drop
  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!result.destination) return;

    if (destination.droppableId === source.droppableId) {
      const prevArray = Array.from(state[destination.droppableId]);
      const newItems = Array.from(filterState[destination.droppableId]);
      const [removed] = newItems.splice(source.index, 1);
      newItems.splice(destination.index, 0, removed);
      const mergedArray = newItems.concat(
        prevArray.filter((item) => !newItems.includes(item))
      );
      dispatch(
        mutateTask({
          path: destination.droppableId,
          value: mergedArray,
        })
      );
    } else {
      const prevSourceArray = Array.from(state[source.droppableId]);
      const sourceArray = Array.from(filterState[source.droppableId]);
      const prevDestinationArray = Array.from(state[destination.droppableId]);
      const destinationArray = Array.from(filterState[destination.droppableId]);
      const [removed] = sourceArray.splice(source.index, 1);
      destinationArray.splice(destination.index, 0, removed);
      const mergedDestinationArray = destinationArray.concat(
        prevDestinationArray.filter((item) => !destinationArray.includes(item))
      );

      const mergedSourceArray = sourceArray
        .concat(prevSourceArray.filter((item) => !sourceArray.includes(item)))
        .filter((item) => item !== removed);

      dispatch(
        mutateTask({
          path: destination.droppableId,
          value: mergedDestinationArray,
        })
      );
      dispatch(
        mutateTask({
          path: source.droppableId,
          value: mergedSourceArray,
        })
      );
    }
  };
  return (
    <Flex gap={"large"}>
      <div style={{ flex: 3, flexShrink: 0 }}>
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
            <InProgressColumn query={query} />
            <CompletedColumn query={query} />
          </DragDropContext>
        </Flex>
      </div>
      <div
        style={{
          flex: 1,
          // flexShrink: 0,
          backgroundColor: "white",
          height: "calc(100vh - 144px)",
          borderRadius: "8px",
          // padding: 8,
        }}
      >
        {/* Stats  */}
        <div style={{ padding: 20 }}>
          <div style={{ color: "var(--text-color)", textAlign: "center" }}>
            <h4> Priority Indicator</h4>
            <Space size={24}>
              <Flex align="center" gap={5}>
                <div
                  style={{
                    width: 32,
                    height: 8,
                    backgroundColor: "#FFA07A",
                    borderRadius: 4,
                  }}
                ></div>
                <p>High</p>
              </Flex>
              <Flex align="center" gap={5}>
                <div
                  style={{
                    width: 32,
                    height: 8,
                    backgroundColor: "#FFD700",
                    borderRadius: 4,
                  }}
                ></div>
                <p>Medium</p>
              </Flex>
              <Flex align="center" gap={5}>
                <div
                  style={{
                    width: 32,
                    height: 8,
                    backgroundColor: "#90EE90",
                    borderRadius: 4,
                  }}
                ></div>
                <p>Low</p>
              </Flex>
            </Space>
          </div>
          <Divider />
          <Row gutter={[24, 24]}>
            <Col span={12}>
              <Statistic
                style={{ textAlign: "center" }}
                title="Total Task"
                value={stats.total}
              />
            </Col>
            <Col span={12}>
              <Statistic
                style={{ textAlign: "center" }}
                title="Completed Task"
                value={stats.completed}
              />
            </Col>
            <Col span={12}>
              <Statistic
                title="Remaining Task"
                style={{ textAlign: "center" }}
                value={stats.toDo}
              />
            </Col>
            <Col span={12}>
              <Statistic
                style={{ textAlign: "center" }}
                title="In Progress"
                value={stats.inProgress}
              />
            </Col>
          </Row>
          <Divider />
          <div style={{ height: 200, textAlign: "center" }}>
            <StatsPieChart stats={stats} />
            <Space size={24} style={{ marginTop: 24 }}>
              <Flex align="center" gap={5}>
                <div
                  style={{
                    width: 16,
                    height: 16,
                    backgroundColor: "#00C49F",
                    borderRadius: 4,
                  }}
                ></div>
                <p>Completed</p>
              </Flex>
              <Flex align="center" gap={5}>
                <div
                  style={{
                    width: 16,
                    height: 16,
                    backgroundColor: "#0088FE",
                    borderRadius: 4,
                  }}
                ></div>
                <p>Doing</p>
              </Flex>
              <Flex align="center" gap={5}>
                <div
                  style={{
                    width: 16,
                    height: 16,
                    backgroundColor: "#FF8042",
                    borderRadius: 4,
                  }}
                ></div>
                <p>Remaining</p>
              </Flex>
            </Space>
          </div>
        </div>
      </div>
    </Flex>
  );
};

export default MainContent;
