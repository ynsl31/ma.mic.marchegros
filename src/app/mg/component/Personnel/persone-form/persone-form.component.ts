import { Component, OnInit } from '@angular/core';
import { Personne } from 'src/app/mg/modules/personne';
import { Mandataire } from 'src/app/mg/modules/Mandataire';
import { AgentCommission } from 'src/app/mg/modules/AgentCommission';
import { AgentBalance } from 'src/app/mg/modules/AgentBalance';
import { PersonneService } from '../services/personne.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { type } from 'os';

@Component({
  selector: 'app-persone-form',
  templateUrl: './persone-form.component.html',
  styleUrls: ['./persone-form.component.css']
})
export class PersoneFormComponent implements OnInit {

  private options: string[] = ["Mandataire", "Agent de Balance", "Agent de Commission"];
  personne :Personne
  mandataire : Mandataire
  Agentc : AgentCommission;
  agentBalance : AgentBalance;
   id ;
   profile ;
   type;
  constructor(private vs : PersonneService,private router :Router,private route :ActivatedRoute ) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id'])
    this.id =this.route.snapshot.params['id']
    this.personne = new Personne();
    this.agentBalance = new AgentBalance();
    if(this.id != -1){
      this.vs.getPersonne(this.id).subscribe(
        data =>{ this.personne=data ;
          console.log(data);} 
      );
    }
  }

  onSubmit(personneModelForm:NgForm){
    console.log(personneModelForm.form, personneModelForm.value);
    if(this.id == -1){ 
      if(this.type =="Mandataire"){
        this.mandataire =  this.personne ;
        this.vs.createmandataire(this.mandataire)
        .subscribe(data=> { 
          console.log(data);
          this.router.navigate(['./personnels/list']);
    
          });
      }
     if(this.type =="Agent de Commission"){
        this.Agentc=  this.personne ;
        this.vs.createmandataire(this.Agentc)
        .subscribe(data=> { 
          console.log(data);
          this.router.navigate(['./personnels/list']);
    
          });
      }
      if(this.type =="Agent de Balance"){
        this.agentBalance.nom =this.personne.nom;
        this.agentBalance.prenom = this.personne.prenom;
        this.agentBalance.adresse = this.personne.adresse;
        this.agentBalance.tel = this.personne.tel;
        
        this.vs.createAgentBalance(this.agentBalance)
        .subscribe(data=> { 
          console.log(data);
          this.router.navigate(['./personnels/list']);
    
          });
      }
    
    }else {
       
        this.vs.updateprs(this.personne)
        .subscribe(data=> { 
          console.log(data);
          });
          this.router.navigate(['./personnels/list']);

      }
  //     if(this.personne.typeset=="Mandataire"){
  //       this.mandataire =  this.personne ;
  //       this.vs.createmandataire(this.mandataire)
  //       .subscribe(data=> { 
  //         console.log(data);
  //         });
  //         this.router.navigate(['./personnels/list']);

  //     }
  //     else if(this.personne.typeset=="Agent de Commission"){
  //       this.Agentc=  this.personne ;
  //       this.vs.createmandataire(this.Agentc)
  //       .subscribe(data=> { 
  //         console.log(data);
  //         this.router.navigate(['./personnels/list']);
    
  //         });
  //     }
  //     else if (this.personne.typeset=="Agent de Balance"){
  //       this.agentBalance.idPers = this.id;
  //       this.agentBalance.nom =this.personne.nom;
  //       this.agentBalance.prenom = this.personne.prenom;
  //       this.agentBalance.adresse = this.personne.adresse;
  //       this.agentBalance.tel = this.personne.tel;
        
  //       this.vs.createAgentBalance(this.agentBalance)
  //       .subscribe(data=> { 
  //         console.log(data);
  //         this.router.navigate(['./personnels/list']);
    
  //         });
    
     
  // }
  // else{
  //   console.log("zzz")
  //   this.router.navigate(['./personnels/list']);
  // }

//  }
//   }
    }
}
