var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// src/models/user.model.ts
import { Table, Column, Model, DataType, PrimaryKey, CreatedAt, UpdatedAt, } from 'sequelize-typescript';
let Employee = class Employee extends Model {
};
__decorate([
    PrimaryKey,
    Column({
        type: DataType.UUID,
    }),
    __metadata("design:type", Number)
], Employee.prototype, "employee_id", void 0);
__decorate([
    Column(DataType.STRING),
    __metadata("design:type", String)
], Employee.prototype, "employee_name", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Employee.prototype, "employee_email", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true,
    }),
    __metadata("design:type", String)
], Employee.prototype, "employee_mobile_number", void 0);
__decorate([
    Column({
        type: DataType.STRING,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Employee.prototype, "password", void 0);
__decorate([
    CreatedAt,
    Column({ field: 'created_at' }),
    __metadata("design:type", Date)
], Employee.prototype, "createdAt", void 0);
__decorate([
    UpdatedAt,
    Column({ field: 'updated_at' }),
    __metadata("design:type", Date)
], Employee.prototype, "updatedAt", void 0);
Employee = __decorate([
    Table({
        tableName: 'employee',
        timestamps: true,
    })
], Employee);
export { Employee };
