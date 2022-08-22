import React from 'react';
import { StudentModel } from '../models/students';
import { Link } from 'react-router-dom';

const StudentRow: React.FC<StudentModel> = ({ id, username, name, problems, solves }) => {
  return (
    <tr key={id}>
      <td>{id}</td>
      <td>
        <Link to={`/users/${username}`}>{name}</Link>
      </td>
      <td>{username}</td>
      <td>{problems}</td>
      <td>{solves}</td>
    </tr>
  );
};

export default StudentRow;
