import { Component, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('headerRef', { static: false }) headerRef: any;
  destroyed$: Subject<any> = new Subject();
  menu: Array<any> = [];
  user: any = {};

  @HostListener('window:scroll', ['$event']) onScroll(event: Event) {
    if (window.scrollY >= 100) {
      this.renderer.addClass(this.headerRef.nativeElement, 'scrolling');
    } else {
      this.renderer.removeClass(this.headerRef.nativeElement, 'scrolling');
    }
  }

  constructor(
    private app: AppService,
    private renderer: Renderer2
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
