import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DqListening3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dq-listening3',
  templateUrl: 'dq-listening3.html',
})
export class DqListening3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DqListening3Page');
  }

  navDQFinish() {
    this.navCtrl.push("DailyQuestFinishPage");
  }
}
