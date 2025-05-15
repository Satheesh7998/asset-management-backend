// src/entity/employee.entity.ts
import { DataTypes, Model, Sequelize } from "sequelize";

export class Employee extends Model {
  public employee_id!: string;
  public employee_name!: string;
  public employee_email!: string;
  public employee_mobile_number!: string;
  public password!: string;

  public static async initEmployeeModel(sequelize: Sequelize) {
    Employee.init(
      {
        employee_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        employee_name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        employee_email: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        employee_mobile_number: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        password: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      {
        sequelize, // ✅ Ensure model is linked to sequelize instance
        tableName: "employee",
        timestamps: true,
      }
    );
  }
}
