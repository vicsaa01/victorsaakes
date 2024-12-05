export class CVEntry {
    institution!: string
    duration!: string
    bulletPoints!: string[]

    constructor(institution: string, duration: string, bulletPoints: string[]) {
        this.institution = institution
        this.duration = duration
        this.bulletPoints = bulletPoints
    }
}