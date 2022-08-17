import { Component, OnInit } from '@angular/core';

// import { Hours, Hour } from '../hour';
import { Hour } from '../hour';
import { HourService } from '../hour.service';

@Component({
  selector: 'app-hour',
  templateUrl: './hour.component.html',
  styleUrls: ['./hour.component.css'],
})
export class HourComponent implements OnInit {
  // hours: Hours | undefined;

  constructor(private hourService: HourService) {}
  
  hourList: Hour[] | undefined;

  ngOnInit(): void {
    this.getHours();
  }

  getHours(): void {
    this.hourService.getHours().subscribe((hours: any) => {
      //console.log(hours);
      this.hourList = hours;
      //console.log("Horas: ", this.hourList);
      
    });
  }
}
