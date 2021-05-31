const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');

const datahide = document.querySelector('.middle_layer');

const getInfo = async (event) =>{
    event.preventDefault();
    let cityVal = cityName.value;


    if(cityVal ===""){
        cityName.innerText = `Please enter something before you search!`
        datahide.classList.add('data_hide');
    }

    else{

        try{
            // let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=8538107e23b01aec111c3950784983c8`
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=8538107e23b01aec111c3950784983c8`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = (arrData[0].main.temp-273).toFixed(2);
            temp_status.innerText = arrData[0].weather[0].temp;

            const tempMood = arrData[0].weather[0].main;

            if(tempMood=="Clear"){
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color: #eccc68'></i>";
            }
            else if(tempMood=="Clouds"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud' style = 'color:#f1f2f6;'</i>";
            }
            else if(tempMood=="Rain"){
                temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style = 'color:#a4b0be;'</i>";
            }
            else{
                temp_status.innerHTML = "<i class = 'fas fa-sun' style = 'color:#f1f2f6;'</i>";
            }

            datahide.classList.remove('data_hide');
        }

        catch(error){
            city_name.innerText = `Please enter something before you search`
            // console.log('The error is : ${error}');
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);