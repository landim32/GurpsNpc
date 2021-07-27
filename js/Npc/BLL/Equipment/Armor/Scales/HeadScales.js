import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class HeadScales extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new ArmorInfo("Celada", 100, 2.5);
        s.Local = "Crânio";
        s.RD = "4";
        npc.Equipments.push(s);
    }
}
