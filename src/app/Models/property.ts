import { PropertyType } from "./properType";

export interface property{
       PropertyId :number,
       BuildingAge :number,
       Buildingsqft :number,
       BuildingStoreys:number,
       CostOfProperty:number,
       UseFulLifeOfTheAsset :number,
       SalvageValue :number,
       PropertyType: PropertyType,
       PropertyValue:number,
       ConsumerId :number

}
