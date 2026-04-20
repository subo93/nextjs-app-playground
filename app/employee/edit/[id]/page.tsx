import ContactForm from '@/app/_componenets/ContactForm'
import { createContactAction, updateContactAction } from '@/app/action/contacts'
import { getContactById, updateContact } from '@/app/api/contact'
import React, { use } from 'react'

const Editpage =  ({params}: {params: Promise<{id:string}>}) => {
 // const {id} = await params;
    const {id} = use(params);
  const contact = use(getContactById(id));
  console.log("Contact gonna edit is:::::::::::::", contact);
  return (
   <div className="max-w-md mx-auto p-4 bg-white rounded shadow  mt-10 text-center">
      <h1 className="text-2xl fontbold mb-6">Edit Contact</h1>
      <ContactForm action={updateContactAction} contact={contact}/>
    </div>
  )
}

export default Editpage
