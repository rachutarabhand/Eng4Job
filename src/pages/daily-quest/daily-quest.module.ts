import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DailyQuestPage } from './daily-quest';

@NgModule({
  declarations: [
    DailyQuestPage,
  ],
  imports: [
    IonicPageModule.forChild(DailyQuestPage),
  ],
})
export class DailyQuestPageModule {}
