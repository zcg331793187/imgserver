"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
/**
 * Created by zhoucaiguang on 2017/3/27.
 */
const imageServiceModel = require('../Model/imageProxyModel');
class imageService {
    static getInstance() {
        if (!imageService.instance) {
            imageService.instance = new imageService();
        }
        return imageService.instance;
    }
    /**
     * 获取
     * @param ctx
     * @param next
     * @returns {Promise<void>}
     */
    getAll(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            ctx.body = yield imageServiceModel.getAll();
        });
    }
    getValidAll(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let where = {
                where: {
                    isUse: 1,
                },
                attributes: ['id', 'keyName', 'tips']
            };
            yield next();
            ctx.body = yield imageServiceModel.getAll(where);
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = imageService;
