import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent implements AfterViewInit, OnChanges, OnDestroy, OnInit {
  img: string = '';
  @Input('img') set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img => ', this.img);
  }
  @Output() loaded = new EventEmitter<string>();
  imgDefault: string = './assets/img/default.png';
  // counter: number = 0;
  // counteFn: number | undefined;

  constructor() { }

  ngOnInit(): void {
    // Before render
    // Async - fetch -- once time
    // this.counteFn = window.setInterval(() => {
    //   this.counter += 1;
    //   console.log('run counter');
    // }, 1000);
  }

  ngOnChanges(change: SimpleChanges): void {
    // Before - during render
    // Changes Inputs
    console.log('ngOnChanges imgValue => ', this.img);
    console.log(change);
  }

  ngAfterViewInit(): void {
    // After render
    // Handler Children
  }

  ngOnDestroy(): void {
    // delete
    // window.clearInterval(this.counteFn)
  }

  imgError(): void {
    this.img = this.imgDefault;
  }

  imgLoaded(): void {
    console.log('Log Children');
    this.loaded.emit(this.img);
  }

}
