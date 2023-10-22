import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-avaliacao',
  templateUrl: './avaliacao.page.html',
  styleUrls: ['./avaliacao.page.scss'],
})
export class AvaliacaoPage implements OnInit {

  public infoAluno: any;

  constructor(private alunoServ: AlunoService) { }

  ngOnInit() {
    this.alunoServ.getInfoAluno().subscribe(infoAluno => {
      this.infoAluno = infoAluno;
    });
  }

}
