export class PdfSettings {

    private _groupsToShow: number[] = [];

    private _showPupil: boolean = false;
    private _showTeacher: boolean = false;

    constructor() {
    }
    
    toJson(): any {
        return {
            groupsToShow: this._groupsToShow,
            showPupil: this._showPupil,
            showTeacher: this._showTeacher
        }
    }

    /**
     * Getter groupsToShow
     * @return {number[] }
     */
    public get groupsToShow(): number[] {
        return this._groupsToShow;
    }

    /**
     * Getter showPupil
     * @return {boolean}
     */
    public get showPupil(): boolean {
        return this._showPupil;
    }

    /**
     * Getter showTeacher
     * @return {boolean}
     */
    public get showTeacher(): boolean {
        return this._showTeacher;
    }

    /**
     * Setter groupsToShow
     * @param {number[] } value
     */
    public set groupsToShow(value: number[]) {
        this._groupsToShow = value;
    }

    /**
     * Setter showPupil
     * @param {boolean} value
     */
    public set showPupil(value: boolean) {
        this._showPupil = value;
    }

    /**
     * Setter showTeacher
     * @param {boolean} value
     */
    public set showTeacher(value: boolean) {
        this._showTeacher = value;
    }






}