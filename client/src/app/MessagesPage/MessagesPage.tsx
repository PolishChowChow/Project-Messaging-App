import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function MessagesPage(){
    return <div className="flex bg-slate-300 min-h-dvh">
        <aside className="w-1/4 flex flex-col">
            <Header />
            <footer></footer>
        </aside>
        <main className="grow">
            {<Outlet />}
        </main>
    </div>
}