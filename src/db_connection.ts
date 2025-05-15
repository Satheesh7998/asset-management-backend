import { Sequelize } from "sequelize";
import { Employee } from "./entity/employee.entity";
import { ControllerFactory } from "./controllers/controller-factory.controller";
import express, { Request, Response } from "express";

export const sequelize = new Sequelize("postgres", "postgres", "12345678", {
  dialect: "postgres",
  host: "localhost",
  schema: "public",
});

export class InitService {
  public static async InitDb(app: any) {
    // await sequelize.sync({ alter: true }).then(() => {
    new ControllerFactory().getControllers().forEach((controller) => {
      app.use(controller.getRoutePath(), controller.getRouter());
    });
    // })
  }
}
