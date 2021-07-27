import { Dice } from '../../../../Dice.js';
import { ArmorEnum } from '../../../Model/ArmorEnum.js';
import { FeatureInfo } from '../../../Model/FeatureInfo.js';
import { WeaponEnum } from '../../../Model/WeaponEnum.js';
import { Concept } from '../Concept.js';

export class Barbarian extends Concept {

    /**
     * @returns WeaponEnum[]
     */
    get PossibleWeapon() {
        return [
            WeaponEnum.FreeHands,
            WeaponEnum.Axe,
            WeaponEnum.AxeAndShield,
            WeaponEnum.DualAxe,
            WeaponEnum.TwrowingAx,
            WeaponEnum.TwrowingAxAndShield,
            WeaponEnum.DualTwrowingAx,
            WeaponEnum.Pickaxe,
            WeaponEnum.PickaxeAndShield,
            WeaponEnum.DualPickaxe,
            WeaponEnum.AxeAndPickaxe,
            WeaponEnum.Mace,
            WeaponEnum.MaceAndShield,
            WeaponEnum.Club,
            WeaponEnum.ClubAndShield,
            WeaponEnum.Shortsword,
            WeaponEnum.ShortswordAndShield,
            WeaponEnum.ShortswordDual,
            WeaponEnum.TwoHandedAx,
            WeaponEnum.Warhammer,
            WeaponEnum.Greatsword
        ];
    }

    /**
     * @returns ArmorEnum[]
     */
    get PossibleArmor() {
        return [
            ArmorEnum.LeatherThong,
            ArmorEnum.LegsLeatherArmor
        ];
    }

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc)
    {
        npc.ST = Dice.Roll(10, 16);
        npc.DX = Dice.Roll(10, 14);
        npc.HT = Dice.Roll(10, 14);
        npc.Concept = "Bárbaro";
        if (Dice.IfDo(70)) {
            npc.Advantages.push(new FeatureInfo("Reflexos em Combate", 15));
        }
        if (Dice.IfDo(70))
        {
            npc.Advantages.push(new FeatureInfo("Hipoalgia", 10));
        }
    }
}
