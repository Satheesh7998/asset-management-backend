import { Op } from "sequelize";
import { AssetMasterAttributes } from "../models/asset_master.model";
import { AssetMaster } from "../entity/asset_master.entity";
import { AssetAttributes } from "../models/asset.model";
import { Asset } from "../entity/asset.entity";

export class AssetRepository {
  public static async GetAssetList(filter?: AssetAttributes): Promise<Asset[]> {
    const whereClause: any = {};

    if (filter?.asset_master_id) {
      whereClause.asset_master_id = filter.asset_master_id;
    }

    if (filter?.asset_id) {
      whereClause.asset_id = { [Op.iLike]: `%${filter.asset_id}%` }; // case-insensitive like search
    }

    if (filter?.asset_name) {
      whereClause.asset_name = { [Op.iLike]: `%${filter.asset_name}%` };
    }

    if (filter?.asset_status) {
      whereClause.asset_status = { [Op.iLike]: `%${filter.asset_status}%` };
    }

    const assetMaster = await Asset.findAll({
      where: whereClause,
    });

    return assetMaster;
  }
}
