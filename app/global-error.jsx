"use server"; // Mark the function as a server-side function

export default async function GlobalError({ error }) {
  // Marking the function as async
  // Server-side logic (can also be error logging or other async tasks)
  return (
    <html>
      <body>
        {/* You can customize this fallback error display if needed */}
        <h1>An error occurred: {error.message}</h1>
      </body>
    </html>
  );
}
