import ContactsList from "./Contacts/ContactsList";
import SearchBar from "./SearchBar";

export default function Header(){
    return <header>
        <nav>
            <div className="flex">
                <div className="grow">Chats</div>
                <div>Logout</div>
                <div>Profile</div>
                <div>New Message</div>
            </div>
            <SearchBar />
        </nav>
        <ContactsList />
    </header>
}