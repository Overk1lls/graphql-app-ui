import React from 'react';
import { useQuery } from '@apollo/client';
import { ROOT_QUERY } from '../../../lib/queries';
import { PageResponse } from '../../../lib/config';
import { Table } from './table/table';
import { RootQueryDTO } from '../../../lib/interfaces/dto/root-query.dto';

export const UserTable = () => {
  const { loading, data, error } = useQuery(ROOT_QUERY);

  if (error || loading) {
    return (
      <h2 className="text-center">
        {error ? PageResponse.STUDENTS_NOT_LOADED : PageResponse.STUDENTS_LOADING}
      </h2>
    );
  }
  const { totalStudents, allStudents }: RootQueryDTO = data;

  return (
    <div className="container">
      <h3 className="text-center">E-Olymp Students Statistics</h3>
      <h5 className="text-center">All Sumy State University students in one place</h5>
      <Table count={totalStudents} users={allStudents} />
    </div>
  );
};
