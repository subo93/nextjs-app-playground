

'use server';
import { revalidatePath } from "next/cache";
import { createContact, deleteContactn, updateContact } from "../api/contact";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";


export const createContactAction = async (
    prevState: unknown, formData: FormData): Promise<{ success: boolean; error?: string }> => {
    // Logic to create a new contact
    if (!formData) {
        console.error("Form data is null or undefined");
        return { success: false, error: "Form data is required" };
    }

    const user = await getSession();

    const newContact: ContactType = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        userId: Number(user?.id)
    }

    try {
        console.log("Creating contact with data:", newContact);
        await createContact(newContact);
        revalidatePath("/employee"); // Revalidate the employee page after creation
        return { success: true };
    } catch (error) {
        console.error("Error creating contact:", error);
        return { success: false, error: "Failed to create contact" };
    }
}

export const updateContactAction = async (prevState: unknown, formData: FormData): Promise<{ success: boolean; error?: string }> => {

if (!formData) {
        console.error("Form data is null or undefined");
        return { success: false, error: "Form data is required" };
    }
    const id = formData.get("id") as string;

    const user = await getSession();

    const updatedContact: ContactType = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        userId: Number(user?.id)
    }

    try {
        console.log("Updating contact with data:", updatedContact);
        await updateContact(id, updatedContact);
        revalidatePath("/employee"); // Revalidate the employee page after update
        return { success: true };
    } catch (error) {
        console.error("Error updating contact:", error);
        return { success: false, error: "Failed to update contact" };
    }
}


export const deleteContactAction = async (prevState: unknown, formData: FormData) => {
    console.log("delete action 01::::::::::::::", formData);

    const id = formData.get("id") as string;
    try {
        console.log("delete action 02::::::::::::::", formData);

        await deleteContactn(id);
        revalidatePath("/employee"); // Revalidate the employee page after deletion
        return { success: true };
    }
    catch (error) {
        console.log("delete action error::::::::::::::", formData);
        console.error("Error deleting contact:", error);
    }


}