console.log("Running the script");

var submission = function(event){
    event.preventDefault(); 

    const date = document.getElementById('date').value;
    const startTime = document.getElementById('start-time').value;
    const endTime = document.getElementById('end-time').value;
    const activity = document.getElementById('activity').value;
    const location = document.getElementById('location').value;
    const type = document.getElementById('type').value;
    const notes = document.getElementById('notes').value;
    const busy = document.getElementById('busy').checked;

    document.querySelector('#schedule-table tbody').insertAdjacentHTML('beforeend', `
        <tr>
      <td>${date}</td>
      <td>${startTime}</td>
      <td>${endTime}</td>
      <td>${activity}</td>
      <td>${location}</td>
      <td>${type}</td>
      <td>${notes}</td>
      <td>${busy ? '<img src="images/busy.png" width="50" height="50">' : '<img src="images/free.png" width="50" height="50">'}</td>
    </tr>
  `);
  //chatGPT helped me with the beforesend and the ternary operator.
}