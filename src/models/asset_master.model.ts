export enum AssetCategory {
  HardWare = "HardWare",
  SoftWare = "SoftWare",
}

export interface AssetMasterAttributes {
  asset_master_id?: string;
  asset_category: AssetCategory;
  asset_type: string;
  description?: string;
  active?: boolean;
}
export interface AssetMasterCreationAttributes extends Omit<AssetMasterAttributes, "asset_master_id" | "created_at" | "updated_at"> {}

export type IAddAssetMasterRequest = AssetMasterCreationAttributes;
