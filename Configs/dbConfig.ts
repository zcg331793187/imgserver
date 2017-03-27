/**
 * Created by zhoucaiguang on 2017/3/24.
 */


interface IdbConfigs{
    server:string,
    user:string,
    password:string,
    port:number
    database:string,
    maxSockets?:number,
    timeout?:number,
    DB_PREFIX?:string
}

export const dbConfigs:IdbConfigs = {
    server:'localhost',
    user:"root",
    password:"root",
    database:"NodeJs",
    port:3306,
    maxSockets : 10,//pool使用
    timeout : 1,//pool使用
    DB_PREFIX:'node'
};
