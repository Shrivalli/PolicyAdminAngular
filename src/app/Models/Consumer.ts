import { businessType } from "./businessType";


export interface consumer
{
 
  ConsumerId:number;
  Name:string;
  Pancard:string;
  DOB:string;
  Email:string;
  business_Overview:businessType;
  no_of_employees:number;
  annual_turnover:number ;
  capitalInvested:number;
  BusinessValue :number;
  AgentId:number;

}

