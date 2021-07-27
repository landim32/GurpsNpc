import { DamageInfo } from './DamageInfo.js';

export class DamageRangedInfo extends DamageInfo
    {
        get Prec() {
          return this._Prec;
        }
        set Prec(value) {
          this._Prec = value;
        }

        get HalfReach() {
          return this._HalfReach;
        }
        set HalfReach(value) {
          this._HalfReach = value;
        }

        get FullReach() {
          return this._FullReach;
        }
        set FullReach(value) {
          this._FullReach = value;
        }

        get Weight() {
          return this._Weight;
        }
        set Weight(value) {
          this._Weight = value;
        }

        get CdT() {
          return this._CdT;
        }
        set CdT(value) {
          this._CdT = value;
        }

        get Tiros() {
          return this._Tiros;
        }
        set Tiros(value) {
          this._Tiros = value;
        }


        get Magnitude() {
          return this._Magnitude;
        }
        set Magnitude(value) {
          this._Magnitude = value;
        }
    }
