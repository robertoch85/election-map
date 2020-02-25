
var createPolitician = function (namep, partyColor){
    var politician = {}
    politician.name = namep;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;
    
    
  
    return politician;
};

var pol1 = createPolitician("Barbara Jordan", [200, 0, 0]);
var pol2 = createPolitician("Joseph Baker", [0, 10, 240]);

pol1.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 
                        5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 
                        15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 
                        7, 2];

pol2.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 
                        1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 
                        0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 
                        1];



//State results
var setStateResults = function(state){
  
    theStates[state].winner = null;
 
    if (pol1.electionResults[state] > pol2.electionResults[state]) {
        
        theStates[state].winner = pol1.name;
        theStates[state].winnerColor = pol1.partyColor;
 
    } else if (pol1.electionResults[state] < pol2.electionResults[state]) {
 
        theStates[state].winner = pol2.name;
        theStates[state].winnerColor = pol2.partyColor;
 
    }
    
  //put state results in the table
  var stateInfoTable = document.getElementById("stateResults");
  var header = stateInfoTable.children[0];
  var body = stateInfoTable.children[1];
  var stateName = header.children[0].children[0];
  var abbrev = header.children[0].children[1];
  var candidate1Name = body.children[0].children[0];
  var candidate2Name = body.children[1].children[0];
  var candidate1Results = body.children[0].children[1];
  var candidate2Results = body.children[1].children[1];
  var winnersName = body.children[2].children[1];
  
  stateName.innerText = theStates[state].nameFull;
  abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";
 
  candidate1Name.innerText = pol1.name;
  candidate2Name.innerText = pol2.name;
 
  candidate1Results.innerText = pol1.electionResults[state];
  candidate2Results.innerText = pol2.electionResults[state];
 
if (theStates[state].winner === null){
    winnersName.innerText = "DRAW";
} else {
    winnersName.innerText = theStates[state].winner;
}
  



 //Set state with winner's color
	var stateColor = theStates[state].winnerColor;
  
    if (theStates[state].winner !== null)
    {
      theStates[state].rgbColor = stateColor;
    }
    else
    {
      theStates[state].rgbColor = [200,205,0];
    }
};

// Counting votes
pol1.tallyVotes = function()
{
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
    {
         this.totalVotes = this.totalVotes + this.electionResults[i];
         //console.log(this.totalVotes);
    }
};
pol1.tallyVotes();

pol2.tallyVotes = function()
{
    this.totalVotes = 0;

    for (var i = 0; i < this.electionResults.length; i++)
    {
         this.totalVotes = this.totalVotes + this.electionResults[i];
         //console.log(this.totalVotes);
    }
};
pol2.tallyVotes();

// set the winner
var winner = function()
{
  if ( pol1.totalVotes > pol2.totalVotes )
  {
    winner = pol1.name;
  }
  else if ( pol2.totalVotes > pol1.totalVotes )
  {
    winner = pol2.name;
  }
  else
    winner = "There is a DRAW!"
};
winner();

console.log ("And the winner is: " + winner + "!");

//Top table displaying winner
var countryInfoTable = document.getElementById('countryResults');

var row = countryInfoTable.children[0].children[0];
row.children[0].innerText = pol1.name;
row.children[1].innerText = pol1.totalVotes;
row.children[2].innerText = pol2.name;
row.children[3].innerText = pol2.totalVotes;

row.children[5].innerText = winner; 
