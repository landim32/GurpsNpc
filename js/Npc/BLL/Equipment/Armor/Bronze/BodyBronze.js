import { Dice } from "../../../../../Dice.js";
import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class BodyBronze extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new ArmorInfo("Conselete de Bronze", 1300, 20);
        s.Local = "Tronco, Virilha";
        s.RD = "5";
        npc.Equipments.push(s);
        if (Dice.IfDo(50)) {
            let s = new ArmorInfo("Braçadeiras de Bronze", 180, 4.5);
            s.Local = "Braços";
            s.RD = "3";
            npc.Equipments.push(s);
        }
        if (Dice.IfDo(50)) {
            let s = new ArmorInfo("Luvas de Couro", 30, 0);
            s.Local = "Mãos";
            s.RD = "2";
            npc.Equipments.push(s);
        }
    }
}
