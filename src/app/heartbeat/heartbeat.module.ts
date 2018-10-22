import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HeartbeatPage } from './heartbeat.page';

import {NgxMqttClientModule} from 'ngx-mqtt-client';

const routes: Routes = [
  {
    path: '',
    component: HeartbeatPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
	NgxMqttClientModule.withOptions({
		host: 'm15.cloudmqtt.com',
		protocol: 'mqtt',
		port: 12863,
		path: '/esp',
        keepalive: 5,
		username: 'xrufgoyx',
		password: 'oWzHcp2N5M4f'
	}),
    RouterModule.forChild(routes)
  ],
  declarations: [HeartbeatPage]
})
export class HeartbeatPageModule {}
