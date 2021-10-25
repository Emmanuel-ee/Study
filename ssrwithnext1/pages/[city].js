function WeatherData({data}) {

    return(
            <div>
               <h1>{data.name}</h1>
               <p>Weather conditions: {JSON.stringify(data)}</p>
               <p>Average Temperature: </p>
            </div>
    );
}

export async function getServerSideProps({query}) {
  
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query.city}&appid=e8f2ff9acae94740d4fb6eb3f1009431`)
    const data = await res.json()
  
    return { props: { data } }
  }

export default WeatherData;