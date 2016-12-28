import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router';
import {updateForm, saveForm, resetForm} from "../ClientCreatePage/actions";
import {loadClient, clientLoaded, clientLoadingError} from "./actions";
import {browserHistory} from 'react-router';
import ClientForm from "../../components/ClientCreatePage/ClientForm";

class ClientEditPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);
    this.onClickSave = this
      .onClickSave
      .bind(this);
    this.onClickCancel = this
      .onClickCancel
      .bind(this);
    // this.state = { //todo: use initialState   client: {     firstName: "2",
    // lastName: "",     dateOfBirth: "",     enrolled: true,     gender: ""   } }
  }

  componentDidMount() {
    this
      .props
      .loadClient(this.context.router.getCurrentLocation().query.id);
  }

  onClickSave(event) {
    this
      .props
      .saveClient(this.props.client);
    this
      .context
      .router
      .push({pathname: '/clients'});
  }

  onClickCancel() {
    this
      .props
      .initClient();
    this
      .context
      .router
      .push({pathname: '/clients'});
  }

  render() {
    return (<ClientForm
      client={this.props.client}
      formChange={this.props.formChange}
      onClickSave={this.onClickSave}
      onClickCancel={this.onClickCancel}/>);
  }
}

ClientEditPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  // console.log(state); //worksMap._root.entries: route, global,  // language,clientList, clientCreate, clientEdit, clients
  // console.log(state.get('clientEdit')); //?
  // console.log(state.get('clientEdit').get('client'));
  let clientInfo = state
    .get('clientEdit')
    .get('client');
  console.log(clientInfo);
  return {
    client: (clientInfo
      ? clientInfo.toJS()
      : {
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        enrolled: true,
        gender: ""
      })
  };
}

function mapDispatchToProps(dispatch) {
  return {
    formChange: (evt) => dispatch(updateForm(evt.target)),
    saveClient: (client) => {
      dispatch(saveForm(client));
    },
    loadClient: (id) => {
      dispatch(loadClient(id))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientEditPage);