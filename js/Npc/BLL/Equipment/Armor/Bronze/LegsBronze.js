import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class LegsBronze extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new ArmorInfo("Grevas de Bronze", 270, 8.5);
        s.Local = "Pernas";
        s.RD = "3";
        npc.Equipments.push(s);

        s = new ArmorInfo("Botas", 80, 1.5);
        s.Local = "Pés";
        s.RD = "2";
        npc.Equipments.push(s);
    }
}
