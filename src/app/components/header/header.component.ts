import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  destroyed$: Subject<any> = new Subject();
  menu: Array<any> = [];
  user: any = {};

  constructor(
    private app: AppService
  ) { }

  ngOnInit(): void {
    this.destroyed$ = new Subject();

    this.app.getMenu().pipe(
      tap((res: any) => {
        this.menu = res;
      }),
      takeUntil(this.destroyed$)
    ).subscribe();

    this.app.getUser().pipe(
      tap((res: any) => {
        this.user = res;
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

}
