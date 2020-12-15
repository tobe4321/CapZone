import { Component,OnInit } from '@angular/core';
import { GetNbaService } from '../get-nba.service';
import { nbaTeam } from '../models/nbateam.models';

@Component({
  selector: 'app-nba',
  templateUrl: './nba.component.html',
  styleUrls: ['./nba.component.scss']
})
export class NbaComponent implements OnInit {

  constructor(private api: GetNbaService) {}
  listOfTeams = []
  standings = []
  nbaTeams = []

  ngOnInit() {
    this.api.getStandings().subscribe((data) => {
      this.standings = data['api']['standings'];
      this.standings.sort((a,b) => (a.winPercentage < b.winPercentage) ? 1:-1)
    })

    this.api.getTeams().subscribe((data) => {
      this.listOfTeams = data['api']['teams'];
      this.getNbaTeams(this.listOfTeams);
    })
  }

  getNbaTeams(list: any[]) {
    for (let team of this.listOfTeams) {
      if (team.nbaFranchise == 1) {
        const newTeam: nbaTeam = {
          id: team.teamId,
          name: team.fullName,
          nickname: team.nickname,
          shortName: team.shortName,
          city: team.city,
          conference: team.leagues.standard.confName,
          division: team.leagues.standard.divName,
          logo: team.logo,
        }
        this.nbaTeams.push(newTeam)
      }
    }
  }

  printStandings(team, rank) {
    if (team.id == rank.teamId) {
      return team.name
    }
  }

  printRecord(team, rank) {
    if (team.id == rank.teamId) {
      return rank.win + '-' + rank.loss
    }
  }

}
