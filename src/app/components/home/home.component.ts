import { Component } from '@angular/core';
import { FeaturesComponent } from "../features/features.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [FeaturesComponent],
    
})
export  default class HomeComponent {

}
