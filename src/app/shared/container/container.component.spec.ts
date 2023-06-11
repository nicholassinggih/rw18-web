import { ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MbbDialogComponent } from '@mybcabisnis-web/lib';
import { TranslateTestingModule } from 'ngx-translate-testing';
import { BehaviorSubject } from 'rxjs';
import { DialogService } from '../../services/dialog.service';

import { ContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerComponent;
  let fixture: ComponentFixture<ContainerComponent>;
  let dialogService;
  let dialog: jasmine.SpyObj<MbbDialogComponent>;

  beforeEach(async () => {
    dialogService = {
      updateSubject: new BehaviorSubject(0)
    };
    dialog = jasmine.createSpyObj(MbbDialogComponent, ['open']);

    await TestBed.configureTestingModule({
      declarations: [ ContainerComponent, MbbDialogComponent ],
      imports: [
        TranslateTestingModule.withTranslations('id', require('/src/assets/i18n/id.json')),
      ],
      providers: [
        {
          provide: DialogService,
          useValue: dialogService
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerComponent);
    component = fixture.componentInstance;

    component.dialog = dialog;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set the dialog properties correcly', fakeAsync(() => {
    component.ngOnInit();
    dialogService.updateSubject.next({
      title: 'title',
      text: 'text',
      buttonPayload: [],
    });
    tick(100);
    discardPeriodicTasks();
    expect(component.dialogTitle).toEqual('title');
    expect(component.dialogText).toEqual('text');
    expect(component.dialogButtons).toEqual([]);
    expect(dialog.open).toHaveBeenCalled();

  }));
});
