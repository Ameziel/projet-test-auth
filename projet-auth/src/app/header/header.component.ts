import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatButton} from "@angular/material/button";
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        MatIcon,
        MatButton,
        MatAnchor,
        RouterOutlet,
        RouterLink
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
