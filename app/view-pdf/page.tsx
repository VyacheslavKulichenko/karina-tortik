"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function PDFViewerContent() {
  const searchParams = useSearchParams();
  const file = searchParams.get("file");

  if (!file) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Файл не найден</h1>
      </div>
    );
  }

  return (
    <div style={{ width: "100vw", height: "100vh", margin: 0, padding: 0 }}>
      <object
        data={file}
        type="application/pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
      >
        <embed
          src={file}
          type="application/pdf"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </object>
    </div>
  );
}

export default function ViewPDF() {
  return (
    <Suspense
      fallback={
        <div style={{ padding: "2rem", textAlign: "center" }}>
          Загрузка...
        </div>
      }
    >
      <PDFViewerContent />
    </Suspense>
  );
}
