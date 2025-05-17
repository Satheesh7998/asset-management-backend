import express from "express";
import { IResponse, ReponseStatus } from "../models/common.model";
import { BaseController } from "./base-controller.controller";
import { AssetMasterAttributes, IAddAssetMasterRequest } from "../models/asset_master.model";
import { AssetMaster } from "../entity/asset_master.entity";
import { AssetMasterRepository } from "../repository/asset_master.repository";
import { Asset } from "../entity/asset.entity";
import { AssetAttributes, IAddAssetRequest } from "../models/asset.model";
import { AssetRepository } from "../repository/asset.repository";

export class EmployeeController extends BaseController {
  constructor(version: string, route_path: string) {
    super(version, route_path);
    this.DefineRoutes(this.router);
  }

  public async DefineRoutes(router: express.Router) {
    router.post("/addAsset", async (req: express.Request, res: express.Response) => await this.addAsset(req, res));
    router.post("/updateAsset", async (req: express.Request, res: express.Response) => await this.updateAsset(req, res));
    router.get("/getAssetList", async (req: express.Request, res: express.Response) => await this.getAssetList(req, res));
  }

  public async addAsset(req: express.Request, res: express.Response): Promise<void> {
    try {
      const data: IAddAssetRequest = req.body as IAddAssetRequest;
      const newAsset = await Asset.create({
        asset_name: data.asset_name,
        manufacture_date: data.manufacture_date,
        serial_number: data.serial_number,
        description: data.description,
        asset_status: data.asset_status,
      });
      if (!newAsset) {
        res.status(400).send("Employee Creation Failed");
      } else {
        const response: IResponse<Asset> = { status: ReponseStatus.Success, data: newAsset };
        res.status(201).send(response);
      }
    } catch (error: any) {
      const response: IResponse<Asset> = { status: ReponseStatus.Failed, message: new Error(error)?.message };
      res.status(500).send(response);
    }
  }

  public async updateAsset(req: express.Request, res: express.Response): Promise<void> {
    try {
      const data: AssetAttributes = req.body as AssetAttributes;
      const asset = await Asset.findByPk(data.asset_id);
      if (!asset) {
        throw new Error("Asset not found");
      } else {
        let updatedData = await asset.update(data);
        const response: IResponse<Asset> = { status: ReponseStatus.Success, data: updatedData };
        res.status(201).send(response);
      }
    } catch (error: any) {
      const response: IResponse<AssetMaster> = { status: ReponseStatus.Failed, message: new Error(error)?.message };
      res.status(500).send(response);
    }
  }

  public async getAssetList(req: express.Request, res: express.Response): Promise<void> {
    try {
      // let filter: EmployeeAttributes = undefined;
      let data: AssetMasterAttributes = req.body as AssetMasterAttributes;
      let asset;
      if (!data) {
        asset = await AssetRepository.GetAssetList();
      } else {
        asset = await AssetRepository.GetAssetList(data);
      }
      if (!asset) {
        throw new Error("Employee not found");
      } else {
        // let updatedData = await employee.update(data);
        const response: IResponse<Asset[]> = { status: ReponseStatus.Success, data: asset };
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
