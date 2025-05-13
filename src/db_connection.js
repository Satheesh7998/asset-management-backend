import 'dotenv/config';
import { Sequelize } from "sequelize";
export const sequelize = new Sequelize("postgres", "postgres", "12345678", {
    host: "localhost",
    dialect: "postgres",
});
