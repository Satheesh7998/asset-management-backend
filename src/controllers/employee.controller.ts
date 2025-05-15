import express from "express";
import { EmployeeAttributes, EmployeeCreationAttributes, IAddEmployeeRequest } from "../models/employee.model";
import { IResponse, ReponseStatus } from "../models/common.model";
import { BaseController } from "./base-controller.controller";
import { Employee } from "../entity/employee.entity";
import { EmployeeRepository } from "../repository/employee.repository";
import { IsNull } from "sequelize-typescript";

export class EmployeeController extends BaseController {
  constructor(version: string, route_path: string) {
    super(version, route_path);
    this.DefineRoutes(this.router);
  }

  public async DefineRoutes(router: express.Router) {
    router.post("/addEmployee", async (req: express.Request, res: express.Response) => await this.addEmployee(req, res));
    router.post("/updateEmployee", async (req: express.Request, res: express.Response) => await this.updateEmployee(req, res));
    router.get("/getEmployeeList", async (req: express.Request, res: express.Response) => await this.getEmployeeList(req, res));
  }

  public async addEmployee(req: express.Request, res: express.Response): Promise<void> {
    try {
      const data: IAddEmployeeRequest = req.body as IAddEmployeeRequest;
      const newEmployee = await Employee.create({
        employee_name: data.employee_name,
        employee_email: data.employee_email,
        employee_mobile_number: data.employee_mobile_number,
        password: data.password,
      });
      if (!newEmployee) {
        res.status(400).send("Employee Creation Failed");
      } else {
        const response: IResponse<Employee> = { status: ReponseStatus.Success, data: newEmployee };
        res.status(201).send(response);
      }
    } catch (error: any) {
      const response: IResponse<Employee> = { status: ReponseStatus.Failed, message: new Error(error)?.message };
      res.status(500).send(response);
    }
  }

  public async updateEmployee(req: express.Request, res: express.Response): Promise<void> {
    try {
      const data: EmployeeAttributes = req.body as EmployeeAttributes;
      const employee = await Employee.findByPk(data.employee_id);
      if (!employee) {
        throw new Error("Employee not found");
      } else {
        let updatedData = await employee.update(data);
        const response: IResponse<Employee> = { status: ReponseStatus.Success, data: updatedData };
        res.status(201).send(response);
      }
    } catch (error: any) {
      const response: IResponse<Employee> = { status: ReponseStatus.Failed, message: new Error(error)?.message };
      res.status(500).send(response);
    }
  }

  public async getEmployeeList(req: express.Request, res: express.Response): Promise<void> {
    try {
      // let filter: EmployeeAttributes = undefined;
      let data: EmployeeAttributes = req.body as EmployeeAttributes;
      let employees;
      if (!data) {
        employees = await EmployeeRepository.GetEmployeeList();
      } else {
        employees = await EmployeeRepository.GetEmployeeList(data);
      }
      if (!employees) {
        throw new Error("Employee not found");
      } else {
        // let updatedData = await employee.update(data);
        const response: IResponse<Employee[]> = { status: ReponseStatus.Success, data: employees };
        res.status(201).send(response);
      }
    } catch (error: any) {
      const response: IResponse<Employee> = { status: ReponseStatus.Failed, message: new Error(error)?.message };
      res.status(500).send(response);
    }
  }
}

// router.get("/bookings", async (req: express.Request, res: express.Response) => await this.getBookings(req, res));
// router.post(
//   "/search-bookings",
//   async (req: express.Request, res: express.Response, next: express.NextFunction) => await this.validateGetBookings(req, res, next),
//   async (req: express.Request, res: express.Response) => await this.getBookings(req, res)
// );

//   async validateGetBooking(req: express.Request, res: express.Response, next: express.NextFunction) {
//     const booking_uid: string = req.query?.booking_uid as string;
//     const { error, value } = getBookingSchemaValidate.validate(booking_uid);
//     if (error) {
//       res.status(400).send(error?.message);
//     } else {
//       next();
//     }
//   }

//   async validateDeleteBooking(req: express.Request, res: express.Response, next: express.NextFunction) {
//     const booking_uid: string = req.query?.booking_uid as string;
//     const { error, value } = deleteBookingSchemaValidate.validate(booking_uid);
//     if (error) {
//       res.status(400).send(error?.message);
//     } else {
//       next();
//     }
//   }
