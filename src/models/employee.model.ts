import Joi from "joi";
import { IDateFilter } from "./common.model";

export interface EmployeeAttributes {
  employee_id?: string;
  employee_name?: string;
  employee_email?: string;
  employee_mobile_number?: string;
  password?: string;
  // created_at?: Date;
  // updated_at?: Date;
}
export interface EmployeeCreationAttributes extends Omit<EmployeeAttributes, "employee_id" | "created_at" | "updated_at"> {}

// Optional: your API request body type can match `EmployeeCreationAttributes`
export type IAddEmployeeRequest = EmployeeCreationAttributes;

// export interface IUpdateEmployeeAttributes {
//   employee_id?: string;
//   employee_name: string;
//   employee_email: string;
//   employee_mobile_number: string;
//   password: string;
//   // created_at?: Date;
//   // updated_at?: Date;
// }
// export interface UpdateEmployeeAttributes extends IUpdateEmployeeAttributes

// export type IUpdateEmployeeRequest = UpdateEmployeeAttributes;
