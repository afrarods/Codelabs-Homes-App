import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";

@Component({
  standalone: true,
  selector: "app-root",
  template: `
    <main>
      <header>
        <img
          class="brand-logo"
          src="/assets/logo.svg"
          alt="logo"
          aria-hidden="true"
        />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ["./app.component.css"],
  imports: [HomeComponent],
})
export class AppComponent {
  title = "homes";
}
