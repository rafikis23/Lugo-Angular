import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriasService } from './services/categorias.service';
import { UsuariosService } from './services/usuarios.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lugo';

  @ViewChild ('modalCreacionCategoria') modalCreacionCategoria;
  @ViewChild ('modalPedidos') modalPedidos;
  @ViewChild ('modalCategorias') modalCategorias;
  @ViewChild ('modalUser') modalUser;
  categorias: any = [];
  usuarios: any = [];
  empresas: any = [];
  ordenes: any = [];
  categoriaSelecionada: any;
  usuarioSeleccionado: any;
  cambiarUsuarioSeleccionado: any;

  constructor(
    private modalService: NgbModal,
    private usuarioService: UsuariosService,
    private categoriaService: CategoriasService,
    private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.categoriaService.obtenerCategoria().subscribe(
      res => {
        this.categorias = res;
        console.log('Categorias', this.categorias);
      },
      error => {
        console.log(error);
      }
    );
    this.usuarioService.obtenerUsuarios().subscribe(
      res => {
        this.usuarios = res;
        console.log('Usuarios', this.usuarios);
      },
      error => {
        console.log(error);
      }
    );
    console.log('Usuario seleccionado', this.usuarioSeleccionado);
  }
  cambiarUsuario(e) {
    this.cambiarUsuarioSeleccionado = e.target.value;
    console.log('cambiar usuario', this.cambiarUsuarioSeleccionado);
  }



  verOrdenes() {
    // console.log('verOrdenes');
    console.log('Valor', this.cambiarUsuarioSeleccionado);
    this.modalService.open(
      this.modalUser,{size: 'lg'});
    this.usuarioService.obtenerPedidos(this.cambiarUsuarioSeleccionado).subscribe(
      res => {
          this.ordenes = res.ordenes;
          console.log('Las ordenes del usuario son:', this.ordenes);
      },
      error => {
        console.log(error);
      }
    );
  }
  crearCategoria() {
    console.log('crearCategoria');
    this.modalService.open(this.modalCreacionCategoria, {size: 'lg'});
  }
  guardar() {
    console.log('guardar');
  }

  realizarOrden() {
    console.log('Se agrega el producto a una orden');
    this.modalService.open(
      this.modalPedidos,
      {
        size: 'lg',
        centered: true
      }
    );
  }
  agregarPedido() {
    console.log('Se agregara pedido');
  }

  infoCategorias(categoria) {
    // this.categoriaSelecionada = categoria;
    // console.log('ver información de categoría', this.categoriaSelecionada);
    this.categoriaSelecionada = categoria.nombreCategoria;
    this.modalService.open(
      this.modalCategorias,
      {
        size: 'lg',
        centered: true
      });
    this.categoriaService.obtenerDetalleCategoria(categoria._id).subscribe(
      res => {
        this.empresas = res.empresas;
        console.log('Los detalles de la categoria', this.empresas);
      },
      error => {
        console.log(error);
      }
    );
  }
}
