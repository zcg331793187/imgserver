/**
 * Created by zhoucaiguang on 2017/3/27.
 */
import * as imageServiceModel from '../model/imageServiceModel';
import {httpGet} from '../model/reqModel';


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
            attributes: ['id', 'title'],
            'limit': 18,offset: limit,
            order:'id desc'
        };

        ctx.body =    await imageServiceModel.getTitleDbFindAll(where);


    }



    public async getCount(ctx,next){




          let count =   await imageServiceModel.getTitleDbCount();

        ctx.body = {count};
    }


    public async getImgBuffer(ctx,next){

    //    img-proxy
        let arg = ctx.params;


        let titleId = arg.titleId;
        let id = arg.id;
        let whereId;
        if(titleId){
            whereId = {titleId};
        }else if(id){
            whereId = {id};
        }


        let whereOne = {
            where:whereId,
            'limit':1,offset: 0,
            attributes: ['url']
        };

        let imgPath:any =   await imageServiceModel.getImgDbFindOne(whereOne);




     let   resUrl = imageServiceModel.handelReferer(imgPath.url);
        let  option = {headers:{},iSEncoding:true,resolveWithFullResponse:true};
        if(resUrl){
            option.headers['Referer'] = 'http://girl-atlas.net/';
        }


        let imgBuffer =    await httpGet(imgPath.url,{},option);


        ctx.set('Content-Type',imgBuffer.headers['content-type']);
        ctx.set('Cache-Control','max-age=259200');
        ctx.body = imgBuffer.body;

    }


    public async getSearchTitle(ctx,next){
        let arg = ctx.params;
        let where;
        if(arg.title){
            where  ={
                where:{
                    status:1,
                    title:{like:'%'+arg.title+'%'},
                },
                attributes: ['id', 'title']
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
                attributes: ['id', 'titleId']
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