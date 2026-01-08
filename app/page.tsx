import React from "react";
import PreviewPage from "./preview/page";
import { Metadata } from "next";
export const metadata: Metadata = {
  title:
    "Preview || Blayden - Personal Portfolio & Resume React Nextjs Template",
  description: "Blayden - Personal Portfolio & Resume React Nextjs Template",
};
export default function page() {
  return (
    <>
      <PreviewPage />
    </>
  );
}
