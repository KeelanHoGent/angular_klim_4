import {Component, Input, OnInit} from '@angular/core';
import {ProductTemplate} from '../../types/productTemplate.model';
import {ActivatedRoute, Router} from '@angular/router';
import {TemplateService} from '../../services/template.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ProductVariationTemplate} from '../../types/productVariationTemplate.model';
import {CategoryTemplate} from '../../types/categoryTemplate.model';

@Component({
  selector: 'app-product-template-details',
  templateUrl: './product-template-details.component.html',
  styleUrls: ['./product-template-details.component.css']
})
export class ProductTemplateDetailsComponent implements OnInit {
  public productTemp: ProductTemplate;
  public error = '../../assets/images/error.svg';
  public correct = '../../assets/images/correct.svg';

  public productTemplate: FormGroup;
  private categories$;
  public selectedCategory;
  public variationsCheck;
  public readonly graden = ['eerste', 'tweede', 'derde'];


  constructor(private route: ActivatedRoute, private templateService: TemplateService, private _fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.route.data.subscribe(item => this.productTemp = item['productTemp']);
    this.variationsCheck = new FormControl(this.productTemp.hasMultipleDisplayVariations);
    this.templateService.getCategoryTemplates$().subscribe(c =>
    {
      this.categories$ = c;
      this.selectedCategory = this.categories$.find(d => d.id === this.productTemp.categoryTemplateId)
      this.productTemplate.get('categories').setValue(this.selectedCategory);
    });
    this.buildForm();
    this.setValidations(this.productTemp.hasMultipleDisplayVariations);
  }

  buildForm() {
    console.log(this.productTemp.productVariationTemplates);

    this.productTemplate = this._fb.group({
      name: [this.productTemp.productName, [Validators.required, Validators.minLength(1)]],
      description: [this.productTemp.description, [Validators.required, Validators.minLength(2)]],
      image: [this.productTemp.image, [Validators.required, Validators.minLength(2)]],
      categories: [this.productTemp.categoryTemplate.categoryTemplateId, [Validators.required]],
      score: [this.productTemp.score, [Validators.required, Validators.max(10), Validators.min(0)]],
      variationsCheck: [this.variationsCheck],
      genVar: [this.productTemp.hasMultipleDisplayVariations ? '' : this.productTemp.productVariationTemplates[0].productDescr,
        [Validators.required, Validators.minLength(2)]],
      variations: this._fb.array([])
    })
    this.addVariations();
    this.variationsCheck.valueChanges.subscribe(el => {
      this.setValidations(el);
    });
  }

  private setValidations(el) {
    const genVarControl = this.productTemplate.get('genVar');
    const variationsControl = this.productTemplate.get('variations') as FormArray;
    if (el) {
      genVarControl.setValidators(null);
      variationsControl.controls.forEach(el => {
        el.get('ProductDescr').setValidators([Validators.required, Validators.minLength(2)]);
      });


    } else {
      genVarControl.setValidators([Validators.required, Validators.minLength(2)]);
      variationsControl.controls.forEach(el => {
        el.get('ProductDescr').setValidators(null);
      });
    }

    genVarControl.updateValueAndValidity();
    variationsControl.controls.forEach(el => el.get('ProductDescr').updateValueAndValidity());
  }

  get categories() {
    return this.categories$;
  }
  get variations(): FormArray {
    return <FormArray> this.productTemplate.get('variations');
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Dit veld is verplicht';
    }
    if (errors.max) {
      return 'Score mag maar max 10 zijn';
    }
    if (errors.min) {
      return 'Score moet hoger dan 0 zijn';
    }
  }

  createVariations(grade: string): FormGroup {
    return this._fb.group(
      {
        ProductDescr: [this.productTemp.hasMultipleDisplayVariations ? this.productTemp.productVariationTemplates[this.graden.indexOf(grade)].productDescr : ''],
        ESchoolGrade: [grade]
      }
    )
  }

  addVariations(): void {
    let variations = this.productTemplate.get('variations') as FormArray;
    this.graden.forEach(graad => {
      variations.push(this.createVariations(graad));
    });
  }

  save() {
    let productTemp = new ProductTemplate();
    if (this.variationsCheck.value === true)
    {
      productTemp.productVariationTemplates  = this.productTemplate.value.variations.map(ProductVariationTemplate.fromJSON);
    }
    else {
      const genVar = new ProductVariationTemplate();
      genVar.productDescr = this.productTemplate.value.genVar;
      genVar.eSchoolGrade = 'algemeen';
      productTemp.productVariationTemplates[0] = genVar;
    }

    productTemp.description = this.productTemplate.value.description;
    productTemp.productName = this.productTemplate.value.name;
    productTemp.image = this.productTemplate.value.image;
    productTemp.categoryTemplateId = this.productTemplate.value.categories;
    productTemp.hasMultipleDisplayVariations = this.variationsCheck.value;
    productTemp.score = this.productTemplate.value.score;
    console.log(productTemp);
    //this.templateService.addProductTemplate(productTemp).subscribe();

    this.router.navigateByUrl("/producten");
  }


}
