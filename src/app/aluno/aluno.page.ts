import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.page.html',
  styleUrls: ['./aluno.page.scss'],
})
export class AlunoPage implements OnInit {

  public aluno: any;

  constructor(private alunoServ: AlunoService) { }

  ngOnInit() {
    // this.aluno = this.alunoServ.getInfoAluno();
    this.alunoServ.getInfoAluno().subscribe(infoAluno => {
      this.aluno = infoAluno;
    });
  }

}
