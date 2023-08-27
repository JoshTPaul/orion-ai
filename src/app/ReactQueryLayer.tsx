"use client";
import React from "react";
import { QueryClientProvider } from "react-query";
import { reactQueryClient } from "./config/reactQueryClient";

function ReactQueryLayer({ children }: any) {
  return (
    <QueryClientProvider client={reactQueryClient}>
      {children}
    </QueryClientProvider>
  );
}

export default ReactQueryLayer;
