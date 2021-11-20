
import "./App.css";
import Form from "./components/Form/Form";
import { Filter } from "./components/Filter/Filter";
import { ContactList } from "./components/ContactList/ContactList";


export default function App() {
    
   return (
        <div className="App">
            <div className="container">
                <h2 className="title">Phonebook</h2>
                <Form/>
                <div>
                    <h2 className="title">Contacts</h2>
                    <Filter/>
                    <ContactList/>
                </div>
            </div>
        </div>
    );
}

