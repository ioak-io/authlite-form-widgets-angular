import { Component, Input, OnChanges} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnChanges{
  @Input() src: string | undefined;
  @Input() logo!: string;

  ngOnChanges(){
    console.log(this.src)
  }
}