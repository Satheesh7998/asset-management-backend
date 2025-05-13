import { EmployeeController } from "./employee.controller.js";
// import { BookingController } from "./booking.controller";
export class ControllerFactory {
    getControllers() {
        console.log("XXXXXXX ");
        return [
            new EmployeeController("v1", "employee")
        ];
    }
}
