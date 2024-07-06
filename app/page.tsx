"use client";
import { useState } from "react";
import Todo from "@/components/Todo";

interface FormType {
  title: string;
  description: string;
}

export default function Home() {
  const [formData, setFormData] = useState<FormType>({
    title: "",
    description: "",
  });

  return (
    <>
      <form className="flex items-end flex-col gap-2 max-w-[700px] mt-24 px-2 mx-auto">
        <input
          type="text"
          name="title"
          placeholder="Enter Title"
          className="px-3 py-2 border-2 border-[#999] placeholder-[#888] outline-[#777] focus:border-[#777] w-full rounded-xl"
        />
        <textarea
          name="description"
          placeholder="Enter Description"
          className="px-3 py-2 border-2 border-[#999] placeholder-[#888] outline-[#777] focus:border-[#777] w-full rounded-xl"
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
