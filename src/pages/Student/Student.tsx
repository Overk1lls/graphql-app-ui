import React from 'react';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import StudentChart from '../../components/StudentChart';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import {
  studentByUsernameQuery,
  StudentByUsernameQueryResult,
  StudentByUsernameQueryVars,
} from '../../app/queries';
import './Student.css';

const StudentPage = () => {
  const { username } = useParams();

  const { loading, data, error } = useQuery<
    StudentByUsernameQueryResult,
    StudentByUsernameQueryVars
  >(studentByUsernameQuery, { variables: { username: username! } });

  return (
    <div className="user-page">
      {loading && (
        <div className="my-5">
          <CircularProgress />
          <Alert severity="info" sx={{ marginY: 3 }}>
            The student is loading...
          </Alert>
        </div>
      )}

      {error && (
        <Alert severity="error" sx={{ marginY: 3 }} className="my-5">
          Could not load the student data...
        </Alert>
      )}

      {data && (
        <>
          <div className="container text-center my-5">
            <div className="dates">
              <div className="start">
                <strong>ОНОВЛЕНО </strong>
                {new Date().getSeconds()} секунд тому
                <span></span>
              </div>
              <div className="end">
                <strong>СПЕЦІАЛІЗАЦІЯ </strong>
                {data.specialization}
              </div>
            </div>
            <div className="stats">
              <div>
                <strong>ГРУПА </strong>
                {data.group}
              </div>
              <div>
                <strong>ПРОБЛЕМ ВИРІШЕНО: </strong>
                {data.problems || 0}
              </div>
              <div>
                <strong>ВСЬОГО ВІДПРАВЛЕНИХ РІШЕНЬ: </strong>
                {data.solves || 0}
              </div>
              <div>
                <strong>РЕЙТИНГ КОРИСТУВАЧА: </strong>
                {data.problems && data.solves ? ((data.problems / data.solves) * 100).toFixed() : 0}
                %
              </div>
            </div>
          </div>

          <h2 className="name py-0">{data.name} статистика</h2>
          <img className="img-fluid py-5 user-img" src={data.avatar} alt="#STUDENT_AVATAR" />
          <div id="chart-two">
            <StudentChart />
          </div>
        </>
      )}
    </div>
  );
};

export default StudentPage;
