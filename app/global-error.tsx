// Marking the component as client-side using "use client"
"use client";

type GlobalErrorProps = {
  error: Error;
};

export default function GlobalError({ error }: GlobalErrorProps) {
  return (
    <html>
      <body>
        <h1>An error occurred: {error.message}</h1>
        {/* You can add more custom error display logic or fallback UI */}
      </body>
    </html>
  );
}
