import { Component, OnInit } from '@angular/core';
import{ Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote(1, 'Nobody else','Find an online version and watch merlin find his son',new Date(2020,3,14)),
    new Quote(2, 'Nobody can','Find an online version and watch merlin find his car',new Date(2020,6,13)),
    new Quote(3, 'Nobody will','Find an online version and watch merlin find his dog',new Date(2010,3,10)),
    new Quote(4, 'Nobody shall','Find an online version and watch merlin find his pen',new Date(2022,3,14)),
    new Quote(5, 'Nobody ever','Find an online version and watch merlin find his daughter',new Date(2019,3,14)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  };
  deleteQuote(isComplete, index){
    if(isComplete){
     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
     if(toDelete){
       this.quotes.splice(index,1)
     }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}