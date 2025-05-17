import { Op } from "sequelize";
import { AssetMasterAttributes } from "../models/asset_master.model";
import { AssetMaster } from "../entity/asset_master.entity";

export class AssetMasterRepository {
  public static async GetAssteMasterList(filter?: AssetMasterAttributes): Promise<AssetMaster[]> {
    const whereClause: any = {};

    if (filter?.asset_master_id) {
      whereClause.asset_master_id = filter.asset_master_id;
    }

    if (filter?.active) {
      whereClause.active = { [Op.iLike]: `%${filter.active}%` }; // case-insensitive like search
    }

    if (filter?.asset_category) {
      whereClause.asset_category = { [Op.iLike]: `%${filter.asset_category}%` };
    }

    if (filter?.asset_type) {
      whereClause.asset_type = { [Op.iLike]: `%${filter.asset_type}%` };
    }

    const assetMaster = await AssetMaster.findAll({
      where: whereClause,
    });

    return assetMaster;
  }
}
