import { Component } from '@angular/core';

@Component ({
    selector: 'app-body',
    templateUrl: './body.component.html'
})

export class BodyComponent {
    
    mostrar = true;

    frase: any = {
        mensaje: 'With great power comes great responsibility',
        autor: 'Ben Parker'
    };

    personajes: string[] = ['Strange', 'Blackbolt','Quake']
}