export class Exercise {
    // Optioneel description attribuut

    constructor(
        public id: Number,
        public name: string,
        public email: string,
        public password: string,
        public birthday: string,
    ) { }
}