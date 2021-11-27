const cities = [
  {
    id: 01,
    name: "Berlin",
    country: "Germany",
    description:
      "Berlin is the capital of Germany and one of the sixteen German federal states. It is located in the northeast of Germany. Through the city flow the rivers Spree, Havel, Panke, Dahme and Wuhle. With a population of 3.77 million inhabitants, Berlin is the most populous city in the country and Central Europe, as well as the first city in population and the fourth largest urban agglomeration among the countries of the European Union, according to Eurostat data.",
    photo: "berlin.jpg",
  },
  {
    id: 02,
    name: "London",
    country: "England",
    description:
      "London is the capital and largest city of England and the United Kingdom.situated on the banks of the River Thames, London has been an important human settlement since it was founded by the Romans under the name Londinium almost two millennia ago.the ancient core of the city, the City of London, has basically retained its medieval perimeter of one square mile. Since the 19th century the name 'London' has also referred to the entire metropolis developed around this core. The bulk of this conurbation forms the London region and the administrative area of Greater London, governed by the Mayor and Assembly of London.",
    photo: "londres.jpg",
  },
  {
    id: 03,
    name: "Paris",
    country: "France",
    description:
      "Paris is the capital of France and its most populous city. Capital of the Ile-de-France region (or 'Paris Region'), it constitutes the country's only unicommunal department. The city of Paris, within its narrow administrative boundaries, has a population of 2 273 305 inhabitants in 2015. However, in the 20th century, the Paris metropolitan area expanded beyond the boundaries of the Paris municipality, and is today, with a population of 12 405 426 inhabitants in 2013, the second largest metropolitan area on the European continent (after London) and the 28th largest in the world.",
    photo: "paris.jpg",
  },
  {
    id: 04,
    name: "Moscow",
    country: "Russia",
    description:
      "Moscow is the capital and the most populous federal entity of Russia. The city is a major political, economic, cultural and scientific center of Russia and the continent. Moscow is the northernmost megacity on Earth and the most populous city in Europe. Its population is 12,108,257. By virtue of its territorial expansion to the southwest of Moscow Oblast, on July 1, 2012 the capital increased its area by 2.5 times, from about 1000 km² to 2500 km², and gained an additional population of 230,000 inhabitants.",
    photo: "moscu.jpg",
  },
  {
    id: 05,
    name: "Lisbon",
    country: "Portugal",
    description:
      "Lisbon is the capital and largest city of Portugal. Located at the mouth of the Tagus (Tejo) River, it is the capital of the country, capital of the Lisbon district, of the Lisbon region, of the Lisbon Metropolitan Area, and is also the main center of the Greater Lisbon subregion. The city has a population of 547,773 inhabitants and its metropolitan area is 2,810,923 in an area of 2921.90 km². This area contains 26% of the country's population. Lisbon is the richest city in Portugal.",
    photo: "lisboa.jpg",
  },
  {
    id: 06,
    name: "Tokyo",
    country: "Japan",
    description:
      "Tokyo is the de facto capital of Japan, located in the east-central part of the island of Honshu, specifically in the Kantō region. Overall it is one of Japan's 47 prefectures. It is the center of the country's politics, economy, education, communication and culture. It also has the largest concentration of corporate headquarters, financial institutions, universities and colleges, museums, theaters, shopping and entertainment establishments in Japan.",
    photo: "tokio.jpg",
  },
  {
    id: 07,
    name: "Vienna",
    country: "Austria",
    description:
      "Rodeada por el estado federado de Baja Austria, Viena es la ciudad más poblada y mayor centro cultural de Austria, con una población que supera los 1 800 000 de habitantes (2017)",
    photo: "viena.jpg",
  },
  {
    id: 08,
    name: "Washington",
    country: "EEUU",
    description:
      "Washington, D.C., officially called the District of Columbia, is the federal capital of the United States of America. It is administered as a federal district, an entity distinct from the fifty states that make up that nation, reporting directly to the federal government. The District of Columbia was founded on July 16, 1790, and in 1791 a new city called Washington, east of the already existing Georgetown, was officially established within the district. In 1871, the governments of these two cities and the rest of the towns in the district were unified into a single entity, D. C.",
    photo: "washinton.jpg",
  },
  {
    id: 09,
    name: "Nueva York",
    country: "EEUU",
    description:
      "New York (officially New York City or NYC) is the most populous city in the United States and one of the most populous cities in the world. Since the late 19th century, it has been one of the centers of the world economy. New York is considered a global city because of its worldwide influences in media, politics, education, architecture, entertainment, arts and fashion. The city's artistic and cultural influence is among the strongest in the world. The city is home to the headquarters of the United Nations. The city's great relevance on many levels makes it, along with Moscow, Beijing, London, Tokyo and Paris, one of the most globalized cities in the world.",
    photo: "nuevaYork.jpg",
  },
  {
    id: 10,
    name: "Athens",
    country: "Greece",
    description:
      "Athens (Ancient Greek: Ἀθῆναι, romanization: Athēnai, Modern Greek: Αθήνα, romanization: Athína) is the capital of Greece and currently the largest city in the country. The population of the municipality of Athens was 664 046 (in 2011), but its metropolitan area is much larger and comprises a population of 3.8 million (in 2011). It is the main center of Greek economic, cultural and political life. Athens' history spans more than three thousand years, making it one of the oldest inhabited cities.",
    photo: "grecia.jpg",
  },
  {
    id: 11,
    name: "Madrid",
    country: "Spain",
    description:
      "Madrid is a municipality and a city in Spain, with the historical category of villa. It is the capital of the State and the Community of Madrid. In its municipal area, the most populated in Spain, live 3,334,730 registered people, according to the INE of 2020, which makes it the second most populated city in the European Union, behind Berlin. Its metropolitan area has 6,779,888 inhabitants, the second most populated in the European Union after Paris, in other sources also behind the Ruhr Region.",
    photo: "madrid.jpg",
  },
  {
    id: 12,
    name: "Zurich",
    country: "Switzerland ",
    description:
      "Zurich is the largest city in the Swiss Confederation, with a population of 434,783 in 2019 and a metropolitan area of 1,456,786 inhabitants. It is the capital of the canton of Zurich and is located in the Zurich district, in the central plain of Switzerland and close to the Alps. It is the financial engine (Zurich is home to international banking) of the country. In 2019, Zurich was ranked among the ten most livable cities in the world by Mercer, along with Basel and Geneva.",
    photo: "zurich.jpg",
  },
  {
    id: 13,
    name: "Buenas Aires",
    country: "Argentina ",
    description:
      "Buenos Aires, in the text of the Constitution: City of Buenos Aires or Autonomous City of Buenos Aires (CABA), also known as the Federal Capital because it is the seat of the national government, is the capital and most populated city of the Argentine Republic. This metropolis is an autonomous city that constitutes one of the 24 districts, or 'first order jurisdictions', that make up the country. It has its own executive, legislative and judicial powers. It is located in the central-eastern region of the country, on the south bank of the Río de la Plata, in the Pampas region. The City of Buenos Aires was ceded in 1880 by the Province of Buenos Aires to be the federal capital of the country. By virtue of the constitutional reform of 1994 it enjoys a regime of autonomy. ",
    photo: "buenosAires.jpg",
  },
  {
    id: 14,
    name: "São Paulo",
    country: "Brazil",
    description:
      "São Paulo (also in Spanish San Pablo) and officially called Município de São Paulo, is the most populated city in Brazil and capital of the State of São Paulo and the main city of the Metropolitan region of São Paulo, in the southeastern region of the country. It has a population of 12,176,866 inhabitants, having in its metropolitan area a population of 21,893,053 inhabitants, according to the 2010 census data, being the first metropolis of America and the southern hemisphere, and one of the most populous in the world, the largest metropolitan area of America is the financial capital of Latin America. Besides being the most populous city in Brazil, it is also the largest and most populous of the entire southern hemisphere, Latin America, the entire American continent in general.",
    photo: "sanPablo.jpg",
  },
  {
    id: 15,
    name: "Cancun",
    country: "Mexico",
    description:
      "Cancun (in Mayan: kaan and kuum 'pot or nest of snakes') is a Mexican planned city located in the state of Quintana Roo, being head of the municipality of Benito Juarez, is located in eastern Mexico, more than 1600 km from Mexico City. It is the most populous city in the state with 888,797 inhabitants according to the latest census of the National Institute of Statistics and Geography in 2020. Considered a world-class tourist destination, with certification from the World Tourism Organization, its development project began operations in 1974 as an Integrally Planned Center, pioneer of Fonatur (Fondo Nacional de Fomento al Turismo), formerly known as Infratur. ",
    photo: "cancun.jpg",
  },
];

const citiesControllers = {
  getCities: (req, res) => {
    res.json({ response: cities });
  },
  loadcities: (req, res) => {
    req.body.id = !cities.length ? 1 : cities[cities.length - 1].id + 1;
    cities.push(req.body);
    res.json({ success: true });
  },
  getUniqueCity: (req, res) => {
    const city = city.find((el) => el.id === parseInt(req.params.id));
    res.json({ response: city });
  },
};

module.exports = citiesControllers;
