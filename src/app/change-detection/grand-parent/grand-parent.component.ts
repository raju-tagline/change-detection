import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grand-parent',
  templateUrl: './grand-parent.component.html',
  styleUrls: ['./grand-parent.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandParentComponent implements OnInit {
  count: number = 0;
  parentInput: any;

  constructor() {}

  ngOnInit(): void {}

  grandParent(): string {
    console.log('GrandParent rendered !');
    this.count++;
    return `Grand parent rendered ${this.count} times`;
  }

  fromParentToGP(event: any) {
    this.parentInput = event;
  }
}
