import { NgModule } from '@angular/core';
import { IonicModule } from "ionic-angular"; // On rajoute cette ligne
import { ProgressBarComponent } from './progress-bar/progress-bar';
@NgModule({
	// declarations: [ProgressBarComponent],
	imports: [IonicModule], // ...Et celle-ci
	// exports: [ProgressBarComponent]
})
export class ComponentsModule {}
