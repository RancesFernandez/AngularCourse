import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
nombre: string = "Capitan America";
nombre2: string = "ranCEs fERnaDez";
heroes = ['Ironman', 'Siperman', 'Hulk', 'Batman', 'Daredevil', 'Antman'];
Pi: number = Math.PI
percent: number = 0.234;
salary: number = 1234.5;
fecha: Date = new Date();
idioma: string = 'en';

valorPromesa = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve('LLego la data');
  }, 4500);
});

heroe = {
  nombre: 'Logan',
  clave: 'Wolverine',
  edad: 500,
  direccion: {
    calle: 'Primera',
    casa: 20
  }
}

}
