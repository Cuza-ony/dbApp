import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { TableService } from './table.service';
import { Tuple }        from './tuple';

@Component({
    moduleId: module.id,
    selector: 'query-table',
    templateUrl: './html/table.component.html'
})

export class TableComponent implements OnInit {
    table: Tuple[];
    name = 'TITLE';
    constructor(
            private tableService: TableService, 
            private route: ActivatedRoute,
            private location: Location) {}

    goBack(): void {
        this.location.back();
    }

    ngOnInit(): void {
        this.route.params
                .switchMap((params: Params) => this.tableService.getTable(params['id']))
                .subscribe(table => this.table = table);
    }
}