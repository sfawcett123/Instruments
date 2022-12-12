export default class Calculations
{
    constructor() {
    }

    radians(degree) {
        return degree * Math.PI / 180;
    }

    rotate(current, desired, direction) {
        if (Math.abs(desired % 360) == Math.abs(current % 360)) return (current);

        current = this.mod(current, 360);

        current += direction;

        return (current)
    }

    direction(current, desired) {
        var a = (current % 360) - desired
        a = (a + 180) % 360

        return (a < 0) ? -1 : 1;
    }

    mod(a, n) {
        return a - Math.floor(a / n) * n;

    }
}