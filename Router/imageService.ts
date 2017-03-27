/**
 * Created by zhoucaiguang on 2017/3/27.
 */
import * as imageServiceModel from '../Model/imageServiceModel';


export default class imageService{

    private static instance: imageService;



    public static getInstance() {
        if (!imageService.instance) {
            imageService.instance = new imageService();
        }
        return imageService.instance;
    }


    public async getimgTitles(ctx,next){
        let arg = ctx.params;
        let limit = Number(arg.limit);
        let where;
        if(!limit){
            limit  = 0;
        }

        where  ={
            where:{
                status:1,
            },
            attributes: ['id', 'title','imgThums'],
            'limit': 18,offset: limit
        };

        ctx.body =    await imageServiceModel.getTitleDbFindAll(where);


    }



    public async getSearchTitle(ctx,next){
        let arg = ctx.params;
        let where;
        if(arg.title){
            where  ={
                where:{
                    status:1,
                    title:arg.title,
                },
                attributes: ['id', 'title','imgThums']
            };

            ctx.body =    await imageServiceModel.getTitleDbFindAll(where);


        }

    }


    public async getTitleIdImg(ctx,next){
        let arg = ctx.params;
        let whereAll,whereOne;
        if(arg.titleId){
              whereAll  ={
                where:{
                    titleId:arg.titleId,
                },
                attributes: ['url', 'titleId']
            };
            whereOne = {
                where:{
                    status:1,
                    id:arg.titleId,
                },
                attributes: ['title']
            };
          let list =   await imageServiceModel.getImgDbFindAll(whereAll);
           let title =  await imageServiceModel.getTitleDbFindOne(whereOne);
            ctx.body =  {list, title};
        }
    }











}