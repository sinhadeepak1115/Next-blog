"use client";
import { useSession } from "next-auth/react";
import React, { ChangeEvent, FormEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize";
import axios from "axios";

interface FormData {
  title: string;
  content: string;
}

const FormNewPost = () => {
  const [formData, setFormData] = useState<FormData>({
    title: "",
    content: "",
  });

  const { data } = useSession();

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/post", formData);
      console.log(response.data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <div className="flex justify-center mb-4">
        <h1 className="text-center text-2xl font-bold">New Post</h1>
      </div>
      <div>
        <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
          <div>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              type="text"
              placeholder="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div className="py-3">
            <ReactTextareaAutosize
              minRows={5}
              name="content"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Enter the content of your post"
              value={formData.content}
              onChange={handleChange}
            />
            <div className="text-center">
              <div className="px-2">
                <button
                  disabled={!data?.user?.email}
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormNewPost;
