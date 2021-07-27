import { Dice } from "../../../../../Dice.js";
import { ArmorInfo } from "../../../../Model/ArmorInfo.js";
import { Equipment } from "../../Equipment.js";

export class LegsLeatherArmor extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        let s = null;
        let d = Dice.Next(1, 4);
        switch (d) {
            case 1:
                s = new ArmorInfo("Perneiras de Couro", 40, 1);
                s.Local = "Pernas";
                s.RD = "1";
                npc.Equipments.push(s);
                break;
            case 2:
                s = new ArmorInfo("Perneiras de Couro Reforçada", 50, 1);
                s.Local = "Pernas";
                s.RD = "2";
                npc.Equipments.push(s);
                break;
            case 3:
                s = new ArmorInfo("Saiote de Couro Batido", 60, 2);
                s.Local = "Virilha, Pernas";
                s.RD = "3/2";
                npc.Equipments.push(s);
                break;
            case 4:
                s = new ArmorInfo("Calça de Couro", 40, 1.5);
                s.Local = "Virilha, Pernas";
                s.RD = "1";
                npc.Equipments.push(s);
                break;
        }
        d = Dice.Next(1, 3);
        switch (d) {
            case 1:
                s = new ArmorInfo("Sandálias", 25, 0.25);
                s.Local = "Pés";
                s.RD = "0";
                npc.Equipments.push(s);
                break;
            case 2:
                s = new ArmorInfo("Sapatos", 40, 1);
                s.Local = "Pés";
                s.RD = "1";
                npc.Equipments.push(s);
                break;
            case 3:
                s = new ArmorInfo("Botas", 80, 1.5);
                s.Local = "Pés";
                s.RD = "2";
                npc.Equipments.push(s);
                break;
        }
    }
}
