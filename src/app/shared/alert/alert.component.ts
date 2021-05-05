import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent {
    // Add @Input to make it settable from outside
    @Input() message: string;
    // Make event listenable from outside with @Output
    @Output() close = new EventEmitter<void>();

    onClose() {
        this.close.emit();
    }
}
