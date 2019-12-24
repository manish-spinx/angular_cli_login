import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'spinx-textarea',
    templateUrl: 'textarea.component.html'
})

export class TextareaComponent implements OnInit {
    constructor() { }

    @Input() inputModel: string;  
    @Input() maxLength: number;  
    @Input() isNumeric: boolean;  
    
    @Output() inputModelChange = new EventEmitter<string>();  
    
    totalCharLengthText: string  
    
    textCount: number;


    ngOnInit() { 
        this.textCount = this.inputModel.length;  
        this.totalCharLengthText = (this.maxLength==0)?'Unlimited':(this.maxLength).toString();  
    }

    textChange(){  
        this.inputModelChange.emit(this.inputModel);  
        this.textCount = this.inputModel.length;  
      }

      
      numberOnly(event:any): boolean {  
        if(!this.isNumeric) return true;  
        const charCode = (event.which) ? event.which : event.keyCode;  
        if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !=46 ) {  
          return false;  
        }  
        return true;  
      } 
}