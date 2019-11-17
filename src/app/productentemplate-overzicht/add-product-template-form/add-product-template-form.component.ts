import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { TemplateService } from 'src/app/services/template.service';
import { Variation } from 'src/app/types/variation.model';

@Component({
  selector: 'app-add-product-template-form',
  templateUrl: './add-product-template-form.component.html',
  styleUrls: ['./add-product-template-form.component.css']
})
export class AddProductTemplateFormComponent implements OnInit {
  public productTemplate: FormGroup;
  public readonly categories = [
    {name: 'Bindmiddel', description: "Iets om dingen mee vast te maken"}, 
    {name: 'Plastiek', description: 'slecht voor het milieu'}, 
    {name: 'Hout', description: 'komt van bomen'}, 
    {name: 'Karton', description: 'niet onder water steken'},
    {name: 'Andere', description: 'hier komt nog de mogelijkheid om een eigen categorie toe te voegen'}];
  public variations =  new Array<Variation>();
  variationsCheck = new FormControl(false);
    public readonly graden = ['eerste', 'tweede', 'derde'];

  constructor(
    private _fb: FormBuilder,
    private router: Router,
    private _templateDataService: TemplateService) { }


  ngOnInit() {
   this.graden.forEach(graad => {
     var variation = new Variation();
     variation.graad = graad;
     this.variations.push(variation);
  });
    this.variations.push()
    this.productTemplate = this._fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]],
      description: ['', [Validators.required, Validators.minLength(2)]],
      image: ['', [Validators.required, Validators.minLength(2)]],
      categories: ['', [Validators.required]],
      score: ['', [Validators.required], Validators.max(5)],
      genVar: [''],
      variations: ['']
    })
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Dit veld is verplicht';
    }
    if(errors.max) {
      return 'Score mag maar max 5 zijn'
    }
  }

}
