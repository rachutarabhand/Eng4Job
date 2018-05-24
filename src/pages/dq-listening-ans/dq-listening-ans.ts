import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DqListeningAnsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dq-listening-ans',
  templateUrl: 'dq-listening-ans.html',
})
export class DqListeningAnsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DqListeningAnsPage');
  }

  navHome() {
    this.navCtrl.popToRoot();
  }
}
