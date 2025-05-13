import express from "express";
export class BaseController {
    constructor(version, controllerName) {
        this.router = express.Router();
        this.version = version;
        this.controllerName = controllerName;
    }
    getRoutePath() {
        return "/api" + this.version.trim() + this.controllerName.trim();
    }
    getRouter() {
        return this.router;
    }
}
