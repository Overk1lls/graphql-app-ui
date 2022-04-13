import { useQuery } from '@apollo/client';
import React from 'react';
import { PageResponse } from '../../lib/config';
import { IStudent } from '../../lib/interfaces/student.interface';
import { STUDENT_QUERY } from '../../lib/queries';
import { Chart } from './chart';

export const User = () => {
    const { loading, data, error } = useQuery(STUDENT_QUERY, {
        variables: {
            username: window.location.pathname.split('/')[2],
        },
    });
    const { getStudentByUsername: student }: { getStudentByUsername: IStudent } = data;

    if (error || loading) {
        return (
            <h2 className="text-center">
                {error ? PageResponse.STUDENTS_NOT_LOADED : PageResponse.STUDENT_LOADING}
            </h2>
        );
    }

    return (
        <div className="user-page">
            <div className="container text-center my-5">
                <h2 className="name py-0">{student.name} статистика</h2>
                <img className="img-fluid py-5" src={student.avatar} alt="#USER_AVATAR" />
                <div className="dates">
                    <div className="start">
                        <strong>ОНОВЛЕНО </strong>
                        {new Date().getSeconds()} секунд тому
                        <span></span>
                    </div>
                    <div className="end">
                        <strong>СПЕЦІАЛІЗАЦІЯ </strong>
                        {student.specialization}
                    </div>
                </div>
                <div className="stats">
                    <div>
                        <strong>ГРУПА </strong>
                        {student.group}
                    </div>
                    <div>
                        <strong>ПРОБЛЕМ ВИРІШЕНО: </strong>
                        {student?.problems}
                    </div>
                    <div>
                        <strong>ВСЬОГО ВІДПРАВЛЕНИХ РІШЕНЬ: </strong>
                        {student?.solves}
                    </div>
                    <div>
                        <strong>РЕЙТИНГ КОРИСТУВАЧА: </strong>
                        {student.problems && student.solves
                            ? ((student.problems / student.solves) * 100).toFixed(2)
                            : ''}
                        %
                    </div>
                </div>
            </div>
            <div id="chart-two">
                <Chart />
            </div>
        </div>
    );
};
