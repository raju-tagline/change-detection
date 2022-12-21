import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit, OnChanges {
  @Input() data: any;
  childRank!: number;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(change: SimpleChanges): void {
    this.childRank = this.data.rank;

    console.log('change :>> ', change);
  }
}
