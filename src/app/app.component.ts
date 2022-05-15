import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Job-Finder';
  deeperror: boolean;
  details: boolean;
  notification: boolean;
  errordictionary: { [id: string]: any; };
  notificationdictionary:{ [id: string]: any; };
  searchjobs: boolean;

  constructor() {
    this.details = false;
    this.searchjobs = false;
    this.deeperror = false;
    this.notification = false;
    this.errordictionary = {
      "error_message": "Access restricted", "error_code": "403",
      "contact": "ivanrezis@yandex.com"
    };

    this.notificationdictionary = {
      "stylenotifyelement": "fa-heart",
      "notifytitle": "Attention",
      "notifymessage": "Notification is here"
    };

  }

  ngOnInit() {

  }

  componentSelector(event: { [id: string]: string }) {
    this.searchjobs = false;
    this.details = false;
    if (event["buttonid"].toString() == "NEWS") {
      this.errorPageLoader(true, "Access restricted", "403", "ivanrezis@yandex.com")
    } else if (event["buttonid"].toString() == "Skills") {
      this.errorPageLoader(true, "Access restricted", "403", "ivanrezis@yandex.com")
    } else if (event["buttonid"].toString() == "Application") {
      this.searchjobs = true;
      this.errorPageLoader(false, "Access restricted", "403", "ivanrezis@yandex.com")
    } else if (event["buttonid"].toString() == "Shop") {
      this.errorPageLoader(true, "Access restricted", "403", "ivanrezis@yandex.com")
    } else if (event["buttonid"].toString() == "Research") {
      this.errorPageLoader(true, "Access restricted", "403", "ivanrezis@yandex.com")
    } else if (event["buttonid"].toString() == "About") {
      this.errorPageLoader(true, "Access restricted", "403", "ivanrezis@yandex.com")
    }
  }

  errorPageLoader(deeperror: boolean, errormessage: string, errorcode: string, contact: string){
    this.deeperror = deeperror;
    this.notification = false;
    this.errordictionary = {
      "error_message": errormessage, "error_code": errorcode,
      "contact": contact,
    };
  }

}
