import { IsEnum, IsOptional } from "class-validator";
import { i18nValidationMessage } from "nestjs-i18n";
import { OrderStatusEnum } from "../../../common";

export class OrdersRequest {
    @IsOptional()
    @IsEnum(OrderStatusEnum, {message: i18nValidationMessage('validation.orderStatusInvalid')})
    status: OrderStatusEnum

    @IsOptional()
    isPaid: string
}