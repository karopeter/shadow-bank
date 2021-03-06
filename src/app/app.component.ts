import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements = [{ type: 'server', name: 'Testserver', content: 'Just a test!'}];

  onServerAdded(serverData: { serverName: string; serverContent: string; }): void {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string; serverContent: string; }): void {
      this.serverElements.push({
        type: 'server',
        name: blueprintData.serverName,
        content: blueprintData.serverContent
      });
  }
}
