"use client";
import { App } from "@/components/App";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../utils/queryClient";

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}
