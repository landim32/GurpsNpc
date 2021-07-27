import { Dice } from "../../../../Dice.js";
import { AttributeEnum } from "../../../Model/AttributeEnum.js";
import { DifficultyEnum } from "../../../Model/DifficultyEnum.js";
import { SkillInfo } from "../../../Model/SkillInfo.js";
import { MinorConcept } from "../MinorConcept.js";

export class MageAnimal extends MinorConcept {
    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        npc.Skills.push(new SkillInfo(
            "Perceber Inimigo",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Perceber Emoção",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Persuasão",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Acalmar Animal",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Controlar Animal",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Convocar Animal",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Falar com Animais",
            AttributeEnum.Magic,
            DifficultyEnum.Hard,
            Dice.RollSkill()
        ));
        npc.Skills.push(new SkillInfo(
            "Metaforfose",
            AttributeEnum.Magic,
            DifficultyEnum.VeryHard,
            Dice.RollSkill()
        ));
        npc.ExtraDamage.push("Metamorfose Animal (custo 6, manter 3, T.Oper. 3s, dur. 1 hora)");

        let sb = [];
        sb.push("<strong>Tigre</strong><br />" +
            "ST 17; DX 13; IQ 4; HT 11.<br />" +
            "Vontade 11, Per 12; Velocidade 6; Esquiva 10; Deslocamento 10.<br />" +
            "MT + 1(2 hexágonos); 250 kg.<br />" +
            "Características: Animal Selvagem; Dentes Afiados; Garras Afiadas; Quadrúpede; RD 1; Reflexos em Combate; Tolerância à Temperatura 1; Visão Noturna 5.<br />" +
            "Perícias: Briga 15; Furtividade 13; Natação 13.");
        npc.Minions.push(sb.join("\n"));
    }
}
