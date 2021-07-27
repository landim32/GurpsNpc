import { Dice } from '../../../../Dice.js';
import { ArmorEnum } from '../../../Model/ArmorEnum.js';
import { FeatureInfo } from '../../../Model/FeatureInfo.js';
import { WeaponEnum } from '../../../Model/WeaponEnum.js';
import { Concept } from '../Concept.js';

export class Crossbowman extends Concept {
    /**
     * @returns WeaponEnum[]
     */
    get PossibleWeapon() {
        return [
            WeaponEnum.Crossbow
        ];
    }

    /**
     * @returns ArmorEnum[]
     */
    get PossibleArmor() {
        return [
            ArmorEnum.LegsChainmail,
            ArmorEnum.ChainmailWithoutHelm
        ];
    }

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        npc.DX = Dice.Roll(10, 14);
        npc.Concept = "Besteiro";
        if (Dice.IfDo(50)) {
            npc.Advantages.push(new FeatureInfo("Reflexos em Combate", 15));
        }
    }
}
