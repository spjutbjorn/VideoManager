import { Component } from '@angular/core';

@Component({
    selector: 'counter',
    templateUrl: './counter.component.html'
})
export class MovieComponent {
    public currentCount = 0;

    public incrementCounter() {
        this.currentCount++;
    }
}
