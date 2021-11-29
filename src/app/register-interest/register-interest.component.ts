import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'airbnb-register-interest',
  templateUrl: './register-interest.component.html',
  styleUrls: ['./register-interest.component.scss'],
})
export class RegisterInterestComponent {
  nome!: string;
  email!: string;

  public constructor(private router: Router, private route: ActivatedRoute) {}

  public registrarInteresse(): void {
    if (confirm('Confirmar Interesse')) {
      const currentInterestList: Array<number> = JSON.parse(localStorage.getItem('interestList'));
      localStorage.setItem('interestList', JSON.stringify([...currentInterestList, Number(this.route.snapshot.params['id'])]));
      this.router.navigate(['/lista']);
    }
  }
}
