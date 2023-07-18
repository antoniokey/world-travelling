import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [CommonModule, NxWelcomeComponent],
  selector: 'world-travelling-intrerests-entry',
  template: `<world-travelling-nx-welcome></world-travelling-nx-welcome>`,
})
export class RemoteEntryComponent {}
