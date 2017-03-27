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
const imageServiceModel = require('../Model/imageServiceModel');
class imageService {
    static getInstance() {
        if (!imageService.instance) {
            imageService.instance = new imageService();
        }
        return imageService.instance;
    }
    getimgTitles(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let arg = ctx.params;
            let limit = Number(arg.limit);
            let where;
            if (!limit) {
                limit = 0;
            }
            where = {
                where: {
                    status: 1,
                },
                attributes: ['id', 'title', 'imgThums'],
                'limit': 18, offset: limit
            };
            ctx.body = yield imageServiceModel.getTitleDbFindAll(where);
        });
    }
    getSearchTitle(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let arg = ctx.params;
            let where;
            if (arg.title) {
                where = {
                    where: {
                        status: 1,
                        title: arg.title,
                    },
                    attributes: ['id', 'title', 'imgThums']
                };
                ctx.body = yield imageServiceModel.getTitleDbFindAll(where);
            }
        });
    }
    getTitleIdImg(ctx, next) {
        return __awaiter(this, void 0, void 0, function* () {
            let arg = ctx.params;
            let whereAll, whereOne;
            if (arg.titleId) {
                whereAll = {
                    where: {
                        titleId: arg.titleId,
                    },
                    attributes: ['url', 'titleId']
                };
                whereOne = {
                    where: {
                        status: 1,
                        id: arg.titleId,
                    },
                    attributes: ['title']
                };
                let list = yield imageServiceModel.getImgDbFindAll(whereAll);
                let title = yield imageServiceModel.getTitleDbFindOne(whereOne);
                ctx.body = { list, title };
            }
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = imageService;
