import { Dice } from "../../../../../Dice.js";
import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class BodyPlate extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new ArmorInfo("Corselete de Aço", 1300, 17.5);
        s.Local = "Tronco, Virilha";
        s.RD = "6";
        npc.Equipments.push(s);
        if (Dice.IfDo(70)) {
            let s = new ArmorInfo("Braçadeiras de Placas", 1000, 7.5);
            s.Local = "Braços";
            s.RD = "6";
            npc.Equipments.push(s);
        }
        if (Dice.IfDo(50)) {
            let s = new ArmorInfo("Manoplas", 100, 1);
            s.Local = "Mãos";
            s.RD = "4";
            npc.Equipments.push(s);
        }
    }
}
