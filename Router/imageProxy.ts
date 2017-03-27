/**
 * Created by zhoucaiguang on 2017/3/27.
 */
import * as imageServiceModel from '../Model/imageProxyModel';


export default class imageService{

    private static instance: imageService;



    public static getInstance() {
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
    public async getAll(ctx,next){



        ctx.body =    await imageServiceModel.getAll();

    }


    public async getValidAll(ctx,next){

        let  where  ={
            where:{
                isUse:1,
            },
            attributes: ['id', 'keyName','tips']
        };
        await next();
        ctx.body =    await imageServiceModel.getAll(where);

    }








}