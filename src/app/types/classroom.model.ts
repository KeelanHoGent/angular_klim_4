import {Project} from "./project.model";
import {Pupil} from "./pupil.model";

export class Classroom {
  private _id: number;
  private _name: string;
  private _schoolId: number;
  private _projects: Project[] = [];
  private _pupils = new Array<Pupil>();

  static fromJSON(json: any): Classroom {
    const c = new Classroom();
    c._id = json.classRoomId;
    c._name = json.name;
    c._schoolId = json.schoolId;
    c._projects = json.projects.map(p => Project.fromJSON(p));
    c._pupils = json.pupils.map(p => Pupil.fromJSON(p));
    return c;
  }

  toJson() {
    return {
      name: this._name,
      pupils: this._pupils.map(p => p.toJson())
    };
  }

  addPupil(pupil: Pupil) {
    this.pupils.push(pupil);
  }

  removePupil(pupil: Pupil) {
    const i = this.pupils.indexOf(pupil);
    this.pupils.splice(i, 1);
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get schoolId(): number {
    return this._schoolId;
  }

  set schoolId(value: number) {
    this._schoolId = value;
  }

  get projects(): Project[] {
    return this._projects;
  }

  set projects(value: Project[]) {
    this._projects = value;
  }

  get pupils(): Pupil[] {
    return this._pupils;
  }

  set pupils(value: Pupil[]) {
    this._pupils = value;
  }

}
