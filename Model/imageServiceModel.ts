/**
 * Created by zhoucaiguang on 2017/3/27.
 */
import * as db from '../db/SequelizeDb';


export async function getImgDbFindAll(where?) {

    return await db.ImgDb.findAll(where);

}

export async function getImgDbFindOne(where?) {

    return await db.ImgDb.findOne(where);

}

export async function getTitleDbFindAll(where?) {

    return await db.TitleDb.findAll(where);

}

export async function getTitleDbFindOne(where?) {

    return await db.TitleDb.findOne(where);

}
