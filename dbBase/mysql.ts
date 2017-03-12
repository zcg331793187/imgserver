/**
 * Created by zhoucaiguang on 2017/3/8.
 */


import  {mysqlBase} from './mysqlBase';
import * as Promise from 'bluebird';


// console.log(mysqlBase);


export default  class mysql extends mysqlBase {

    constructor() {

        super();

    }

    checkDataAndInsert(herfs: string[]) {

        if(herfs){


        herfs.forEach((item,index)=>{

            this.find('select id from node_url where url=?', [item]).spread((response: any) => {



                if (!response) {




                        this.insert('node_url', {url: item}).then((response) => {


                    });

                }




            });


        });


        }

    }

    addImgTitle (title:string,imgThums:string):Promise<Object>{

    return     this.insert('node_title', {title: title,imgThums:imgThums}).then((response) => {


                return response;

        });

    }


    checkImgDataAndInsert(herfs: string[],title:string) {


        this.find('select id from node_title where `title`=?',[title]).spread((response:any)=>{


            if (!response) {


                this.addImgTitle(title,herfs[0]).spread((res:any)=>{

                    console.log(res);

                    this.addImgs(herfs,res.insertId);
                });


            }else{



                this.addImgs(herfs,response.id);


            }




        });








    }



    addImgs (herfs:string[],titleId:number){

        if(herfs.length>0){


        herfs.forEach((item,index)=>{

            this.find('select id from node_img where url=?', [item]).spread((response: any) => {



                if (!response) {

                    this.insert('node_img', {url: item,titleId:titleId}).then((response) => {

                        console.log('插入成功');

                    });

                }




            });


        });
        }


    }


}


/*
 db.select('select * from node_title').spread((response:any)=>{

 console.log(response);

 }).catch((response)=>{
 console.log(response);
 });
 */

/*
 db.insert('node_sort',{namev:'123123'}).spread((response)=>{
 console.log(response);
 });
 */

/*
 db.update('node_sort',{namev:123,text:'123123123',www:'12312321'},'1=1').spread((response)=>{

 console.log(response);

 }).catch((error)=>{
 console.log('error:',error);
 });
 */