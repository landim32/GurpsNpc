import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class HeadPlate extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new ArmorInfo("Elmo Grande", 340, 5);
        s.Local = "Crânio, Rosto, Pescoço";
        s.RD = "7";
        npc.Equipments.push(s);
    }
}
