class Contador {
  constructor() {
    this._acumulador = 0;
  }

  _setter(un_valor) {
    const nuevo_valor = this._acumulador + un_valor;

    if (nuevo_valor >= 0 && nuevo_valor <= 10) {
      this._acumulador += un_valor;
    }
  }

  valor() {
    return this._acumulador;
  }

  reset() {
    this._acumulador = 0;
  }

  incrementar() {
    this._setter(1);
  }

  incrementarCon(un_valor) {
    this._setter(un_valor);
  }

  decrementar() {
    this._setter(-1);
  }

  decrementarCon(un_valor) {
    this._setter(-un_valor);
  }
  toString() {
    return "Soy el contador de Celeste";
  }
}

export default Contador;
