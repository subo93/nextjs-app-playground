
import React from "react";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";
import { ContactType } from "../_types/contact";
import DeleteButton from "./DeleteButton";
import { deleteContactAction } from "../action/contacts";

const EmployeeList = ({ contacts }: { contacts: ContactType[] }) => {
  return (
    <div className="space-y-4">
      <h2 className="font-bold text-lg">Employee List</h2>
      

      {contacts.map((contact) => (
        <div key={contact.id} className="p-4 border rounded-lg">
          <div className="flex justify-between items-center">
            <span>
              {contact.name} - {contact.email}
            </span>

            <Link href={`/employee/edit/${contact.id}`} className="flex items-center gap-2 text-blue-600">
              <FiEdit />
              Edit
            </Link>
            <DeleteButton action={deleteContactAction} contact={contact} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeList;