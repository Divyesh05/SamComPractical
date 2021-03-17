import ContactActions from "./actions";

const initState = { contacts: [] };

export default function Reducer(state = initState, action) {
  switch (action.type) {
    case ContactActions.GET_CONTACT_LIST_SUCCESS:
      return {
        ContactAction: action,
      };

    default:
      return state;
  }
}
