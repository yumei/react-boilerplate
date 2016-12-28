import React, {PropTypes} from 'react';

const ClientForm = ({client, formChange, onClickSave, onClickCancel}) => (
  <div>
    <div className="form-group">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        value={client.firstName}
        onChange={formChange}
        className="form-control"
        name="firstName"
        placeholder="firstName"/>
    </div>
    <div className="form-group">
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        value={client.lastName}
        onChange={formChange}
        className="form-control"
        name="lastName"
        placeholder="lastName"/>
    </div>
    <div className="form-group">
      <label htmlFor="dateOfBirth">Date Of Birth</label>
      <input
        type="text"
        value={client.dateOfBirth}
        onChange={formChange}
        className="form-control"
        name="dateOfBirth"
        placeholder="dateOfBirth"/>
    </div>
    <div className="form-group">
      <label htmlFor="enrolled">Enrolled</label>
      <input
        type="text"
        value={client.enrolled}
        onChange={formChange}
        className="form-control"
        name="enrolled"
        placeholder="enrolled"/>
    </div>
    <div className="form-group">
      <label htmlFor="gender">Gender</label>
      <input
        type="text"
        value={client.gender}
        onChange={formChange}
        className="form-control"
        name="gender"
        placeholder="gender"/>
    </div>
    <button className="btn btn-primary" onClick={onClickSave}>Save</button>
    <button type="button" className="btn btn-primary" onClick={onClickCancel}>Cancel</button>
  </div>
);

ClientForm.propTypes = {
  client: PropTypes.object,
  formChange: PropTypes.func.isRequired,
  onClickSave: PropTypes.func.isRequired,
  onClickCancel: PropTypes.func
};

export default ClientForm;