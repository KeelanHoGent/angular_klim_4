import {Pipe, PipeTransform} from "@angular/core";
import {Project} from "../types/project.model";

@Pipe({name:'activeFilter'})
export class ActiveFilter implements PipeTransform{
  transform(list: Project[]): any {
    return list.filter(project => !project.closed)
  }
}

@Pipe({name:'finishedFilter'})
export class FinishedFilter implements PipeTransform{
  transform(list: Project[]): any {
    return list.filter(project => !!project.closed)
  }
}
