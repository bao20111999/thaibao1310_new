import { Component, OnInit } from '@angular/core';
import { declares } from 'src/app/models/test';
import { DeclaresService } from 'src/app/Service/declares/declares.service';

@Component({
  selector: 'app-declares',
  templateUrl: './declares.component.html',
  styleUrls: ['./declares.component.css']
})
export class DeclaresComponent implements OnInit {
  public Declares: declares[] = [];
  constructor(private DeclaresService: DeclaresService) { }

  ngOnInit(): void {
    this.DeclaresService.getAll().subscribe(data => {
      console.log("-------- " + data);

      this.Declares = data;
    },
    error =>{
      console.log("error ---- " + error);
    }
    )
  }

}
