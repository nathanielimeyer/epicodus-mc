import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { Router } from '@angular/router';
import { MemberService} from '../member.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-roster',
  template: `<h2>Roster</h2>

    <select (change)="onChange($event.target.value)">
      <option value="allMembers" selected="selected">All Members</option>
      <option value="true">Incarcerated Members</option>
      <option value="false">Members on Parole</option>
    </select>

    <div *ngFor="let member of members | async | incarceratedFilter:incarceratedStatus" class="panel panel-default">

    <div class="panel-body">
      <h3 (click)="goToDetailPage(member)"><em>{{member.clubName}}</em> at {{member.address}}</h3>
      <div *ngIf="currentRoute === '/admin'">
        {{member.clubName}}
        <hr>
        <app-edit-member [selectedMember]="member"></app-edit-member>
      </div>
    </div>
  </div>
`,
  styleUrls: ['./roster.component.css'],
  providers: [MemberService]
})

export class RosterComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  incarceratedStatus: string = "allMembers";

  constructor(private router: Router, private memberService: MemberService) { }

  goToDetailPage(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  };

  ngOnInit() {
    this.members = this.memberService.getMembers();
  };

  onChange(optionFromMenu){
    this.incarceratedStatus = optionFromMenu;
    console.log(this.incarceratedStatus);
  }

}
