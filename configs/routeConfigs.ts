/**
 * Created by zhoucaiguang on 2017/3/27.
 */



import imageService from '../router/imageService';
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
    },
    {
        method:Methods[Methods.get],
        url:'/imgProxy/id/:id',
        fn: imageService.getInstance().getImgBuffer
    },
    {
        method:Methods[Methods.get],
        url:'/imgProxy/titleId/:titleId',
        fn: imageService.getInstance().getImgBuffer
    },
    {
        method:Methods[Methods.get],
        url:'/imgtotal',
        fn: imageService.getInstance().getCount
    }
];