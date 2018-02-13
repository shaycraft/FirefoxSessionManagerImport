import { OnDestroy } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { TabsessionService } from './tabsession.service';
import { Tabs } from '../models/tab.model';

export class TabsessionDataSource extends DataSource<any> implements OnDestroy {
    private _subject: Subject<Tabs[]>;
    private _getTabsSub: Subscription;
    private numRows: number;
    private data: Tabs[];

    constructor(private tabsessionService: TabsessionService) {
        super();
      
        this._subject = new Subject<Tabs[]>();
    }

    public connect(): Observable<Tabs[]> {
        this.refreshTable();
        return this._subject.asObservable();
    }

    public disconnect(): void {
        if (this._subject) {
            this._subject.unsubscribe();
        }

        if (this._getTabsSub) {
            this._getTabsSub.unsubscribe();
        }
    }

    public ngOnDestroy(): void {
    }

    private refreshTable(): void {
        this._getTabsSub = this.tabsessionService.getTabs()
            .subscribe((res) => {
                this.numRows = res.length;
                this.data = res;
                this._subject.next(this.data);
            });
    }
}