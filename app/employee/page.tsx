

import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";
import Link from "next/link";
import { ContactType } from "../_types/contact";
import EmployeeList from "../_componenets/EmployeeList";
import { deleteContactAction } from "../action/contacts";

const ContactPage = async () => {
  const user = await getSession();

  if (!user) {
    return (
      <div>
        Please <Link href="/login">login</Link> to view your contacts
      </div>
    );
  }

  const contacts = await getContacts(user.id);
  console.log("User ID:::::::", user.id);
  console.log("Employees Contacts fetched:::::::::::::", contacts);

  if (!contacts || contacts.length === 0) {
    return (
      <div>
        No contacts found. Please add some contacts.
        <br />
        <Link href="/employee/new">Add Contact</Link>
      </div>
    );
  }

  return (
    <div>
       <Link href="/employee/new">Add Contact</Link>
      <EmployeeList contacts={contacts} />
    </div>
  );
};

export default ContactPage;