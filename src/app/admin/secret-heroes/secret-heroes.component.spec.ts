import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecretHeroesComponent } from './secret-heroes.component';

describe('SecretHeroesComponent', () => {
  let component: SecretHeroesComponent;
  let fixture: ComponentFixture<SecretHeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecretHeroesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecretHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
