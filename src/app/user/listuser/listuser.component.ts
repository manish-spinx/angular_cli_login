import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

// user service
import { UserService } from '../services/user.service';


@Component({
    selector: 'app-listuser',
    templateUrl: 'listuser.component.html'
})

export class ListUserComponent implements OnInit 
{
    /**************datatable related variable*****************************************/
     currentPage = 1;
     totalItem = 0;
     offset = 0;
     smallnumPages = 0;
     page: any = 1;
     limit = 10;
     sort_type: any;
     sort_field: any;
     showPagination: Boolean = false;
     isDataLoading: Boolean = false;
     isFilter: Boolean = false;
     params: any = {};
     user_recordList: any = [];
     resData: any;
     fieldNameUsed: any;
     order_type: any = 'asc';
     objectKeys = Object.keys;
    /**************datatable related variable*****************************************/  

    constructor
    (
        private fb: FormBuilder,
        private router: Router, 
        private _uservice:UserService,
        private toastrService: ToastrService
    ) 
    { 

    }

ngOnInit() { 
    this.getUserdataList(this.offset, this.limit);
}

getUserdataList(offset: number, limit: number, resetPagination: Boolean = false) 
{

    this.isDataLoading = true;
    let sort;
    if (this.sort_type) 
    {
    sort = { 'colId': this.sort_field, 'sort': this.sort_type };
    } 
    else 
    {
    sort = {};
    }

    let filter = {};

    if (this.isFilter) 
    {
        filter = Object.assign({}, this.params);
    }


    this._uservice.getUserData(offset, limit, sort, filter).subscribe(response => 
    {
    this.isDataLoading = false;
    this.resData = response;

    if (response.status === 200) 
    {
        this.user_recordList = this.resData.data.rows;
        for (let i = 0; i < this.user_recordList.length; i++) {
        const status = (this.user_recordList[i].status === 1) ? 'Active' : 'Inactive';
        this.user_recordList[i].displayStatus = status;
        }

        if (this.offset === 0) {
        this.totalItem = this.resData.data.count;
        }

        this.showPagination = true;
        if (resetPagination) {
        this.currentPage = 1;
        }
    } 
    else 
        {
            //this.toastrService.error('', this.resData.message);
        }
    }, err => {
    this.isDataLoading = false;
    });
}

pageChanged(event: any, resetPagination: Boolean = false): void 
{
    this.page = event.page;
    this.offset = ((this.page - 1) * this.limit);
    this.getUserdataList(this.offset, this.limit, resetPagination);
}

sorting() 
{
    if (this.totalItem > 10) 
    {
      const event = { page: 1 };
      this.showPagination = false;
      this.pageChanged(event, true);
    }
}


/* This function is use for reset filter */
resetFilter() {
    this.params = {};
    if (this.isFilter) {
        this.isFilter = false;
        const event = { page: 1 };
        this.showPagination = false;
        this.pageChanged(event, true);
    }
}


/* This function is use for filter data */
filterData() 
{
    for (const propName in this.params) {
        if (this.params[propName] === null || this.params[propName] === undefined || this.params[propName] === "") {
        delete this.params[propName];
        }
    }

    /*Use for check that filter value has object contains */
    if (Object.keys(this.params).length === 0 && this.params.constructor === Object) {
        this.isFilter = false;
    } else {
        this.isFilter = true;
    }
    const event = { page: 1 };
    this.showPagination = false;
    this.pageChanged(event, true);
}


headerSort(field_name, order_type) 
{
    this.sort_field = field_name;
    if (!this.fieldNameUsed) 
    {
        this.fieldNameUsed = this.sort_field;
        this.sort_type = order_type;
        if (order_type === 'asc') 
        {
            this.order_type = 'desc';
        } else 
        {
            this.order_type = 'asc';
        }
    } else if (this.fieldNameUsed === field_name) 
    {
        this.sort_type = order_type;
        if (order_type === 'asc') {
            this.order_type = 'desc';
        } else {
            this.order_type = 'asc';
        }
    } else {
        this.fieldNameUsed = field_name;
        this.order_type = 'desc';
        this.sort_type = 'asc';
    }
        const event = { page: 1 };
        this.showPagination = false;
        this.pageChanged(event, true);
}

delete_user(id:any)
{
   this._uservice.user_post('delete_user_angular',{user_id:id}).subscribe(response => 
    {
        if(response['status']===200)
        {
            this.toastrService.success(response['message'],'User Management');
            this.getUserdataList(this.offset, this.limit);
        } 
        
    }, err => {
    this.isDataLoading = false;
    });

}

}