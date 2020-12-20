import { ActivatedRoute } from '@angular/router';
import { TerrainService } from './../service/terrain.service';
import { Terrain } from './../model/Terrain';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terrain-detail',
  templateUrl: './terrain-detail.component.html',
  styleUrls: ['./terrain-detail.component.css']
})
export class TerrainDetailComponent implements OnInit {
terrain = new Terrain();
  constructor(private lc: TerrainService,private service :ActivatedRoute) { }

  ngOnInit(): void {
    this.getDetail();
  }
getDetail()
{
  this.lc.getTerrainById(this.service.snapshot.params.id).subscribe(
data => {
  console.log(data);
  this.terrain=data;
},error=> console.log(error)


  );
}
}
