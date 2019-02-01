import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  isLoading = false;
  events: Event[] = [];
  title = 'abc';
  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit() {
    console.log('ABCD');
    // function(response){ this.}
    // response => {}
    this.isLoading = true;
    this.httpClient.get<Event[]>('http://35.154.129.133:8000/api/events')
    .subscribe(response => {
      this.events = response;
      console.log('Response', response);
      this.isLoading = false;
    });
    console.log('Hello World!');
  }

  onEventClick(event: Event) {
    // alert(event._id);
    this.router.navigate(['/events', event._id]);
  }

}
