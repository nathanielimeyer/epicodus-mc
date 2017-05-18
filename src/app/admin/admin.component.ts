import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { Member } from '../member.model';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(clubName: string, realName: string, age: number, likes: string, dislikes: string, address: string, incarcerated: boolean) {
    var newMember: Member = new Member(clubName, realName, age, likes, dislikes, address, incarcerated);
    this.memberService.addMember(newMember);
  }

}
