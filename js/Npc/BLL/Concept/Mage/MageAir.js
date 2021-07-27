import { Dice } from "../../../../Dice.js";
import { AttributeEnum } from "../../../Model/AttributeEnum.js";
import { DifficultyEnum } from "../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../Model/SkillInfo.js";
import { MinorConcept } from "../MinorConcept.js";

export class MageAir extends MinorConcept {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        npc.Skills.push(new SkillInfo(
            "Criar Ar", 
            AttributeEnum.Magic, 
            DifficultyEnum.Hard, 
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Moldar Ar", 
            AttributeEnum.Magic, 
            DifficultyEnum.Hard, 
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Som", 
            AttributeEnum.Magic, 
            DifficultyEnum.Hard, 
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Estrondo", 
            AttributeEnum.Magic, 
            DifficultyEnum.Hard, 
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Concussão", 
            AttributeEnum.Magic, 
            DifficultyEnum.Hard, 
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Magia Concussão 1/2D Prec 1 Alcance 20/40 Fadiga 2/4 (Qualquer um a 10 metros, HT-3 para não atordoar ou sair do atoamento)");
        npc.Skills.push(new SkillInfo(
            "Ataque Inato (Projétil)", 
            AttributeEnum.DX, 
            DifficultyEnum.Easy, 
            Dice.RollSkill()
        ));
    }
}
