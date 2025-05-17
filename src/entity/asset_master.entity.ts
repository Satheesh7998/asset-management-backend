// src/entity/employee.entity.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import { AssetCategory } from "../models/asset_master.model";

export class AssetMaster extends Model {
  public asset_master_id!: string;
  public asset_category!: AssetCategory;
  public asset_type!: string;
  public description!: string;
  public active!: boolean;

  public static async initEmployeeModel(sequelize: Sequelize) {
    AssetMaster.init(
      {
        asset_master_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        asset_category: {
          type: DataTypes.ENUM,
          allowNull: false,
        },
        asset_type: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        active: {
          type: DataTypes.BOOLEAN,
          defaultValue: "true",
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "asset_master",
        timestamps: true,
      }
    );
  }
}
