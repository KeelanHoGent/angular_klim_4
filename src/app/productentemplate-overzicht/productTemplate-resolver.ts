import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ProductTemplate} from '../types/productTemplate.model';
import {TemplateService} from '../services/template.service';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProductTemplateResolver implements Resolve<ProductTemplate> {
  constructor(private templateService: TemplateService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductTemplate> {
    return this.templateService.getProductTemplate(route.params['id']);
  }
}
