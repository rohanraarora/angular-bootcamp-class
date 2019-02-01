import { Component, OnInit } from '@angular/core';
import { Event } from '../models/event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events: Event[] = [
    {
      title: 'Event 1',
      description: 'Description 1'
    },
    {
      title: 'Event 2',
      description: 'Description 1'
    },
    {
      title: 'Event 3',
      description: 'Description 1'
    },
    // {
    //   title: 'Event 4',
    //   description: 'Description 1'
    // }
  ];

  constructor() { }

  ngOnInit() {
  }

}
