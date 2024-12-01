
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContactsFilter = void 0;
const FILTER_STYLED_1 = require("./Filter.styled");
const im_1 = require("react-icons/im");
const icons = {
    list: <im_1.ImUsers />,
    search: <im_1.ImSearch />,
};
const ContactsFilter = ({ value, onChange }) => {
    return (<FILTER_STYLED_1 WrapperFilter>
        <FILTER_STYLED_1 TitleStyled>{icons.list} Contacts</FILTER_STYLED_1>
        <FILTER_STYLED_1 TextStyledFilter>{icons.search} Find contacts by name</FILTER_STYLED_1>
        <FILTER_STYLED_1 InputStyled type="text" value={value} onChange={evt => onChange(evt.target.value)}></FILTER_STYLED_1>
      </FILTER_STYLED_1>);
};
exports.ContactsFilter = ContactsFilter;
