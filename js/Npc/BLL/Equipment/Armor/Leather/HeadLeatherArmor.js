import { Dice } from "../../../../../Dice.js";
import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class HeadLeatherArmor extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        if (Dice.IfDo(50)) {
            let s = new ArmorInfo("Barrete de Couro", 32, 0);
            s.Local = "Crânio";
            s.RD = "1";
            npc.Equipments.push(s);
        }
        else {
            let s = new ArmorInfo("Elmo de Couro", 20, 0.25);
            s.Local = "Crânio, Rosto";
            s.RD = "2";
            npc.Equipments.push(s);
        }
    }
}
