export enum AssetStatus {
  Available = "Available",
  Assigned = "Assigned",
  Returned = "Returned",
  Scraped = "Scraped",
}

export interface AssetAttributes {
  asset_id?: string;
  asset_master_id?: string;
  asset_name?: string;
  serial_number?: string;
  description?: string;
  manufacture_date?: Date;
  asset_status?: AssetStatus;
}
export interface AssetCreationAttributes extends Omit<AssetAttributes, "asset_id" | "created_at" | "updated_at"> {}

export type IAddAssetRequest = AssetCreationAttributes;
