import { Dice } from "../../../../Dice.js";
import { AttributeEnum } from "../../../Model/AttributeEnum.js";
import { DifficultyEnum } from "../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../Model/SkillInfo.js";
import { MinorConcept } from "../MinorConcept.js";

export class Necromancer extends MinorConcept {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        npc.Skills.Add(new SkillInfo(
            "Roubar Energia",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.Add(new SkillInfo(
            "Roubar Vitalidade",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.Add(new SkillInfo(
            "Espírito da Caveira",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.Add(new SkillInfo(
            "Zumbi",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.Add(new SkillInfo(
            "Controlar Zumbi",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.Add(new SkillInfo(
            "Zumbis em Massa",
            AttributeEnum.Magic,
            DifficultyEnum.VeryHard,
            Dice.RollSkill()
        ));
        npc.Skills.Add(new SkillInfo(
            "Cessar Cura",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.Add(new SkillInfo(
            "Animar Sombra",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.Add(new SkillInfo(
            "Aprisionar Alma",
            AttributeEnum.Magic,
            DifficultyEnum.VeryHard,
            Dice.RollSkill()
        ));
        npc.Skills.Add(new SkillInfo(
            "Convocar Demônio",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.Add(new SkillInfo(
            "Expulsar",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.Add(new SkillInfo(
            "Roubar Juventude",
            AttributeEnum.Magic,
            DifficultyEnum.VeryHard,
            Dice.RollSkill()
        ));
    }
}