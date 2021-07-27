import { Dice } from "../../../../../Dice.js";
import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class BodyLeatherArmor extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        if (Dice.IfDo(50)) {
            let s = new ArmorInfo("Jaqueta de Couro", 50, 2);
            s.Local = "Tronco, Braços";
            s.RD = "1";
            npc.Equipments.push(s);
        }
        else {
            let s = new ArmorInfo("Armadura de Couro", 100, 5);
            s.Local = "Tronco";
            s.RD = "2";
            npc.Equipments.push(s);
            if (Dice.IfDo(50)) {
                let s = new ArmorInfo("Mangas de Couro Reforçado", 50, 1);
                s.Local = "Braços";
                s.RD = "2";
                npc.Equipments.push(s);
            }
        }
        if (Dice.IfDo(50)) {
            let s = new ArmorInfo("Luvas de Couro", 30, 0);
            s.Local = "Mãos";
            s.RD = "2";
            npc.Equipments.push(s);
        }
    }
}
