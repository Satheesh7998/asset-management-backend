// src/entity/employee.entity.ts
import { DataTypes, Model, Sequelize } from "sequelize";
import { AssetStatus } from "../models/asset.model";

export class Asset extends Model {
  public asset_id!: string;
  public asset_master_id!: string;
  public asset_name!: string;
  public serial_number!: string;
  public manufacture_date!: Date;
  public description!: string;
  public asset_status!: AssetStatus;

  public static async initEmployeeModel(sequelize: Sequelize) {
    Asset.init(
      {
        asset_id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        asset_master_id: {
          type: DataTypes.ENUM,
          allowNull: false,
        },
        asset_name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        serial_number: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        manufacture_date: {
          type: DataTypes.DATE,
          allowNull: false,
          unique: true,
        },
        asset_status: {
          type: DataTypes.ENUM,
          defaultValue: "Available",
          allowNull: false,
        },
      },
      {
        sequelize,
        tableName: "asset",
        timestamps: true,
      }
    );
  }
}
