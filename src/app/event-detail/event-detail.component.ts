import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../models/event';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    const eventId = this.route.snapshot.params['eventId'];
    console.log(eventId);
    this.httpClient.get<Event>('http://localhost:8000/api/events/' + eventId)
    .subscribe(response => {
        this.event = response;
    });
  }

}
