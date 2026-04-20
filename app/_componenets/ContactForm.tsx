'use client';

import React, { useActionState, useEffect } from 'react';
import { ContactType } from '../_types/contact';
import { useRouter } from 'next/navigation';

/** ✅ State shape */
type ActionState = {
  success?: boolean;
  error?: string;
};

/** ✅ Proper server action type */
type ServerAction = (
  prevState: ActionState | null,
  formData: FormData
) => Promise<ActionState>;

type EmpContactProps = {
  action: ServerAction;
  contact?: ContactType;
};

const ContactForm = ({ action, contact }: EmpContactProps) => {
  /** ✅ Correct typing (no error now) */
  const [state, formAction] = useActionState<ActionState | null, FormData>(
    action,
    null
  );

  const router = useRouter();

  /** ✅ Redirect after success */
  useEffect(() => {
    if (state?.success) {
      router.push('/employee');
    }
  }, [state, router]);

  return (
    <form action={formAction} className="space-y-4">
  <input type='hidden' name='id' value={contact?.id || ''} />
      {/* Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          defaultValue={contact?.name || ''}
          required
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-2"
        />
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          name="email"
          defaultValue={contact?.email || ''}
          required
          className="mt-1 w-full rounded-md border-gray-300 shadow-sm p-2"
        />
      </div>

      {/* Error UI */}
      {state?.error && (
        <p className="text-red-500 text-sm">{state.error}</p>
      )}

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Save Contact
      </button>
    </form>
  );
};

export default ContactForm;