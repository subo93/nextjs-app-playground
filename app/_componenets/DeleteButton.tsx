
"use client";
import React, { useActionState } from "react";
import { ContactType } from "../_types/contact";

type DeleteButtonProps = {
  action: (prevState: unknown, formData: FormData) => Promise<unknown>;
  contact?: ContactType;
};

const DeleteButton = ({ contact, action }: DeleteButtonProps) => {
  const [state, formAction] = useActionState(action, null);

  return (
    
    <form action={formAction} >
      <p>DEBUG ID:::: {contact?.id}</p>
      <input type="hidden" name="id" value={contact?.id} />

      <button
        type="submit"
        className="flex items-center gap-2 px-3 py-1 border border-red-300 text-red-600 rounded"
        onClick={(e) => {
          if (!window.confirm("Are you sure?")) {
            e.preventDefault();
          }
        }}
      >
        Delete
      </button>
    </form>
  );
};

export default DeleteButton;