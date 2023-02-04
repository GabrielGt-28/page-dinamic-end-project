import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PackageInterface, ProductInterface } from '../../interfaces/index';
import { ProductsService } from '../../services/products.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RestService } from '../../services/rest.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  public product!: ProductInterface;
  public package!: PackageInterface;
  imagesAssets: string = 'assets/images/no-image.jpg';

  contactForm!: FormGroup;
  catalogyId_!: number;

  ngOnInit(): void {
    this.contactForm = this.initForm();
  }

  constructor(
    private urlDetail_: ActivatedRoute,
    private service_: ProductsService,
    private readonly fb: FormBuilder,
    private RestService: RestService
  ) {
    urlDetail_.params.subscribe((params) => {
      // console.log(params['idDetails'], params['id']);
      this.package = service_.getPackages(params['id'], params['idDetails']);
      // console.log('package->', this.package);
      this.product = service_.getOne(params['id']);
      this.catalogyId_ = params['id'];
    });
  }

  onSubmit(): void {
    console.log('form->', this.contactForm.value);
    try {
      this.RestService.post(
        `http://localhost:8090/catalogo/${this.product.typeCatalog}/${++this
          .catalogyId_}`,
        this.contactForm.value
      ).subscribe((resp) => {
        console.log('mensaje enviado');
        alert('Mensaje Enviado');
      });
    } catch (error) {
      console.log('error->', error);
      alert('Error al enviar mensaje :(');
    }

    // this.registerUser(
    //   this.contactForm.value,
    //   this.product.typeCatalog,
    //   ++this.catalogyId_
    // );
  }

  initForm(): FormGroup {
    return this.fb.group({
      nameUser: ['', [Validators.required, Validators.minLength(3)]],
      typeDoc: [''],
      numDoc: ['', [Validators.required]],
      numPhone: ['', [Validators.required]],
      typePackageInt: this.package.detail,
      pricePackage: this.package.price,
      createAt: this.getHours(),
      catalogyId: this.catalogyId_,
    });
  }

  getHours(): String {
    var today = new Date();
    var now = today.toLocaleString();
    return now;
  }

  async registerUser(datos: any, typeCatalog: String, catalogId: number) {
    try {
      await fetch(
        `http://localhost:8090/catalogo/${typeCatalog}/${catalogId}`,
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(datos),
        }
      );

      alert('Usuario registrado');
    } catch (e) {
      console.log('datos->', datos);

      console.log(e);
      alert('Hubo un error intentelo mas tardes.');
    }
  }
}
