import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProfileAddPage } from './profile-add.page';

describe('ProfileAddPage', () => {
  let component: ProfileAddPage;
  let fixture: ComponentFixture<ProfileAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAddPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProfileAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
