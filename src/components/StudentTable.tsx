import React from 'react';
import StudentRow from './StudentRow';
import ReactPaginate from 'react-paginate';
import { AllStudentsQueryResult } from '../app/queries';
import { StudentModel } from '../models/students';

const StudentTable: React.FC<AllStudentsQueryResult> = ({ allStudents, totalStudents }) => {
  const [shownStudents, setShownStudents] = React.useState<StudentModel[]>();
  const [paginationSettings, setPaginationSettings] = React.useState({
    page: 0,
    pageOffset: 0,
    pageCount: 0,
    pageMax: 5,
  });

  React.useEffect(() => {
    const studentsSlice = allStudents.slice(
      paginationSettings.pageOffset,
      paginationSettings.pageOffset + paginationSettings.pageMax
    );

    setPaginationSettings({
      ...paginationSettings,
      pageCount: Math.ceil(totalStudents / paginationSettings.pageMax),
    });

    setShownStudents(studentsSlice);
  }, [paginationSettings, allStudents, totalStudents]);

  const handlePageChange = ({ selected }: { selected: number }) => {
    const offset = selected * paginationSettings.pageMax;

    setPaginationSettings({
      ...paginationSettings,
      page: selected,
      pageOffset: offset,
    });
  };

  return (
    <>
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
          {shownStudents?.map((student) => (
            <StudentRow {...student} />
          ))}
        </tbody>
      </table>
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

export default StudentTable;
