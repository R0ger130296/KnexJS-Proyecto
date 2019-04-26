import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';

import { ServiciosService } from '../service/servicios.service';
import { Campus } from '../models/campus';


@Component({
  selector: 'app-ghost',
  templateUrl: './ghost.component.html',
  styleUrls: ['./ghost.component.css']
  
})
export class GhostComponent implements OnInit {

  campus: Campus;
  data: Array<Campus>;

  constructor(private ngZone: NgZone, private Servicios: ServiciosService) {}

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    // Wait for changes to be applied, then trigger textarea resize.
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  displayedColumns: string[] = ['numero', 'nombre', 'apellido', 'email', 'telefono'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.get();
    this.campus = new Campus();
  }

  get() {
    this.Servicios.get('campus').subscribe(
        response => {
            this.data = response as Array<Campus>;
        },
        error => {
            console.log(error);
        }
    );
}

post(){
    this.Servicios.post('campus',this.campus).subscribe(
      response => {
        this.get();
      },
      error => {
        console.log(error);
      }
      
    );
}


  @ViewChild(MatPaginator) paginator: MatPaginator;
}
export interface PeriodicElement {
  numero: number;
  nombre: string;
  apellido: string;
  email: string;
  telefono: number;

}

  const ELEMENT_DATA: PeriodicElement[] = [
  {numero: 1, nombre: '', apellido: '', email: '', telefono: 1},

]