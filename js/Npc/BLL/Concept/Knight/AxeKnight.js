import { WeaponEnum } from '../../../Model/WeaponEnum.js';
import { BaseKnight } from './BaseKnight.js';

export class AxeKnight extends BaseKnight {

    /**
    * @returns WeaponEnum[]
    */
    get PossibleWeapon() {
        return [
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
            WeaponEnum.TwoHandedAx,
            WeaponEnum.Warhammer
        ];
    }
}
