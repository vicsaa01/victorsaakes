export class CVEntry {
    institution!: string
    role!: string
    duration!: string
    bulletPoints!: string[]

    constructor(institution: string, role: string, duration: string, bulletPoints: string[]) {
        this.institution = institution
        this.role = role
        this.duration = duration
        this.bulletPoints = bulletPoints
    }
}