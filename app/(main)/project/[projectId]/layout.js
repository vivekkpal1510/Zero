import { Suspense } from "react";

export default async function ProjectLayout({ children }) {
  return (
    <div className="mx-auto">
      <Suspense fallback={<span>Loading Projects ...</span>}>
        {children}
      </Suspense>
    </div>
  );
}