import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParentComponent implements OnInit {

  data:any = [
    {
      name:'User 1',
      rank:40
    },
    {
      name:'User 2',
      rank:20
    },
    {
      name:'User 3',
      rank:35
    },
    {
      name:'User 4',
      rank:17
    },
  ]

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  increaseRank(d:any){
    ++d.rank;
  }

  decreaseRank(d:any){
    --d.rank
  }

}
