import { Op } from "sequelize";
import { Employee } from "../entity/employee.entity";
import { EmployeeAttributes } from "../models/employee.model";

export class EmployeeRepository {
  public static async GetEmployeeList(filter?: EmployeeAttributes): Promise<Employee[]> {
    const whereClause: any = {};

    if (filter?.employee_id) {
      whereClause.employee_id = filter.employee_id;
    }

    if (filter?.employee_name) {
      whereClause.employee_name = { [Op.iLike]: `%${filter.employee_name}%` }; // case-insensitive like search
    }

    if (filter?.employee_email) {
      whereClause.employee_email = { [Op.iLike]: `%${filter.employee_email}%` };
    }

    const employees = await Employee.findAll({
      where: whereClause,
    });

    return employees;
  }
}
