import React from "react";
import ContactForm from "../../_componenets/ContactForm";
import { createContactAction } from "../../action/contacts";
import { getContactById } from "@/app/api/contact";

const Newpage = async ({params}: {params: Promise<{id:string}>}) => {

   const {id} = await params;
   //console.log("ID for new contact:::::::::::::", id);
   // const contact = await getContactById(id);

   // console.log("Contact fetched for create!:::::::::::::", contact);
  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow  mt-10 text-center">
      <h1 className="text-2xl fontbold mb-6">Add New Contact</h1>
      <ContactForm action={createContactAction} />
    </div>
  );
};

export default Newpage;
