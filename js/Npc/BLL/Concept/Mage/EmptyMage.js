import { Dice } from "../../../../Dice.js";
import { ArmorEnum } from "../../../Model/ArmorEnum.js";
import { FeatureInfo } from "../../../Model/FeatureInfo.js";
import { WeaponEnum } from "../../../Model/WeaponEnum.js";
import { Concept } from "../Concept.js";

export class EmptyMage extends Concept {

    /**
     * @returns WeaponEnum[]
     */
    get PossibleWeapon() {
        return [
            WeaponEnum.FreeHands,
            WeaponEnum.Club
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
        npc.Concept = "Mago";
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
    }
}
