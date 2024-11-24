import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../includes/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../core/services/product.service';
import { Product } from '../../core/interfaces/product';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NavbarComponent,
    CommonModule,
    FormsModule,
    MatTableModule,
    MatSortModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  public error!: string;
  public productName!: string;
  public purchaseValue!: number | null;
  public productId!: number;
  public dataSource!: MatTableDataSource<any>;
  public displayedColumns: string[] = ['pro_nome', 'pro_valor', 'buttons'];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.getAllProducts());
  }

  addProduct() {
    if(this.purchaseValue && this.productName != '' && this.productName.length > 3) {
      return this.productService.addProduct(this.productName, this.purchaseValue).subscribe(resp => {window.location.reload()});
    }

    return this.showErrorMessage('Valor ou nome Nulos');
  }

  cleanFilds() {
    this.productName = '';
    this.purchaseValue = null;
  }

  getAllProducts(): any {
    let response!: any;

    this.productService.getAllProducts().subscribe(resp => {
      response = resp;
    })

    return response;
  }

  edit(id: number, nome: string, valor: number) {
    this.productId = id;
    this.productName = nome;
    this.purchaseValue = valor;
  }

  editProduct() {
    if(this.purchaseValue && this.productName != '' && this.productName.length > 3) {
      return this.productService.editProduct(this.productId, this.productName, this.purchaseValue).subscribe(resp => {window.location.reload()})
    }

    return this.showErrorMessage('Valor ou nome Nulos');
  }

  deleteProduct(id: number) {
    return this.productService.deleteProduct(id).subscribe(resp => {window.location.reload()});
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  showErrorMessage(error: string) {
    this.error = error;

    setTimeout(() => {
      this.error = '';
    }, 2500);
  }
}
