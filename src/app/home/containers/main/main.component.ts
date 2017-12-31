import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../shared/animations/router.transition';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  animations: [routerTransition]
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
