import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../models/event';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.css']
})
export class EventCardComponent implements OnInit {

@Input() eventABCD: Event;

  // event: Event = {
  //   title: 'Event Title',
  //   description: 'Event Description'
  // };


  constructor() { }

  ngOnInit() {
    console.log('Event Card Init');
  }

}
