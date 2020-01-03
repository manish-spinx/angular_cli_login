import { Component,OnInit,Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: 'spinx-singlefile',
    templateUrl: 'singlefile.component.html'
})

export class SinglefileComponent implements OnInit {

    @Input() public label: string;
    @Input() public class: string;
    @Input() public id: string;
    @Input() public name: string;
    @Input() public record_list:any;
    @Input() public submit_validaiton_flag:boolean = false; 
    @Input() public selected_record_list:string[]=[]; 

    @Input() public image_valdaiton : boolean = false;
    
    @Output() onClick = new EventEmitter<any>();

    constructor() { }

    ngOnInit() { }

    onClickButton(event) {
        this.onClick.emit(event);
      }
}