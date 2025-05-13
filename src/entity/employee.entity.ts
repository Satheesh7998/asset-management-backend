// src/models/user.model.ts
import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  UpdatedAt,
} from 'sequelize-typescript';
import { EmployeeCreationAttributes, IAddEmployeeRequest } from '../models/employee.model';

@Table({
  tableName: 'employee',
  timestamps: true,
})
export class Employee extends Model<EmployeeCreationAttributes, IAddEmployeeRequest>{
  @PrimaryKey
  @Column({
  type: DataType.UUID,
})
  employee_id!: number;

  @Column(DataType.STRING)
  employee_name!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  employee_email!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  employee_mobile_number!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password!: string;

  @CreatedAt
  @Column({ field: 'created_at' })
  createdAt!: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  updatedAt!: Date;
}
