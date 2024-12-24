"use client";
import { Button, Flex, Input, Textarea, Text } from "@/once-ui/components";
import { Send } from "lucide-react";
import React, { useState } from "react";
import { sendEmail } from "./sendEmail";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus({ type: null, message: "" });

    try {
      const result = await sendEmail(name, email, message);
      if (result.success) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setStatus({
          type: "error",
          message: "Failed to send message. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "An error occurred. Please try again later.",
      });
    }
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <Flex direction='column' gap='m'>
          <Input
            type='text'
            label='Name'
            required
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type='email'
            label='Email'
            required
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Textarea
            id='message'
            label='Message'
            lines={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            resize='vertical'
          />
          <Button type='submit' variant='primary'>
            <Flex gap='8' alignItems='center'>
              Send Message
              <Send size={16} />
            </Flex>
          </Button>
        </Flex>
      </form>
      {status.type && (
        <Text
          variant='body-strong-m'
          onBackground={
            status.type === "success" ? "success-strong" : "accent-strong"
          }>
          {status.message}
        </Text>
      )}
    </div>
  );
};

export default Form;
