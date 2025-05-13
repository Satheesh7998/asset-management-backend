import { ReponseStatus } from "../models/common.model";
import { BaseController } from "./base-controller.controller";
import { Employee } from "../entity/employee.entity";
export class EmployeeController extends BaseController {
    //   protected bookingRepository!: BookingRepository;
    //   public GetBookingRepository(): BookingRepository {
    //     if (!this.bookingRepository) {
    //       this.bookingRepository = new BookingRepository();
    //     }
    //     return this.bookingRepository;
    //   }
    constructor(version, route_path) {
        super(version, route_path);
        this.DefineRoutes(this.router);
    }
    DefineRoutes(router) {
        router.post("/addEmployee", async (req, res) => await this.addEmployee(req, res));
    }
    async addEmployee(req, res) {
        var _a;
        try {
            const data = req.body;
            const newEmployee = await Employee.create(data);
            //   console.log({ newEmployee });
            if (!newEmployee) {
                res.status(500).send("Employee Creation Failed");
            }
            else {
                const response = { status: ReponseStatus.Success, data: newEmployee };
                res.status(201).send(response);
            }
        }
        catch (error) {
            const response = { status: ReponseStatus.Failed, message: (_a = new Error(error)) === null || _a === void 0 ? void 0 : _a.message };
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
