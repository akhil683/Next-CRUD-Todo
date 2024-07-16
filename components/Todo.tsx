import React from "react";

interface TodoPropType {
  data: {
    _id: string;
    title: string;
    description: string;
    isCompleted: boolean;
  };
  deleteTodo: (id: string) => void;
  completeTodo: (id: string) => void;
  count: number;
}

const Todo = ({ data, deleteTodo, completeTodo, count }: TodoPropType) => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {count + 1}
      </th>
      <td className={`${data.isCompleted ? "line-through" : ""} px-6 py-4`}>
        {data.title}
      </td>
      <td className={`${data.isCompleted ? "line-through" : ""} px-6 py-4`}>
        {data.description}
      </td>
      <td className="px-6 py-4">
        {data.isCompleted ? "Completed" : "Pending"}
      </td>
      <td className="px-6 py-4 flex gap-1">
        <button
          onClick={() => deleteTodo(data._id)}
          className="py-2 px-4 bg-red-600 hover:bg-red-500 duration-100 rounded-lg text-white"
        >
          Delete
        </button>
        {!data.isCompleted && (
          <button
            onClick={() => completeTodo(data._id)}
            className="py-2 px-4 bg-green-600 hover:bg-green-500 duration-100 rounded-lg text-white"
          >
            Done
          </button>
        )}
      </td>
    </tr>
  );
};

export default Todo;
