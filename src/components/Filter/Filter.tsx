import React from 'react';

import { WrapperFilter, TitleStyled, TextStyledFilter, InputStyled } from './Filter.styled';

import {ImSearch, ImUsers} from "react-icons/im";

const icons = {
    list: <ImUsers/>,
    search: <ImSearch/>,
};

type ContactsFilterProps = {
  value: string;
  onChange: (value: string) => void;
}

export const ContactsFilter: React.FC<ContactsFilterProps> = ({ value, onChange }) => {
    return (
      <WrapperFilter>
        <TitleStyled>{icons.list} Contacts</TitleStyled>
        <TextStyledFilter>{icons.search} Find contacts by name</TextStyledFilter>
        <InputStyled
          type="text"
          value={value}
          onChange={evt => onChange(evt.currentTarget.value)}
        ></InputStyled>
      </WrapperFilter>
    );
  };
