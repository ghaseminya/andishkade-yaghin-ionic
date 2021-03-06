import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inbox',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Profile',
      url: '/profile',
      icon: 'person'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    },
    {
      title: 'Settings',
      url: '/setting',
      icon: 'cog'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private menu: MenuController,
  ) {

    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }


  sideMenu() {
    this.navigate =
      [
        {
          title: "Home",
          url: "/home",
          icon: "home"
        },
        {
          title: "Chat",
          url: "/chat",
          icon: "chatboxes"
        },
        {
          title: "Contacts",
          url: "/contacts",
          icon: "contacts"
        },
      ]
  }

}
