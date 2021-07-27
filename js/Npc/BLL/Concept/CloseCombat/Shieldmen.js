import { Dice } from '../../../../Dice.js';
import { ArmorEnum } from '../../../Model/ArmorEnum.js';
import { FeatureInfo } from '../../../Model/FeatureInfo.js';
import { WeaponEnum } from '../../../Model/WeaponEnum.js';
import { Concept } from '../Concept.js';

export class Shieldmen extends Concept {

    /**
     * @returns WeaponEnum[]
     */
    get PossibleWeapon() {
        return [
            WeaponEnum.ShortswordAndShield,
            WeaponEnum.BroadswordAndShield,
            WeaponEnum.AxeAndShield,
            WeaponEnum.SpearAndShield,
            WeaponEnum.ClubAndShield
        ];
    }

    /**
     * @returns ArmorEnum[]
     */
    get PossibleArmor() {
        return [
            ArmorEnum.FullBronzeArmor,
            ArmorEnum.FullChainmail,
            ArmorEnum.FullScalesArmor,
            ArmorEnum.FullPlateArmor
        ];
    }

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc)
    {
        npc.ST = Dice.Roll(10, 13);
        npc.DX = Dice.Roll(10, 14);
        npc.Concept = "Escudeiro";
        if (Dice.IfDo(70)) {
            npc.Advantages.push(new FeatureInfo("Reflexos em Combate", 15));
        }
        if (Dice.IfDo(70)) {
            npc.Advantages.push(new FeatureInfo("Hipoalgia",10));
        }
    }
}