import { Dice } from "../../../../Dice.js";
import { AttributeEnum } from "../../../Model/AttributeEnum.js";
import { DifficultyEnum } from "../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../Model/SkillInfo.js";
import { MinorConcept } from "../MinorConcept.js";

export class WaterMage extends MinorConcept {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        npc.Skills.push(new SkillInfo(
            "Arma Congelante",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Corpo de Água",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Esfera de Gelo",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Esfera de Gelo 1/3D Prec 2 Alcance 40/80 Fadiga 1/3");
        npc.Skills.push(new SkillInfo(
            "Jato de Água",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Chuva de Ácido",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Bola de Ácido",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Chuva de Adagas de Gelo",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Sopro Congelante",
            AttributeEnum.Magic,
            DifficultyEnum.VeryHard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Sopro de Ácido",
            AttributeEnum.Magic,
            DifficultyEnum.VeryHard,
            Dice.RollSkill()
        ));
    }
}
