import { Injectable } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private alunos: any;
  private versao: string;

  constructor(private router: Router, private rotaAtiva: ActivatedRoute) { 
    this.versao = '2.1';
  }

  getVersao() {
    return this.versao;
  }

  getAlunos() {
    return new Observable (observer => {
      fetch('./assets/data/flor.json')
      .then(resposta => resposta.json())
      .then(json => {
        this.alunos = json;
        observer.next(this.alunos);
        observer.complete();
        // return this.alunos;
      });
    })
  }

  goRota(rota: string, numero: string) {
    const extras: NavigationExtras = {
      state: {
        aluno: this.alunos[numero]
      }
    }

    this.router.navigate([rota], extras);

  }

  getInfoAluno() {
    return new Observable (observador => {
      this.rotaAtiva.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
          const infoAluno: any = this.router.getCurrentNavigation().extras.state.aluno;
          // return infoAluno;
          observador.next(infoAluno);
          observador.complete();
        }
      });
    });
  }
}
