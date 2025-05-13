import { BaseController } from "./base-controller.controller.js";
import { EmployeeController } from "./employee.controller.js";
// import { BookingController } from "./booking.controller";

export class ControllerFactory {
  getControllers(): Array<BaseController> {
    console.log("XXXXXXX ");
    return [
      new EmployeeController("v1", "employee")
    ];
  }
}
