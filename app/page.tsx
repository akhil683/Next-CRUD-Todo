"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import Todo from "@/components/Todo";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";

interface FormType {
  title: string;
  description: string;
}

export default function Home() {
  const initialFormData = {
    title: "",
    description: "",
  };
  const [formData, setFormData] = useState<FormType>(initialFormData);
  const [todoData, setTodoData] = useState([]);

  const fetchTodo = async () => {
    const res = await axios("/api");
    setTodoData(res.data.todos);
  };
  useEffect(() => {
    fetchTodo();
  }, []);

  const deleteTodo = async (id: string) => {
    console.log("delete", id);
    const res = await axios.delete("/api", {
      params: {
        mongoId: id,
      },
    });
    toast.success(res.data.msg);
    fetchTodo();
  };

  const completeTodo = async (id: string) => {
    const res = await axios.put(
      "/api",
      {},
      {
        params: {
          mongoId: id,
        },
      },
    );
    toast.success(res.data.msg);
    fetchTodo();
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    setFormData({ ...formData, [name]: e.target.value });
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      return toast.error("Title and Description is Required !");
    }
    try {
      const res = await axios.post("/api", formData);
      toast.success(res.data.msg);
      setFormData(initialFormData);
      await fetchTodo();
    } catch (e: any) {
      console.log(e.message);
      toast.error("Something went wrong !");
    }
  };

  return (
    <>
      <Toaster position="bottom-right" />
      <form
        onSubmit={onSubmitHandler}
        className="flex items-end flex-col gap-2 max-w-[700px] mt-24 px-2 mx-auto"
      >
        <input
          type="text"
          value={formData.title}
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 border-[#999] placeholder-[#888] outline-[#333] w-full rounded-xl"
          onChange={onChangeHandler}
        />
        <input
          name="description"
          value={formData.description}
          placeholder="Enter Description"
          className="px-3 py-2 border-2 border-[#999] placeholder-[#888] outline-[#333] w-full rounded-xl"
          onChange={onChangeHandler}
        />
        <button
          type="submit"
          className="bg-black hover:bg-[#222] py-2 rounded-xl px-6 text-white"
        >
          Add Todo
        </button>
      </form>

      {todoData.length > 0 ? (
        <div className="relative overflow-x-auto mx-auto  mt-12 max-w-[700px]">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Id
                </th>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {todoData.map((todo, index) => (
                <Todo
                  key={index}
                  data={todo}
                  count={index}
                  deleteTodo={deleteTodo}
                  completeTodo={completeTodo}
                />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className="text-center mt-16 text-4xl text-gray-800">No Todo</h1>
      )}
    </>
  );
}
