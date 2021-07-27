import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class Tunic extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new ArmorInfo("Túnica de Pele", 25, 1);
        s.Local = "Tronco";
        s.RD = "1";
        npc.Equipments.push(s);
    }
}
