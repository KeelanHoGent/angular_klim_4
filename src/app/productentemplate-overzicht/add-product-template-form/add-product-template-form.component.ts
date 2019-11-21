import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { TemplateService } from 'src/app/services/template.service';
import { ProductTemplate } from 'src/app/types/productTemplate.model';
import { ProductentemplateOverzichtModule } from '../productentemplate-overzicht.module';
import { ProductVariationTemplate } from 'src/app/types/productVariationTemplate.model';
import { Observable, concat } from 'rxjs';
import { CategoryTemplate } from 'src/app/types/categoryTemplate.model';


@Component({
  selector: 'app-add-product-template-form',
  templateUrl: './add-product-template-form.component.html',
  styleUrls: ['./add-product-template-form.component.css']
})
export class AddProductTemplateFormComponent implements OnInit {

  public error: String = "../../assets/images/error.svg";
  public correct: String = "../../assets/images/correct.svg";

  public productTemplate: FormGroup;
  private categories$;
  // [
  //   {name: 'Bindmiddel', description: "Iets om dingen mee vast te maken"}, 
  //   {name: 'Plastiek', description: 'slecht voor het milieu'}, 
  //   {name: 'Hout', description: 'komt van bomen'}, 
  //   {name: 'Karton', description: 'niet onder water steken'},
  //   {name: 'Andere', description: 'hier komt nog de mogelijkheid om een eigen categorie toe te voegen'}];
  public variationsCheck = new FormControl(false);
  public readonly graden = ['eerste', 'tweede', 'derde'];

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private _templateDataService: TemplateService) { 
      
    }


  ngOnInit() {
    this.categories$ = this._templateDataService.getCategoryTemplates$();
    console.log(this.categories$);
    this.buildForm();

  }

  buildForm() {
    this.productTemplate = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      image: ['', [Validators.required, Validators.minLength(2)]],
      categories: ['', [Validators.required]],
      score: ['', [Validators.required, Validators.max(10), Validators.min(0)]],
      variationsCheck: [''],
      genVar: ['', [Validators.required, Validators.minLength(2)]],
      variations: this._fb.array([])
    })
    this.addVariations();
    this.variationsCheck.valueChanges.subscribe(el => {
      const genVarControl = this.productTemplate.get('genVar');
      const variationsControl = this.productTemplate.get('variations') as FormArray;
      if(el) {
        genVarControl.setValidators(null);
        variationsControl.controls.forEach(el => {el.get('ProductDescr').setValidators([Validators.required, Validators.minLength(2)])});

        
      } else{
        genVarControl.setValidators([Validators.required, Validators.minLength(2)]);
        variationsControl.controls.forEach(el => {el.get('ProductDescr').setValidators(null)});
        console.log(this.categories);
      }

      genVarControl.updateValueAndValidity();
      variationsControl.controls.forEach(el => el.get('ProductDescr').updateValueAndValidity());
    })
  }

  get categories() {
    return this.categories$;
  }
  get variations(): FormArray {
    return <FormArray>this.productTemplate.get('variations');
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Dit veld is verplicht';
    }
    if(errors.max) {
      return 'Score mag maar max 10 zijn';
    }
    if(errors.min) {
      return 'Score moet hoger dan 0 zijn';
    }
  }  

  createVariations(grade: string): FormGroup {
    return this._fb.group(
      {
        ProductDescr: [''],
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
    if(this.variationsCheck.value === true)
    {
      productTemp.variations  = this.productTemplate.value.variations.map(ProductVariationTemplate.fromJSON);
    }
    else {
      let genVar = new ProductVariationTemplate();
      genVar.description = this.productTemplate.value.genVar;
      genVar.grade = 'algemeen';
      productTemp.variations[0] = genVar;
    }
    
    productTemp.description = this.productTemplate.value.description;
    productTemp.name = this.productTemplate.value.name;
    productTemp.image = this.productTemplate.value.image;
    productTemp.categoryTemplateId = this.productTemplate.value.categories;
    productTemp.hasMultipleDisplayVariations = this.variationsCheck.value;
    productTemp.score = this.productTemplate.value.score;
    console.log(productTemp);
    this._templateDataService.addProductTemplate(productTemp).subscribe();

    this.router.navigateByUrl("/producten");
  }
  
}
