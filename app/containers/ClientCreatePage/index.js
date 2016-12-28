import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {FormattedMessage} from 'react-intl';
import {Link} from 'react-router';
import ClientTable from "../../components/ClientsPage/ClientTable";
import {updateForm, saveForm, resetForm} from "./actions";
import {browserHistory} from 'react-router';
import ClientForm from "../../components/ClientCreatePage/ClientForm";

class ClientCreatePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);
    this.onClickSave = this
      .onClickSave
      .bind(this);
    this.onClickCancel = this
      .onClickCancel
      .bind(this);
  }
 
  componentDidMount() {
    this
      .props
      .initClient();
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

ClientCreatePage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state) {
  return {
    client: (state.get('clientCreate').get('client')
      ? state.get('clientCreate').get('client').toJS()
      : {
        fisrtName: "",
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
    initClient: () => {
      dispatch(resetForm());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientCreatePage);