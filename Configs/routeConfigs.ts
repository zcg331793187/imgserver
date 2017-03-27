/**
 * Created by zhoucaiguang on 2017/3/27.
 */



import baseKeyWord from '../Router/baseKeyWord';
import imageService from '../Router/imageService';
interface IRouteConfigs {

    method: string
    url: string
    fn: any
}

enum Methods {post,get}



export const config:IRouteConfigs[] =    [
    {
        method:Methods[Methods.get],
        url:'/imgDetail/:titleId',
        fn: imageService.getInstance().getTitleIdImg
    },
    {
        method:Methods[Methods.get],
        url:'/imgSearch/:title',
        fn: imageService.getInstance().getSearchTitle
    },
    {
        method:Methods[Methods.get],
        url:'/imgTitles/:limit',
        fn: imageService.getInstance().getimgTitles
    }
];