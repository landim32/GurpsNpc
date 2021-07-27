import { EquipmentInfo } from './EquipmentInfo.js';

export class ArmorInfo extends EquipmentInfo {
  get RD() {
    return this._RD;
  }

  set RD(value) {
    this._RD = value;
  }

  get Local() {
    return this._Local;
  }

  set Local(value) {
    this._Local = value;
  }
}
