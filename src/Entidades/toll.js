class Toll {
  constructor() {
    this._isOpen = true;
  }

  isOpen() {
    return this._isOpen;
  }

  close() {
    this._isOpen = false;
  }

  open() {
    this._isOpen = true;
  }
}

export default Toll;
