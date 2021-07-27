export class FeatureInfo {

  constructor(name, pts = 0) {
    this._Name = name;
    this._Pts = pts;
  }

  get Name() {
    return this._Name;
  }
  set Name(value) {
    this._Name = value;
  }
  
  get Pts() {
    return this._Pts;
  }
  set Pts(value) {
    this._Pts = value;
  }
}
