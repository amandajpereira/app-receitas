import { Component } from '@angular/core';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.scss']
})
export class ReceitasComponent {
  receitas = [
    {
      nome: 'Bolo de Chocolate',
      descricao: 'Delicioso bolo fofinho de chocolate',
      imagem: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80'
    },
    {
      nome: 'Salada Tropical',
      descricao: 'Salada refrescante com frutas tropicais',
      imagem: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80'
    },
    {
      nome: 'Macarrão ao Alho e Óleo',
      descricao: 'Macarrão simples e saboroso',
      imagem: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80'
    }
  ];

  novaReceita = {
    nome: '',
    descricao: '',
    imagem: ''
  };

  adicionarReceita() {
    this.receitas.push({ ...this.novaReceita });
    this.novaReceita = { nome: '', descricao: '', imagem: '' };
  }
}
