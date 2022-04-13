import React from 'react';
import { Link } from 'react-router-dom';
import { IStudent } from '../../../../lib/interfaces/student.interface';

export const TableWrapper = ({ users }: { users: IStudent[] }) => (
  <table className="table table-stripped table-bordered">
    <thead className="thead-dark">
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Username</th>
        <th>Problems</th>
        <th>Solves</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>
            <Link to={`/user/${user.username}`}>{user.name}</Link>
          </td>
          <td>{user.username}</td>
          <td>{user.problems}</td>
          <td>{user.solves}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
