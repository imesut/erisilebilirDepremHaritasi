let parsed = JSON.parse(_pageData)

var bodyString = ""

parsed[1][6].forEach(city => {
    var cityString = ""
    let cityName =  city[2]
    console.log(cityName)

    cityString += '<h2>' + cityName + '</h2>'
    cityString += `<table>
        <tr>
          <th>Konum</th>
          <th>Wewalk ile aç</th>
          <th>Google ile aç</th>
        </tr>`

    let locations = city[4]
    locations.forEach(location => {
        let locationName = location[5][0][0]
        let latlon = location[4][4]
        let wewalkLink = "https://wewalk.io/share?ll="+ latlon[0]+","+latlon[1]
        let googleLink = "https://maps.google.com?q="+ latlon[0]+","+latlon[1]
        console.log(locationName, latlon)
        console.log(wewalkLink)
        console.log(googleLink)

        cityString += '<tr><td>' + locationName +'</td><td><a href="' + wewalkLink + '">wewalk</a></td><td><a href="' + googleLink + '">google</a></td></tr>';

    });

    cityString += '</table>'

    bodyString += cityString
});


firsthalf = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deprem Güvenli Bölgeler Haritası</title>
</head>
<style>
    body{
        font-family: sans-serif;
    }
    table {
        font-family: arial, sans-serif;
        border-collapse: collapse;
        width: 100%;
      }
      
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      
      tr:nth-child(even) {
        background-color: #dddddd;
      }
</style>
<body>
<h1>Deprem Güvenli Bölgeler Haritası</h1>
<p>AHBAP derneği tarafından hazırlanan listenin erişilebilirliği iyileştirilmiş bir versiyonudur.</p>
<p>Gaziantep, Kahramanmaraş ve depremi yoğun bir şekilde hisseden Güneydoğu Anadolu illerinde sokakta kalan vatandaşlara kapısını açan kurum ve işletmelere ulaşabilirsiniz.</p>
`

let lastHalf = `
</body>
</html>
`

console.log(firsthalf + bodyString + lastHalf)