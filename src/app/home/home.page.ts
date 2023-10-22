import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../services/aluno.service';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public alunos: any;
  public versao: string;

  constructor(private alunoServ: AlunoService, private orientacao: ScreenOrientation) {
    this.orientacao.lock(this.orientacao.ORIENTATIONS.PORTRAIT);

  }

  ngOnInit() {
    // this.alunos = this.alunoServ.getAlunos();
    this.alunoServ.getAlunos().subscribe( alunos => {
      this.alunos = alunos;
    });

    this.versao = this.alunoServ.getVersao();
  }

  verAluno(rota: string, numero: string) {
    this.alunoServ.goRota(rota, numero);
  }

}
