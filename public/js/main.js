
const cityname=document.getElementById("cityname");
const submitbtn=document.getElementById("submitbtn");
const city_name=document.getElementById("city_name");

const temp_val=document.getElementById("temp_val");
const temp_status=document.getElementById("temp_status");
const data_hide=document.querySelector(".middle_layer");

const getinfo=async(ev)=>{
    ev.preventDefault();
     let cityval=cityname.value;
    if(cityval === ""){
         city_name.innerText=`First Enter City Name`
         data_hide.classList.add("data_hide")
    }else{
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=c8b3b1f037e8010cd98c98d4bfb08741#`
            const response=await fetch(url);
            const data=await response.json();
            const arrdata=[data];
        
            city_name.innerText=`${arrdata[0].name},${arrdata[0].sys.country}`;
            temp_val.innerText=arrdata[0].main.temp;
    
            const tempmood=arrdata[0].weather[0].main;

            //condition to check tempmood
            if(tempmood=="Clear"){
                temp_status.innerHTML="<i class='fa-solid fa-sun' style='color:#eccc68'></i>";
            }
            else if(tempmood=="Clouds"){
                temp_status.innerHTML="<i class='fa-solid fa-cloud' style='color:#f1f2f6'></i>";
            }
            else if(tempmood=="Rain"){
                temp_status.innerHTML="<i class='fa-solid fa-cloud-rain' style='color:#a4b0be'></i>";
            }
            else{
                temp_status.innerHTML="<i class='fa-solid fa-cloud' style='color:#f1f2f6'></i>";
            }

            data_hide.classList.remove("data_hide")
            
        }catch{
            city_name.innerText=`Enter Valid City Name`
            data_hide.classList.add("data_hide")
        }
       
    }
}

submitbtn.addEventListener("click",getinfo)