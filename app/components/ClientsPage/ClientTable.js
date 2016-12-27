import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ClientTable = ({ clients }) => (  
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>DateOfBirth</th>
                    <th>Enrolled</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {clients.map((client, index)=>
                    (
                        <tr key={index}>
                            <td>{client.firstName + '' + client.lastName}</td>
                            <td>{client.dateOfBirth}</td>
                            <td>{client.enrolled}</td>
                            <td>{client.gender}</td>
                            <td><Link to={{
                                pathname: 'details',
                                query: {
                                    name: client.id
                                },
                                }}>Deatils</Link></td>
                        </tr>
                    )
                )}
            </tbody>
        </table>


);

ClientTable.propTypes = {
  client: PropTypes.array,
};

export default ClientTable;