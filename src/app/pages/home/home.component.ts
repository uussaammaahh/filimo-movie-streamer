import { Component, OnInit } from '@angular/core';
import { ShowService } from 'src/app/services/show.service';
import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  destroyed$: Subject<any> = new Subject();
  data: any = {};
  about: any = {};
  cast: string = '';

  constructor(
    private show: ShowService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.destroyed$ = new Subject();
    this.route.params.subscribe(params => {
      this.show.getShowData(params['id']).pipe(
        tap((res: any) => {
          this.data = res;
          this.about = res.about;
          this.cast = res.about.cast.join(', ');
        }),
        takeUntil(this.destroyed$)
      ).subscribe();
    });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

}
