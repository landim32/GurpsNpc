import { WeaponEnum } from '../../../Model/WeaponEnum.js';
import { BaseKnight } from './BaseKnight.js';

export class SwordKnight extends BaseKnight {
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
}
