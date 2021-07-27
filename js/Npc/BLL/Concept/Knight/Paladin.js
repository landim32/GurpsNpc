import { WeaponEnum } from '../../../Model/WeaponEnum.js';
import { MageHeal } from '../Mage/MageHeal.js';
import { BaseKnight } from './BaseKnight.js';

export class Paladin extends BaseKnight {

    /**
     * @returns WeaponEnum[]
     */
    get PossibleWeapon() {
        return [
            WeaponEnum.MaceAndShield,
            WeaponEnum.Warhammer
        ];
    }

    /**
     * 
     * @param {NpcInfo} npc 
     */
    DoConcept(npc) {
        super.DoConcept(npc);
        npc.Concept = "Paladino";
        var m = new MageHeal();
        m.DoConcept(npc);
    }
}
