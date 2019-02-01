import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../models/event';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { Registration } from '../models/registration';

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event: Event;
  name: string;
  email: string;

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit() {
    const eventId = this.route.snapshot.params['eventId'];
    console.log(eventId);
    this.httpClient.get<Event>('http://35.154.129.133:8000/api/events/' + eventId)
    .subscribe(response => {
        this.event = response;
    });
  }

  register() {
    console.log('Name', this.name);
    console.log('Email', this.email);

    const body = {
      name: this.name,
      email: this.email
    };
    this.httpClient
    .post<Registration>('http://35.154.129.133:8000/api/registrations/create/' + this.event._id, body)
    .subscribe(response => {
      this.event.registrations.push(response);
    });
  }

}
