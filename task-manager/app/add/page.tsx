"use client";
import React, { useState } from "react";
import { Button, TextField, TextArea } from "@radix-ui/themes";
// import SimpleMDE from "react-simplemde-editor";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const page = () => {
  const [dueDate, setDueDate] = useState(null);

  return (
    <>
      <div className="max-w-xl space-y-3">
        <TextField.Root placeholder="Task" />
        <DatePicker
          selected={dueDate}
          onChange={(date) => setDueDate(date)}
          placeholderText="Click to add a due date"
        />
        <TextArea className="flex" placeholder="Additional information…" />
        
        {/* <SimpleMDE
          onChange={handleDescriptionChange}
          options={{
            placeholder: "Description...",
          }}
        /> */}
        
        <Button>Add Task</Button>
      </div>
    </>
  );
};

export default page;
