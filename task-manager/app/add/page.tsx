"use client";
import React, { useState } from "react";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import axios from 'axios'
import "easymde/dist/easymde.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from "next/navigation";

interface IssueForm {
  title: string;
  dueDate: string;
  description: string;
}

const page = () => {
  const router = useRouter();
  const {register, control, handleSubmit} = useForm<IssueForm>();
  const [dueDate, setDueDate] = useState(null);

  return (
    <>
      <form className="max-w-xl space-y-6" 
      onSubmit={handleSubmit(async (data) => {
        await axios.post('/api/tasks', data);
        router.push('/');
      })}>
        <TextField.Root placeholder="Task" {...register('title')} />
        <DatePicker {...register('dueDate')}
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          placeholderText="Click to add a due date"
        />
        <Controller
          name="description"
          control={control}
          render={({ field }) => <SimpleMDE placeholder="Additional information..." {...field} /> }
        />
        {/* <SimpleMDE
          // onChange={handleDescriptionChange}
          options={{
            placeholder: "Description...",
          }}
        /> */}
        
        <Button>Add Task</Button>
      </form>
    </>
  );
};

export default page;
