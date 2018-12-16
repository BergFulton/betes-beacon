const axios = require('axios');
const dataSource = 'http://traceyspancreas.herokuapp.com/api/v1/entries.json';

async function getSugar() {
  try {
    const response = await axios.get(dataSource);
    const mostRecent = response.data[0];
    const sgv = mostRecent.sgv;
    const direction = mostRecent.direction;
    const dateTime = mostRecent.dateString;

    console.log(`sgv: ${sgv}`);
    console.log(`direction: ${direction}`);
    console.log(`dateTime: ${dateTime}`);

    function setSugar () {
        if (sgv <= 70 ) {
            console.log('red');
        } else if (sgv > 70 && sgv <= 170){
            console.log('green');
        } else console.log ('red');
    }
    setSugar();

    function setFlash () {
        if (direction == 'Flat'){
            console.log('nothing');
        } else if (direction == 'FortyFiveUp' || 'FortyFiveDown'){
            console.log('single pulse')
        } else if (direction == 'SingleUp') {
            console.log('double pulse')
        } else if (direction == 'DoubleUp') {
            console.log('tripple pulse')
        } else if (direction == 'SingleDown'){
            console.log('quick double pause')
        } else {
            console.log('quick four flash')
        }
    }
    setFlash();
  } catch (error) {
    console.error(error);
  }
}

getSugar();
