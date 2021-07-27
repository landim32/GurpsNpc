import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class LeatherThong extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new ArmorInfo("Tanga de Couro", 10, 0);
        s.Local = "Virilha";
        s.RD = "1";
        npc.Equipments.push(s);
    }
}
