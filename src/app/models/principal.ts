import { Secundario } from './Secundario';

export class Principal {

    Descripcion: string;
    Detalles: Secundario[];
    Talla: string;

    constructor(Descripcion: string, Detalles: Secundario[], Talla: string) {
        this.Descripcion = Descripcion;
        this.Detalles = Detalles;
        this.Talla = Talla;
    }
}
