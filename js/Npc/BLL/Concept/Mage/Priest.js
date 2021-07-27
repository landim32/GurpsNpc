import { Dice } from "../../../../Dice.js";
import { ArmorEnum } from "../../../Model/ArmorEnum.js";
import { FeatureInfo } from "../../../Model/FeatureInfo.js";
import { WeaponEnum } from "../../../Model/WeaponEnum.js";
import { Concept } from "../Concept.js";
import { MageHeal } from "./MageHeal.js";

export class Priest extends Concept {

    /**
     * @returns WeaponEnum[]
     */
    get PossibleWeapon() {
        return [
            WeaponEnum.FreeHands,
            WeaponEnum.Mace,
            WeaponEnum.Warhammer
        ];
    }

    /**
     * @returns ArmorEnum[]
     */
    get PossibleArmor() {
        return [
            ArmorEnum.Tunic
        ];
    }

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        npc.IQ = Dice.Roll(11, 16);
        npc.Concept = "Sacerdote";
        switch (Dice.Next(1, 3)) {
            case 1:
                npc.Advantages.push(new FeatureInfo("Abtidão Magica 1", 10));
                npc.MagicMod = 1;
                break;
            case 2:
                npc.Advantages.push(new FeatureInfo("Abtidão Magica 2", 20));
                npc.MagicMod = 2;
                break;
            case 3:
                npc.Advantages.push(new FeatureInfo("Abtidão Magica 3", 30));
                npc.MagicMod = 3;
                break;
        }
        new MageHeal().DoConcept(npc);
        if (Dice.IfDo(70)) {
            let r = Dice.Roll(1, 5);
            switch (r) {
                case 1:
                    npc.Disvantages.push(new FeatureInfo("Pacifismo (Assassino Relutante)", -5));
                    break;
                case 2:
                    npc.Disvantages.push(new FeatureInfo("Pacifismo (Incapaz de ferir inocentes)", -10));
                    break;
                case 3:
                    npc.Disvantages.push(new FeatureInfo("Pacifismo (Incapaz de matar)", -15));
                    break;
                case 4:
                    npc.Disvantages.push(new FeatureInfo("Pacifismo (Legítima Defesa)", -15));
                    break;
                case 5:
                    npc.Disvantages.push(new FeatureInfo("Pacifismo (Não-Violência Total)", -30));
                    break;
            }
        }
        if (Dice.IfDo(70)) {
            npc.Disvantages.push(new FeatureInfo("Honestidade", -10));
        }
    }
}
