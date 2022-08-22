import React from 'react';
import GraphInfoContent from '../../components/GraphInfoContent';
import TableInfoContent from '../../components/TableInfoContent';
import CallToAction from '../../components/CallToAction';
import StudentTable from '../../components/StudentTable';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import { useQuery } from '@apollo/client';
import { allStudentsQuery, AllStudentsQueryResult } from '../../app/queries';
import { PageLoadResponse } from '../../app/const';
import './Main.css';

export default function MainPage() {
  const { loading, data, error } = useQuery<AllStudentsQueryResult>(allStudentsQuery);

  return (
    <>
      <div className="main text-center">
        <h3>E-Olymp Students Statistics</h3>
        <h5>All Sumy State University students in one place</h5>

        {loading && (
          <div className="mt-5">
            <CircularProgress />
            <Alert severity="info" sx={{ marginY: 3 }}>
              {PageLoadResponse.AllStudentsLoad}
            </Alert>
          </div>
        )}

        {error && (
          <Alert className="m-5 w-50" severity="error" sx={{ marginY: 3 }}>
            {PageLoadResponse.AllStudentsLoadError}
          </Alert>
        )}

        {data && <StudentTable {...data} />}

        <TableInfoContent />
        <GraphInfoContent />
        <CallToAction />
      </div>
    </>
  );
}
