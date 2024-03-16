import { Flex, Popconfirm, Space } from "antd";
import EditIcon from "../icons/edit-icon";
import DeleteIcon from "../icons/delete-icon";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../app/features/to-do/todo.slice";

const TaskItem = ({ todo, path }) => {
  const dispatch = useDispatch();
  const getColor = (priority) => {
    switch (priority) {
      case "low":
        return "#90EE90";
      case "medium":
        return "#FFD700";
      case "high":
        return "#FFA07A";
      default:
        return "#f2f2f2";
    }
  };
  return (
    <Flex
      justify="space-between"
      // align="start"
      style={{ backgroundColor: "white", padding: 16, borderRadius: 8 }}
      gap={"middle"}
    >
      <div>
        <div
          style={{
            width: 48,
            height: 8,
            borderRadius: 4,
            backgroundColor: getColor(todo.priority),
            marginBottom: 8,
          }}
        ></div>
        <h4>{todo.name}</h4>
        <p style={{ textAlign: "justify" }}>{todo.description}</p>
      </div>
      <Space>
        <EditIcon cursor="pointer" />

        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={() =>
            dispatch(
              deleteTask({
                path,
                id: todo.id,
              })
            )
          }
          okText="Yes"
          cancelText="No"
        >
          <DeleteIcon color="red" cursor="pointer" />
        </Popconfirm>
      </Space>
    </Flex>
  );
};

export default TaskItem;
