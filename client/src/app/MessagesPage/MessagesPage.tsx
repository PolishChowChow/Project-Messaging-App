import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MessagesPage() {
  return (
    <div className="flex min-h-dvh">
      <aside className="w-1/4 flex flex-col">
        <Header />
      </aside>
      <main className="border-solid border-l-2 border-neutral-200 grow">
        <Outlet />
      </main>
    </div>
  );
}
