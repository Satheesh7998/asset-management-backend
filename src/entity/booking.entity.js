var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
let Booking = class Booking extends BaseEntity {
};
__decorate([
    PrimaryGeneratedColumn("uuid", { name: "booking_id" }),
    __metadata("design:type", String)
], Booking.prototype, "booking_id", void 0);
__decorate([
    Column("varchar", { name: "booking_uid", unique: true, nullable: false }),
    __metadata("design:type", String)
], Booking.prototype, "booking_uid", void 0);
__decorate([
    Column("varchar", { name: "customer_name", nullable: false }),
    __metadata("design:type", String)
], Booking.prototype, "customer_name", void 0);
__decorate([
    Column("timestamptz", { name: "booking_date", nullable: false }),
    __metadata("design:type", Date)
], Booking.prototype, "booking_date", void 0);
__decorate([
    Column("real", { name: "amount", nullable: false }),
    __metadata("design:type", Number)
], Booking.prototype, "amount", void 0);
__decorate([
    Column("varchar", { name: "vendor", nullable: false }),
    __metadata("design:type", String)
], Booking.prototype, "vendor", void 0);
__decorate([
    Column("timestamptz", { name: "created_at", nullable: false }),
    __metadata("design:type", Date)
], Booking.prototype, "created_at", void 0);
__decorate([
    Column("timestamptz", { name: "updated_at", nullable: true }),
    __metadata("design:type", Date)
], Booking.prototype, "updated_at", void 0);
Booking = __decorate([
    Entity("booking")
], Booking);
export { Booking };
