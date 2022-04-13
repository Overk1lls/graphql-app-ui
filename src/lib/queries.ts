import { gql } from '@apollo/client';

export const ROOT_QUERY = gql`
    query Students {
        totalStudents
        allStudents {
            id
            name
            username
            problems
            solves
        }
    }
`;

export const STUDENT_QUERY = gql`
    query Student($username: String!) {
        getStudentByUsername(username: $username) {
            name
            problems
            solves
            location {
                country
                city
            }
            avatar
            specialization
            group
        }
    }
`;
