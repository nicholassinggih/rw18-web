import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'mbb-cnr-bulk-collection-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit, OnDestroy {

  // dialogTitle: string;
  // dialogText: string;
  // dialogButtons: ButtonPayload[];
  // dialogSubs: Subscription;

  // @ViewChild(MbbDialogComponent) dialog: MbbDialogComponent;

  constructor(
    // private dialogService: DialogService
    ) {}
  ngOnDestroy(): void {
    // this.dialogSubs.unsubscribe();
  }

  ngOnInit(): void {
    /* this.dialogSubs = this.dialogService.updateSubject.subscribe(data => {
      this.dialogTitle = data.title;
      this.dialogText = data.text;
      this.dialogButtons = data.buttonPayload;
      this.dialog.open();
    }) */
  }


}
