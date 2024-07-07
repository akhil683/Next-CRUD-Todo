"use client";
import { ChangeEvent, FormEvent, useState } from "react";
import Todo from "@/components/Todo";
import { Toaster, toast } from "react-hot-toast";

interface FormType {
  title: string;
  description: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormType>({
    title: "",
    description: "",
  });

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
      toast.success("Successfully created Todo");
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
            <Todo />
            <Todo />
            <Todo />
          </tbody>
        </table>
      </div>
    </>
  );
}
