import { IStudent } from '../student.interface';

export interface RootQueryDTO {
  totalStudents: number;
  allStudents: IStudent[];
}
