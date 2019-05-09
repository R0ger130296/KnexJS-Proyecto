import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {take} from 'rxjs/operators';
import {FormBuilder, FormGroup} from '@angular/forms';

import { ServiciosService } from '../service/servicios.service';
import { Campus } from '../models/campus';

@Component({
  selector: 'app-francisco',
  templateUrl: './francisco.component.html',
  styleUrls: ['./francisco.component.css']
})
export class FranciscoComponent implements OnInit {

  campus: Campus;
  data: Array<Campus>;
  options: FormGroup;

  constructor(fb: FormBuilder, private ngZone: NgZone, private Servicios: ServiciosService) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });
  }

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  triggerResize() {
    this.ngZone.onStable.pipe(take(1))
        .subscribe(() => this.autosize.resizeToFitContent(true));
  }
  displayedColumns: string[] = ['numero', 'nombre', 'apellido', 'email', 'telefono'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  ngOnInit() {
    this.get();
    this.campus = new Campus();
    this.dataSource.paginator = this.paginator;
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


 
