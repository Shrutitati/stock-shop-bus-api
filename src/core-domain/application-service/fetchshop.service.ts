import { Inject, Injectable } from "@nestjs/common";
import { ShopModel } from "src/core-domain/models/shop.model";
import { IBaseService } from "src/core-domain/application-service/base.service";
import { HttpClient } from "src/infrastructure/client/http.client";


@Injectable()
export default class FetchShopService implements IBaseService<number, ShopModel> {
    constructor(private httpclient: HttpClient) {
        console.log('FetchOrderService created')
    }

    async handle(): Promise<ShopModel[]> {
        const responseObject = await this.httpclient.get('all');
        return responseObject;
    }
}