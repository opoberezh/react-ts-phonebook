import { ContactsFilter } from '../Filter/Filter';
import {ListStyled,  ItemStyled,   DeleteButton, ResetBtn, Wrapper} from './ContactList.styled';
import {ImUserMinus, ImLoop2} from "react-icons/im";

const icon = {
    minusUser: <ImUserMinus/>,
    reset: <ImLoop2/>
};

type Contacts = {
  id: string;
  name: string;
  number: string;
};

type ContactsListProp = {
  contacts: Contacts[];
  contactFilter: string;
  onChangeFilter: (value: string) => void;
  onDeleteContact: (id: string) => void;
  onReset: () => void;
}
export const ContactList: React.FC<ContactsListProp> = ({
  contacts,
  contactFilter,
  onChangeFilter,
  onDeleteContact,
  onReset,
}) => {
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(contactFilter.toLowerCase())
  );

  return (
    <Wrapper>

      <ContactsFilter value={contactFilter} onChange={onChangeFilter} />

     {filteredContacts.length > 0 ? (<ListStyled>
         {filteredContacts.map(contact => (
          <ItemStyled key={contact.id}>
            {contact.name}: {contact.number}
            <DeleteButton onClick={() => onDeleteContact(contact.id)}>{icon.minusUser} Delete</DeleteButton>
          </ItemStyled>

        ))}
      </ListStyled>):( <p>No contacts found</p>)}
      <ResetBtn onClick={onReset}>{icon.reset}Reset</ResetBtn>
    </Wrapper>
  );
};
