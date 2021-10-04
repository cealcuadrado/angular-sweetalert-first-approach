import { Component, OnInit } from '@angular/core';
import $wal from 'sweetalert2';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openAlert(): void {
    $wal.fire('Hola, mundo!');
  }

}
