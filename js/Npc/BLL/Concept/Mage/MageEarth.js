import { AttributeEnum } from "../../../Model/AttributeEnum.js";
import { DifficultyEnum } from "../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../Model/SkillInfo.js";
import { MinorConcept } from "../MinorConcept.js";

export class MageEarth extends MinorConcept {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        npc.Skills.push(new SkillInfo(
            "Carne para Pedra",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Carne para Pedra Fadiga 10 (Transforma em pedra, Resit. HT)");
        npc.Skills.push(new SkillInfo(
            "Petrificação Parcial",
            AttributeEnum.Magic,
            DifficultyEnum.VeryHard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Petrificação Parcial Fadiga 12 (Transforma em pedra, Resit. HT)");
        npc.Skills.push(new SkillInfo(
            "Chuva de Pedra",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Chuva de Pedra 2D-2 cont Fadiga 2 (Area)");
        npc.Skills.push(new SkillInfo(
            "Corpo de Pedra",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Terremoto",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
    }
}
