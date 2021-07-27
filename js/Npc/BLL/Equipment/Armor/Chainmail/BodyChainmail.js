import { Dice } from "../../../../../Dice.js";
import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class BodyChainmail extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = new ArmorInfo("Camisa de Cota de Malha", 150, 8);
        s.Local = "Tronco";
        s.RD = "4/2";
        npc.Equipments.push(s);
        if (Dice.IfDo(50)) {
            let s = new ArmorInfo("Mangas Cota de Malha", 50, 1);
            s.Local = "Braços";
            s.RD = "2";
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