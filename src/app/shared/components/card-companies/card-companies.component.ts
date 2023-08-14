import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { companyDummy } from '../../dummy/company';
import { ICompany } from '../../models/response';

@Component({
  selector: 'app-card-companies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-companies.component.html',
  styleUrls: ['./card-companies.component.css']
})
export class CardCompaniesComponent {
  list: ICompany[] = []
  status: "loading" | "initial" = "initial"

  ngOnInit(): void {
    this.getList()
  }

  getList(): void {
    this.status = "loading"
    setTimeout(() => {
      this.status = "initial"
      this.list = companyDummy(5)
    }, 500)
  }
}
