import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ElectronService } from './shared/services/electron.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ibaraki Example';
  version: string = 'N/A';

  constructor(
    private electronService: ElectronService
  ) {}

  ngOnInit() {
    this.electronService.getVersion().then((version) => {
      this.version = version;
    });
  }
}
