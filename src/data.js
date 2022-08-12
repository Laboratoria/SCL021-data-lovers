// estas funciones son de ejemplo

export const filterData = (data, country, sport) => {
  console.log({data, country, sport})
  return data.filter((element)=>{
    if (sport==="Deporte") sport = false;
    if (country==="Pais") country = false;

    if(country && sport)      
      return element.team === country && element.sport === sport
      
    if (country)
      return element.team === country
    if (sport)
      return element.sport === sport 

  })
 };

  
