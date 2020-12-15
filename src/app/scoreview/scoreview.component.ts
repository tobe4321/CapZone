import { Component, OnInit } from '@angular/core';
import { GetScoresService } from '../get-scores.service'
import { Game } from '../models/game.model'
import { teamRecord } from "../models/cfbrecord.model";
import { lines } from "../models/cfblines.model";
import { GetRecordsService } from '../get-records.service';
import { GetLinesService } from '../get-lines.service';
import { GetRankingsService } from '../get-rankings.service';
import { GetTeamLogoService } from '../get-team-logo.service';
import { GetMediaService } from '../get-media.service';

@Component({
  selector: 'app-scoreview',
  templateUrl: './scoreview.component.html',
  styleUrls: ['./scoreview.component.scss']
})
export class ScoreviewComponent implements OnInit {

  constructor(private api:GetScoresService, private api2:GetRecordsService, private api3:GetLinesService, 
    private api4:GetRankingsService, private api5:GetTeamLogoService, private api6:GetMediaService) { }
  listOfGames = [];
  matchups = [];
  teamRecords = [];
  listOfRecords = [];
  betLines = [];
  lines = []
  week = 16;
  rankings = []
  listOfLogos = []
  media = []

  ngOnInit() {
    this.api.apiCall().subscribe((data)=>{
      this.listOfGames = data;
      this.getGame(this.listOfGames);
    })

    this.api2.getRecord().subscribe((data)=>{
      this.teamRecords = data;
      this.getRecords(this.teamRecords);
    })

    this.api3.getLines().subscribe((data)=>{
      this.betLines = data;
      this.getLine(this.betLines);
    })

    this.api4.getRankings().subscribe((data)=>{
      for(let weeks of data) {
        if(weeks['week'] == this.week) {
          this.rankings = weeks['polls'][2]['ranks'];
        }
      }
    })

    this.api5.getLogo().subscribe((data)=>{
      for(let team of data) {
        if(team['conference'] != null) {
          this.listOfLogos.push(team)
        }
      }
    })

    this.api6.getMediaInfo().subscribe((data)=>{
      this.media = data;
    })
  }

  getGame(games:any[]) {
    let matchups = []
    for(let match of games) {
      if (match['week'] == this.week) {
        const newGame: Game = {
          id: match['id'],
          homeTeam: match['home_team'],
          awayTeam: match['away_team'],
          homeScore: match['home_points'],
          awayScore: match['away_points'],
          date: new Date(match['start_date'])
        };
        matchups.push(newGame)
      }
    }
    this.matchups = matchups;
  }

  getRecords(records:any[]) {
    let record = [];
    for(let team of records) {
      const newTeam: teamRecord = {
        year: team['year'],
        team: team['team'],
        conference: team['conferance'],
        division: team['division'],
        wins: team['total']['wins'],
        losses: team['total']['losses']
      };
      record.push(newTeam);
    }
    this.listOfRecords = record;
  }

  getLine(line:any[]) {
    let lineList = [];
    for(let game of line) {
      if(game['lines'] == []) {
        game['lines'] = 'Game Cancelled';
      }
      else {
        const newLine: lines = {
        id: game['id'],
        line: game['lines'][0]
      };
        lineList.push(newLine)
      }
    }
    this.lines = lineList;
  }

  getRank(school:string) {
    for(let rank of this.rankings) {
      if(school === rank['school']) {
        return '#'+rank['rank'];
      }
    }
    return;
  }

  getLogo(team:string) {
    for(let school of this.listOfLogos) {
      if(team === school['school']) {
        return school['logos'][0];
      }
    }
  }

  getMedia(id:number) {
    for (let game of this.media) {
      if(id == game['id']) {
        return game['outlet']
      } 
    }
  }

  removeSpaces(string: string) {
    return string.replace(/ /g, "-").toLowerCase();
  }

}
