/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { PropTypes } from 'react';
import Helmet from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import ClientTable from "../../components/ClientsPage/ClientTable";
import {loadClients} from "./actions";
// import {createStructuredSelector} from 'reselect'; import AtPrefix from
// './AtPrefix'; import CenteredSection from './CenteredSection'; import Form
// from './Form'; import H2 from 'components/H2'; import Input from './Input';
// import List from 'components/List'; import ListItem from
// 'components/ListItem'; import LoadingIndicator from
// 'components/LoadingIndicator'; import RepoListItem from
// 'containers/RepoListItem'; import Section from './Section'; import messages
// from './messages'; import {loadRepos} from '../App/actions'; import
// {changeUsername} from './actions'; import {selectUsername} from
// './selectors'; import {selectRepos, selectLoading, selectError} from
// 'containers/App/selectors';

export class ClientsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props, context) {
    super(props, context);
    this.state = { //todo: use initialState
      clients: []
    };
  }

  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    this.props.loadClients();
  }

  render() {
    /* let mainContent = null;

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      mainContent = (<List component={LoadingIndicator}/>);

      // Show an error if there is one
    } else if (this.props.error !== false) {
      const ErrorComponent = () => (<ListItem item={'Something went wrong, please try again!'}/>);
      mainContent = (<List component={ErrorComponent}/>);

      // If we're not loading, don't have an error and there are repos, show the repos
    } else if (this.props.repos !== false) {
      mainContent = (<List items={this.props.repos} component={RepoListItem}/>);
    }*/

    return (
      <div>
        <ClientTable clients={this.props.clients}/>
        <Link className="btn btn-primary" to="clients/add">Add Client</Link>
      </div>
    );
  }
}

function findClients(clients) {
  if (!clients) {
    return [];
  }
  if (Array.isArray(clients)) {
    return clients;
  }
  return clients.toJS();
}

function mapStateToProps(state) {
  return {    
    clients: findClients(state.get('clientList').get('clients'))//todo: why clientList?
  };
}

export function mapDispatchToProps(dispatch) {
  return {
    /*onChangeUsername: (evt) => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: (evt) => {
      if (evt !== undefined && evt.preventDefault)
        evt.preventDefault();
      dispatch(loadRepos());
    }*/
    loadClients: () => {      
      dispatch(loadClients());
    }
  };
}

// const mapStateToProps = createStructuredSelector({repos: selectRepos(),
// username: selectUsername(), loading: selectLoading(), error: selectError()});
// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(ClientsPage);