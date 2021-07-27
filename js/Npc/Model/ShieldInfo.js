import { EquipmentInfo } from './EquipmentInfo.js';

export class ShieldInfo extends EquipmentInfo {
  get BD() {
    return this._BD;
  }
  set BD(value) {
    this._BD = value;
  }

  get RD() {
    return this._RD;
  }
  set RD(value) {
    this._RD = value;
  }

  get PV() {
    return this._PV;
  }
  set PV(value) {
    this._PV = value;
  }
}
