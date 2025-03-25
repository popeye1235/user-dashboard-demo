import { Component, OnInit, AfterViewChecked, OnDestroy, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../../services/user.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-user-dashboard',
  standalone: true,
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class UserDashboardComponent implements OnInit, AfterViewChecked, OnDestroy {
  users: any[] = [];
  filteredUsers: any[] = [];
  userChart: Chart | null = null;
  searchText: string = '';
  selectedRole: string = '';
  private userSubscription!: Subscription;
  private chartInitialized = false;

  constructor(private userService: UserService, public dialog: MatDialog, private ngZone: NgZone) {}

  ngOnInit() {
    this.loadUsers();
  }

  ngAfterViewChecked() {
    if (this.users.length > 0 && !this.chartInitialized) {
      this.loadChart();
      this.chartInitialized = true;
    }
  }

  ngOnDestroy() {
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }

  openUserForm() {
    const dialogRef = this.dialog.open(UserFormComponent, { width: '400px' });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.userService.addUser(result);
        this.loadUsers();
      }
    });
  }

  loadUsers() {
    this.userSubscription = this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.applyFilter();
      this.updateChart();
    });
  }

  loadChart() {
    this.ngZone.runOutsideAngular(() => {
      import('chart.js').then(chartModule => {
        chartModule.Chart.register(...chartModule.registerables);

        this.userChart = new chartModule.Chart("userChart", {
          type: 'pie',
          data: {
            labels: ['Admin', 'Editor', 'Viewer'],
            datasets: [{
              data: [0, 0, 0],
              backgroundColor: ['red', 'blue', 'green']
            }]
          }
        });
        this.updateChart();
      });
    });
  }

  updateChart() {
    if (this.userChart) {
      const roleCounts = { Admin: 0, Editor: 0, Viewer: 0 };
      this.users.forEach(user => {
        const role = user.role as keyof typeof roleCounts;
        roleCounts[role]++;
      });
      this.userChart.data.datasets[0].data = Object.values(roleCounts);
      this.userChart.update();
    }
  }

  applyFilter() {
    this.filteredUsers = this.users.filter(user =>
      (!this.searchText || user.name.toLowerCase().includes(this.searchText.toLowerCase()) || user.email.toLowerCase().includes(this.searchText.toLowerCase())) &&
      (!this.selectedRole || user.role === this.selectedRole)
    );
  }

  getRoleClass(role: string): string {
    const roleClasses: { [key: string]: string } = {
      Admin: 'admin',
      Editor: 'editor',
      Viewer: 'viewer'
    };
    return roleClasses[role] || '';
  }
}