"use client";
import React, { useState } from "react";
import { Button, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const page = () => {
  const [dueDate, setDueDate] = useState(null);

  return (
    <>
      <div className="max-w-xl space-y-6">
        <TextField.Root placeholder="Task" />
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          placeholderText="Click to add a due date"
        />
        <SimpleMDE
          // onChange={handleDescriptionChange}
          options={{
            placeholder: "Description...",
          }}
        />
        
        <Button>Add Task</Button>
      </div>
    </>
  );
};

export default page;
