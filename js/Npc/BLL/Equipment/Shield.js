import { Dice } from "../../../Dice.js";
import { AttributeEnum } from "../../Model/AttributeEnum.js";
import { DifficultyEnum } from "../../Model/DifficultyEnum.js";
import { ShieldInfo } from "../../Model/ShieldInfo.js";
import { SkillInfo } from "../../Model/SkillInfo.js";
import { Equipment } from "./Equipment.js";

export class Shield extends Equipment {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoEquipment(npc) {
        npc.Skills.push(new SkillInfo(
            "Escudo",
            AttributeEnum.DX,
            DifficultyEnum.Easy,
            Dice.RollSkill()
        ));
        let s = null;
        switch (Dice.Next(1, 4)) {
            case 1:
                s = new ShieldInfo("Escudo Leve", 25, 1);
                s.BD = 1;
                s.RD = 5;
                s.PV = 20;
                npc.Equipments.push(s);
                break;
            case 2:
                s = new ShieldInfo("Escudo Pequeno", 40, 4);
                s.BD = 1;
                s.RD = 6;
                s.PV = 30;
                npc.Equipments.push(s);
                break;
            case 3:
                s = new ShieldInfo("Escudo Médio", 60, 7.5);
                s.BD = 2;
                s.RD = 7;
                s.PV = 40;
                npc.Equipments.push(s);
                break;
            case 4:
                s = new ShieldInfo("Escudo Grande", 90, 12.5);
                s.BD = 3;
                s.RD = 9;
                s.PV = 60;
                npc.Equipments.push(s);
                break;
        }
    }
}
