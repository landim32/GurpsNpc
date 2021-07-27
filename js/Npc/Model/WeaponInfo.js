import { EquipmentInfo } from './EquipmentInfo.js';

export class WeaponInfo extends EquipmentInfo
    {
      constructor(name, price, weight) {
        super(name, price, weight);
        this._Damages = [];
      }

        get STMin() {
          return this._STMin;
        }
        set STMin(value) {
          this._STMin = value;
        }

        /**
         * @return DamageInfo[]  description
         */
        get Damages() {
          return this._Damages;
        }

        /**
         * @param  DamageInfo[] value description
         */
        set Damages(value) {
          this._Damages = value;
        }
    }
