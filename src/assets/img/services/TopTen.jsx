import FetchData from "./FetchData";

const TopTen = () => {
  const { data: data, error: top10Error } = FetchData("countries");
  if (top10Error) {
    return <h1>Error loading data</h1>;
  }

  const sortedCases = data
    ? data.slice().sort((a, b) => b.cases - a.cases)
    : [];
  const topTenCases = sortedCases.slice(0, 10);

  const sortedTodayCases = data
    ? data.slice().sort((a, b) => b.todayCases - a.todayCases)
    : [];
  const topTenTodayCases = sortedTodayCases.slice(0, 10);

  const sortedTodayDeaths = data
    ? data.slice().sort((a, b) => b.todayDeaths - a.todayDeaths)
    : [];
  const topTenTodayDeaths = sortedTodayDeaths.slice(0, 10);

  const sortedTodayDeathsLow = data
    ? data.slice().sort((a, b) => a.todayDeaths - b.todayDeaths)
    : [];
  const topTenTodayDeathsLow = sortedTodayDeathsLow.slice(0, 10);

  const sortedTopActive = data
    ? data.slice().sort((a, b) => b.active - a.active)
    : [];
  const topTenTopActive = sortedTopActive.slice(0, 10);

  const sortedTopRecovered = data
    ? data.slice().sort((a, b) => b.recovered - a.recovered)
    : [];
  const topTenRecovered = sortedTopRecovered.slice(0, 10);

  console.log(topTenCases, topTenRecovered, topTenTodayDeaths)
  return {
    topTenCases,
    topTenTodayCases,
    topTenTodayDeaths,
    topTenTodayDeathsLow,
    topTenTopActive,
    topTenRecovered,
  };
};

export default TopTen;
