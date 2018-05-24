import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DailyQuestFinishPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daily-quest-finish',
  templateUrl: 'daily-quest-finish.html',
})
export class DailyQuestFinishPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyQuestFinishPage');
  }

  navDQResult() {
    this.navCtrl.push("DailyQuestResultPage");
  }
}
