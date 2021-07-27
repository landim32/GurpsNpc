import { Dice } from '../../../../Dice.js';
import { ArmorEnum } from '../../../Model/ArmorEnum.js';
import { WeaponEnum } from '../../../Model/WeaponEnum.js';
import { Concept } from '../Concept.js';
import { FeatureInfo } from '../../../Model/FeatureInfo.js';

export class Swordman extends Concept {

    /**
     * @returns WeaponEnum[]
     */
    get PossibleWeapon() {
        return [
            WeaponEnum.Shortsword,
            WeaponEnum.ShortswordAndShield,
            WeaponEnum.ShortswordDual,
            WeaponEnum.Broadsword,
            WeaponEnum.BroadswordAndShield,
            WeaponEnum.BroadswordDual,
            WeaponEnum.Greatsword
        ];
    }

    /**
     * @returns ArmorEnum[]
     */
    get PossibleArmor() {
        return [
            ArmorEnum.LegsLeatherArmor,
            ArmorEnum.LeatherArmorWithoutHelm,
            ArmorEnum.FullLeatherArmor,
            ArmorEnum.LegsChainmail,
            ArmorEnum.ChainmailWithoutHelm,
            ArmorEnum.FullChainmail
        ];
    }

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc)
    {
        npc.ST = Dice.Roll(10, 12);
        npc.DX = Dice.Roll(10, 14);
        npc.Concept = "Espadachim";
        if (Dice.IfDo(70))
        {
            npc.Advantages.push(new FeatureInfo("Reflexos em Combate",15));
        }
        if (Dice.IfDo(70))
        {
            npc.Advantages.push(new FeatureInfo("Hipoalgia", 10));
        }
    }
}