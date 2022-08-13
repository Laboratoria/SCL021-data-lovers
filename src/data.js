// estas funciones son de ejemplo

export const filterData = (data, country, sport, medal) => {

  return data.filter((element)=>{
    if (sport==="Deporte") sport = false;
    if (country==="Pais") country = false;
    if (medal==="Medalla") medal = false;

    if(country && sport && medal)
      return element.team === country && element.sport === sport && element.medal === medal

    if(sport && medal)
      return element.sport === sport && element.medal === medal

    if(country && sport)
       return element.team === country && element.sport === sport

    if(country && medal)
       return element.team === country && element.medal === medal

    if (country)
       return element.team === country

    if (sport)
       return element.sport === sport

    if (medal)
       return element.medal === medal

  })
 };


