import { sequelize } from "../../db_connection";
import { Employee } from "../employee.entity";
// import { initEmployeeModel } from "../employee.entity";

export class CreateTables {
  public static async InitTables() {
    await sequelize.authenticate();
    console.log("Database connected");

    // ✅ Initialize model with sequelize instance
    await Employee.initEmployeeModel(sequelize);
    // ✅ Sync tables
    await sequelize.sync({ alter: true });
    console.log("Tables synced");
  }
}
