import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DailyQuestResultPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daily-quest-result',
  templateUrl: 'daily-quest-result.html',
})
export class DailyQuestResultPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DailyQuestResultPage');
  }

  navDQAns() {
    this.navCtrl.push("DqListeningAnsPage");
  }
}
