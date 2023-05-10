import { Component, OnInit } from '@angular/core';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CidadeService } from '../service/cidade.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-cidade',
  templateUrl: './lista-cidade.component.html',
  styleUrls: ['./lista-cidade.component.css']
})
export class ListaCidadeComponent implements OnInit{

  faEdit = faEdit;
  faTrash = faTrash;
  
  constructor(
    public cidade_service:CidadeService,
    public router:Router
  ){}
  ngOnInit(): void {
    this.cidade_service.carregar();
  }

  editar(indice:number){
    this.router.navigateByUrl('cidade/' + indice);
  }

}
