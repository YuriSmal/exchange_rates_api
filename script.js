var content = document.getElementById("content");
var requestURL =
  "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json";

function loadExchangeRates() {
  var request = new XMLHttpRequest();
  request.open("GET", requestURL, true);
  request.responseType = "json";
  request.send();
  request.onload = function() {
    let status = request.status;
    if (status == 200) {
      var info = " ";
      for (var rate of request.response) {
        info +=
          `<tr>
               <td>` +
          rate.txt +
          `    </td>
               <td>` +
          rate.rate +
          `    </td>
           <tr>`;
      }
      content.innerHTML = info;
    }
  };
}
