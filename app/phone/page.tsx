"use client";
import { Typography } from "@mui/material";
import { useAppContext } from '../context/AppContext';

export default function Contact() {
  const { user } = useAppContext();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Typography variant="h4">Welcome to the Phone Page, {user}!</Typography>
    </div>
  );
}