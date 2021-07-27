import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class LegsPlate extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new ArmorInfo("Perneiras de Placas", 1100, 10);
        s.Local = "Pernas";
        s.RD = "6";
        npc.Equipments.push(s);
        
        s = new ArmorInfo("Sollerets", 150, 3.5);
        s.Local = "Pés";
        s.RD = "4";
        npc.Equipments.push(s);
    }
}
