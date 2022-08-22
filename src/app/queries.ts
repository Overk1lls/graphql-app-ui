import { gql } from '@apollo/client';
import { StudentModel } from '../models/students';

export interface AllStudentsQueryResult {
  totalStudents: number;
  allStudents: StudentModel[];
}

export interface StudentByUsernameQueryResult {
  name: string;
  problems: number;
  solves: number;
  location?: {
    country?: string;
    city?: string;
  };
  avatar: string;
  specialization: string;
  group: string;
}

export interface StudentByUsernameQueryVars {
  username: string;
}

export const allStudentsQuery = gql`
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

export const studentByUsernameQuery = gql`
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
