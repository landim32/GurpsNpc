import { Dice } from '../../../../Dice.js';
import { ArmorEnum } from '../../../Model/ArmorEnum.js';
import { FeatureInfo } from '../../../Model/FeatureInfo.js';
import { SkillInfo } from '../../../Model/SkillInfo.js';
import { WeaponEnum } from '../../../Model/WeaponEnum.js';
import { Concept } from '../Concept.js';
import { AttributeEnum } from '../../../Model/AttributeEnum.js';
import { DifficultyEnum } from '../../../Model/DifficultyEnum.js';

export class Thief extends Concept {
    
    /**
     * @returns WeaponEnum[]
     */
    get PossibleWeapon() {
        return [
            WeaponEnum.FreeHands,
            WeaponEnum.Knife,
            WeaponEnum.KnifeDual,
            WeaponEnum.Shortsword
        ];
    }

    /**
     * @returns ArmorEnum[]
     */
    get PossibleArmor() {
        return [
            ArmorEnum.LeatherThong,
            ArmorEnum.LegsLeatherArmor,
            ArmorEnum.LeatherArmorWithoutHelm,
            ArmorEnum.FullLeatherArmor,
        ];
    }

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc)
    {
        npc.ST = Dice.Roll(8, 11);
        npc.DX = Dice.Roll(10, 15);
        npc.HT = Dice.Roll(8, 11);
        npc.Concept = "Ladrão";
        if (Dice.IfDo(50)) {
            npc.Advantages.push(new FeatureInfo("Reflexos em Combate", 15));
        }
        if (Dice.IfDo(30)) {
            npc.Advantages.push(new FeatureInfo("Ambidestria", 5));
        }
        if (Dice.IfDo(20)) {
            npc.Advantages.push(new FeatureInfo("Equilibrio Perfeito", 15));
        }
        if (Dice.IfDo(20)) {
            npc.Advantages.push(new FeatureInfo("Flexibilidade", 5));
        }
        if (Dice.IfDo(20)) {
            npc.Advantages.push(new FeatureInfo("Recuperação Acelerada", 5));
        }
        if (Dice.IfDo(20)) {
            npc.Disvantages.push(new FeatureInfo("Alcolismo", -15));
        }
        if (Dice.IfDo(20)) {
            npc.Disvantages.push(new FeatureInfo("Cobiça", -15));
        }
        if (Dice.IfDo(50)) {
            npc.Disvantages.push(new FeatureInfo("Magro", -5));
        }
        npc.Skills.push(new SkillInfo(
            "Furtividade", 
            AttributeEnum.DX, 
            DifficultyEnum.Easy, 
            Dice.RollSkill()
        ));
    }
}
