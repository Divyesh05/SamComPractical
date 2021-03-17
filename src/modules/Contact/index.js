import React from "react";
import { connect } from "react-redux";
import { CustomList } from "../../components/List";
import Actions from "../../redux/contact/actions";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactList: [],
    };
  }

  componentDidMount() {
    this.props.getContactList();
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    let update = {};
    console.log("nextporps", nextProps.ContactAction);
    switch (nextProps.ContactAction.type) {
      case "GET_CONTACT_LIST_SUCCESS":
        update.contactList = nextProps.ContactAction.data.data;
        break;
      case "GET_CONTACT_LIST_FAIL":
        break;
      case "FETCH_ERROR":
        break;
      default:
    }
    return Object.keys(update).length === 0 && prevState.mounted
      ? null
      : update;
  }

  render() {
    const { contactList } = this.state;
    return (
      <div>
        <h1>Contact List </h1>
        <CustomList contactList={contactList} />
      </div>
    );
  }
}

export default connect((state) => ({ ...state.ContactReducer }), {
  ...Actions,
})(Contact);
