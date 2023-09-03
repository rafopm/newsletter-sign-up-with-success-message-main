"use client";
import { useEffect, useState } from "react";
import { SubscriptionForm } from "../../components/SubscriptionForm";
import { SubscriptionSuccess } from "../../components/SubscriptionSuccess";

export default function Home() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (submittedEmail) => {
    setEmail(submittedEmail);
    setSubmitted(true);
  };

  const handleReturnToForm = () => {
    setSubmitted(false);
  };

  return (
    <main className="">
      <div className="">
      {!submitted && <SubscriptionForm onSubmit={handleFormSubmit} />}
      {submitted && (
        <SubscriptionSuccess
          email={email}
          onReturnToForm={handleReturnToForm}
        />
      )}
      </div>
    </main>
  );
}
