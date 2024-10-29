// code your solution here
function superbowlWin(record) {
    // Use the find method to search for a winning record
    const winningRecord = record.find(game => game.result === "W");
    
    // Check if a winning record was found and return the year, or undefined if not
    return winningRecord ? winningRecord.year : undefined;
  }
  
  // Example usage:
  const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2000", result: "W"},
  ];
  
  console.log(superbowlWin(record)); // Output: "2015"