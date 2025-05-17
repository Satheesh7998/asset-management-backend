import express from "express";
import { IResponse, ReponseStatus } from "../models/common.model";
import { BaseController } from "./base-controller.controller";
import { AssetMasterAttributes, IAddAssetMasterRequest } from "../models/asset_master.model";
import { AssetMaster } from "../entity/asset_master.entity";
import { AssetMasterRepository } from "../repository/asset_master.repository";

export class EmployeeController extends BaseController {
  constructor(version: string, route_path: string) {
    super(version, route_path);
    this.DefineRoutes(this.router);
  }

  public async DefineRoutes(router: express.Router) {
    router.post("/addAssetMaster", async (req: express.Request, res: express.Response) => await this.addAssetMaster(req, res));
    router.post("/updateAssetMaster", async (req: express.Request, res: express.Response) => await this.updateAssetMaster(req, res));
    router.get("/getAssetMasterList", async (req: express.Request, res: express.Response) => await this.getAssetMasterList(req, res));
  }

  public async addAssetMaster(req: express.Request, res: express.Response): Promise<void> {
    try {
      const data: IAddAssetMasterRequest = req.body as IAddAssetMasterRequest;
      const newEmployee = await AssetMaster.create({
        asset_variant: data.asset_category,
        asset_name: data.asset_type,
        description: data.description,
      });
      if (!newEmployee) {
        res.status(400).send("Employee Creation Failed");
      } else {
        const response: IResponse<AssetMaster> = { status: ReponseStatus.Success, data: newEmployee };
        res.status(201).send(response);
      }
    } catch (error: any) {
      const response: IResponse<AssetMaster> = { status: ReponseStatus.Failed, message: new Error(error)?.message };
      res.status(500).send(response);
    }
  }

  public async updateAssetMaster(req: express.Request, res: express.Response): Promise<void> {
    try {
      const data: AssetMasterAttributes = req.body as AssetMasterAttributes;
      const employee = await AssetMaster.findByPk(data.asset_master_id);
      if (!employee) {
        throw new Error("Employee not found");
      } else {
        let updatedData = await employee.update(data);
        const response: IResponse<AssetMaster> = { status: ReponseStatus.Success, data: updatedData };
        res.status(201).send(response);
      }
    } catch (error: any) {
      const response: IResponse<AssetMaster> = { status: ReponseStatus.Failed, message: new Error(error)?.message };
      res.status(500).send(response);
    }
  }

  public async getAssetMasterList(req: express.Request, res: express.Response): Promise<void> {
    try {
      // let filter: EmployeeAttributes = undefined;
      let data: AssetMasterAttributes = req.body as AssetMasterAttributes;
      let asset_master;
      if (!data) {
        asset_master = await AssetMasterRepository.GetAssteMasterList();
      } else {
        asset_master = await AssetMasterRepository.GetAssteMasterList(data);
      }
      if (!asset_master) {
        throw new Error("Employee not found");
      } else {
        // let updatedData = await employee.update(data);
        const response: IResponse<AssetMaster[]> = { status: ReponseStatus.Success, data: asset_master };
        res.status(201).send(response);
      }
    } catch (error: any) {
      const response: IResponse<AssetMaster> = { status: ReponseStatus.Failed, message: new Error(error)?.message };
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
