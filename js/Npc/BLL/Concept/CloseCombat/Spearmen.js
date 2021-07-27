import { Dice } from '../../../../Dice.js';
import { ArmorEnum } from '../../../Model/ArmorEnum.js';
import { FeatureInfo } from '../../../Model/FeatureInfo.js';
import { WeaponEnum } from '../../../Model/WeaponEnum.js';
import { Concept } from '../Concept.js';

export class Spearmen extends Concept {

    /**
     * @returns WeaponEnum[]
     */
    get PossibleWeapon() {
        return [
            WeaponEnum.Spear,
            WeaponEnum.SpearAndShield,
            WeaponEnum.LongSpear
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
             npc.ST = Dice.Roll(10, 13);
             npc.DX = Dice.Roll(10, 14);
             npc.Concept = "Lanceiro";
             if (Dice.IfDo(70))
             {
                 npc.Advantages.push(new FeatureInfo("Reflexos em Combate", 15));
             }
             if (Dice.IfDo(70))
             {
                 npc.Advantages.push(new FeatureInfo("Hipoalgia", 10));
             }
         }
     }
 