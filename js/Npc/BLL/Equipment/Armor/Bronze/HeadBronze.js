import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class HeadBronze extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new ArmorInfo("Elmo de Bronze", 160, 3.7);
        s.Local = "Crânio, Rosto";
        s.RD = "3";
        npc.Equipments.push(s);
    }
}
