import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { PageResponse } from '../../../../lib/config';
import { IStudent } from '../../../../lib/interfaces/student.interface';
import { TableWrapper } from './table-wrapper';

export type TableProps = {
  count: number;
  users: IStudent[];
};

export const Table = ({ count, users }: TableProps) => {
  const [table, setTable] = useState(<></>);
  const [paginationSettings, setPaginationSettings] = useState({
    page: 0,
    pageOffset: 0,
    pageCount: 0,
    pageMax: count,
  });

  const formTable = () => {
    if (!users.length) {
      setTable(<h2 className="text-center">{PageResponse.NO_STUDENTS}</h2>);
    }

    const usersSlice = users.slice(
      paginationSettings.pageOffset,
      paginationSettings.pageOffset + paginationSettings.pageMax
    );

    setPaginationSettings({
      ...paginationSettings,
      pageCount: Math.ceil(count / paginationSettings.pageMax),
    });

    setTable(<TableWrapper users={users} />);
  };

  useEffect(() => formTable(), []);

  const handlePageChange = (e: { selected: number }) => {
    const selectedPage = e.selected;
    const offset = selectedPage * paginationSettings.pageMax;

    setPaginationSettings({
      ...paginationSettings,
      page: selectedPage,
      pageOffset: offset,
    });
    formTable();
  };

  return (
    <>
      {table}
      <ReactPaginate
        previousLabel="<<"
        nextLabel=">>"
        breakLabel="..."
        pageCount={paginationSettings.pageCount}
        onPageChange={handlePageChange}
        containerClassName={'pagination justify-content-center'}
        pageClassName={'page-item'}
        pageLinkClassName={'page-link'}
        previousLinkClassName={'page-link no-dis'}
        nextLinkClassName={'page-link no-dis'}
        disabledClassName={'page-item disabled'}
        activeClassName={'page-item active'}
      />
    </>
  );
};
