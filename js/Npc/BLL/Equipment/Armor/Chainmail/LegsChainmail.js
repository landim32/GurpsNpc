import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class LegsChainmail extends Equipment
    {
        /**
         * 
         * @param {NpcInfo} npc 
         */
        DoEquipment(npc)
        {
            let s = new ArmorInfo("Perneiras de Cota de Malha", 110, 7.5);
            s.Local = "Pernas";
            s.RD = "4/2";
            npc.Equipments.push(s);
            
            s = new ArmorInfo("Botas", 80, 1.5);
            s.Local = "Pés";
            s.RD = "2";
            npc.Equipments.push(s);
        }
    }
