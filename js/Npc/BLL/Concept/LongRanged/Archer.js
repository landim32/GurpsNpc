import { Dice } from '../../../../Dice.js';
import { ArmorEnum } from '../../../Model/ArmorEnum.js';
import { FeatureInfo } from '../../../Model/FeatureInfo.js';
import { WeaponEnum } from '../../../Model/WeaponEnum.js';
import { Concept } from '../Concept.js';

export class Archer extends Concept {
    /**
     * @returns WeaponEnum[]
     */
    get PossibleWeapon() {
        return [
            WeaponEnum.Bow
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
        npc.Concept = "Arqueiro";
        if (Dice.IfDo(50)) {
            npc.Advantages.push(new FeatureInfo("Reflexos em Combate", 15));
        }
    }
}
