import { Body, Controller, Get, HttpException, HttpStatus, Post } from "@nestjs/common";
import FetchShopService from "src/core-domain/application-service/fetchshop.service";
import { WinstonLoggerService } from "src/infrastructure/logger/winston-logger.service";


@Controller()
export class ShopController {
    constructor(
        private fetchShopService: FetchShopService,
        private logger: WinstonLoggerService,) {
        this.logger.setContext(ShopController.name);
        console.log('shop service controller created')
    }

    @Get('/all')
    fetchShop() {
        this.logger.info('in fetchMasterData info', { key: 'value' });
        this.logger.error('in fetchMasterData error', { key: 'value' });
        this.logger.debug('in fetchMasterData debug', { key: 'value' });
        this.logger.warn('in fetchMasterData warn');
        console.log('orders service controller fetchOrders method')
        //throw new HttpException("err string", HttpStatus.FORBIDDEN);
        return this.fetchShopService.handle()
    }
}