const ContactActions = {
  GET_CONTACT_LIST: "GET_CONTACT_LIST",
  GET_CONTACT_LIST_SUCCESS: "GET_CONTACT_LIST_SUCCESS",
  GET_CONTACT_LIST_FAIL: "GET_CONTACT_LIST_FAIL",

  getContactList: () => ({
    type: ContactActions.GET_CONTACT_LIST,
  }),
};
export default ContactActions;
