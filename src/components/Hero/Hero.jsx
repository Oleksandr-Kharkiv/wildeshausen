import css from './Hero.module.css';
// import heroImg from '../../images/Hero.jpg';
import { useSelector } from 'react-redux';

const Hero = () => {
  const language = useSelector(state => state.language);

  const title =
    language === 'de'
      ? 'DIE GESCHICHTE DES WILDESHAUSES'
      : language === 'en'
      ? 'HISTORY OF THE WILDESHAUSEN'
      : 'ІСТОРІЯ ВІЛЬДЕСГАУЗЕНА';
  const content =
    language === 'de'
      ? `1873 wurde das Krankenhaus Johanneum gegründet, 1898 erhielt die Stadt Anschluss an die Eisenbahn, 1899 an das Stromnetz, schon 1895 wurde die Freiwillige Feuerwehr gegründet. Während des Ersten Weltkrieges gab es von 1916 an in Wildeshausen einen Luftschiffhafen. Die Luftschiffhalle befand sich etwa an der Stelle der heutigen Zeppelinstraße. Die Halle wurde zunächst vom Heer, später von der Marine für ihre Luftschiffe genutzt und nach dem Ersten Weltkrieg abgebrochen.
      Mit der Oldenburgischen Gebietsreform 1933 wurde das Amt Wildeshausen aufgelöst und der Landkreis Oldenburg mit Sitz in Oldenburg gegründet, die Nationalsozialisten übernehmen auch hier die Macht. Gleichzeitig wurde die bis dahin eigenständige Landgemeinde Wildeshausen in die Stadt Wildeshausen eingegliedert. Die Wildeshauser Synagoge, die bereits aufgegeben war, wurde am Tag nach der „Reichspogromnacht“ 1938 zerstört. Während des Zweiten Weltkriegs blieb Wildeshausen von Zerstörungen weitgehend verschont. Wildeshausen wurde 1946 niedersächsisch.`
      : language === 'en'
      ? `The Johanneum hospital was founded in 1873, the town was connected to the railroad in 1898, to the electricity grid in 1899 and the volunteer fire department was founded as early as 1895. During the First World War, there was an airship port in Wildeshausen from 1916 onwards. The airship hangar was located roughly where Zeppelinstraße is today. The hall was initially used by the army and later by the navy for their airships and was demolished after the First World War.
      With the regional reform of Oldenburg in 1933, the Wildeshausen office was dissolved and the Oldenburg district, based in Oldenburg, was founded, with the National Socialists also taking power here. At the same time, the previously independent rural community of Wildeshausen was incorporated into the town of Wildeshausen. The Wildeshausen synagogue, which had already been abandoned, was destroyed the day after the "Reichspogromnacht" in 1938. Wildeshausen was largely spared destruction during the Second World War. Wildeshausen became part of Lower Saxony in 1946.`
      : `Лікарня Йоганнеума була заснована в 1873 році, залізниця була підключена до міста в 1898 році, електрична мережа - в 1899 році, а добровільна пожежна команда була заснована в 1895 році. Під час Першої світової війни у Вільдесгаузені з 1916 року існувала гавань для дирижаблів. Гавань дирижаблів була розташована приблизно там, де сьогодні знаходиться вулиця Цеппелінштрассе. Спочатку зал використовувався армією, а потім військово-морським флотом для дирижаблів, а після Першої світової війни був знесений.
      Після регіональної реформи в Ольденбурзі в 1933 році офіс Вільдесгаузен був розпущений, а округ Ольденбург був заснований зі штаб-квартирою в Ольденбурзі. У той же час, раніше незалежна сільська громада Вільдесгаузен була приєднана до міста Вільдесгаузен. Синагога Вільдесгаузена, яка вже була покинута, була зруйнована на наступний день після "Рейхспогромної ночі" у 1938 році. Під час Другої світової війни Вільдесгаузен майже не зазнав руйнувань. У 1946 році Вільдесгаузен став частиною Нижньої Саксонії.`;

  const content1 =
    language === 'de'
      ? `1960 wurde mit der Wittekind-Kaserne, in der das Grenadierbataillon 313, nachmalig Fallschirmjägerbataillon, 272 und das Panzerartilleriebataillon 315 stationiert waren, der Ort Garnison der Bundeswehr.
      Am 13. November 1972 wurde die Stadt und Umgebung vom Orkan Quimburga mit Windgeschwindigkeiten von 200 km/h heimgesucht; es gab hohe Sachschäden an Gebäuden und Fahrzeugen; ganze Waldgebiete im Umland wurden teilweise vernichtet. Das damals noch über Land geführte Elektrizitäts- und Telefonnetz wurde zerstört, so dass zahlreiche Haushalte Tage oder Wochen ohne Strom und Telefonverbindung auskommen mussten. Die Bundeswehr und das Technische Hilfswerk waren im Einsatz, um die durch umgestürzte Bäume von der Außenwelt abgeschnittenen Häuser wieder zugänglich zu machen. Noch heute zeugen mehrere Gedenksteine in der Umgebung von Wildeshausen von der Katastrophe.`
      : language === 'en'
      ? `In 1960, the Wittekind barracks, in which the Grenadier Battalion 313, later the Paratrooper Battalion, 272 and the Tank Artillery Battalion 315 were stationed, became a garrison of the German Armed Forces.
      On November 13, 1972, the town and surrounding area were hit by hurricane Quimburga with wind speeds of 200 km/h; there was extensive material damage to buildings and vehicles; entire forest areas in the surrounding countryside were partially destroyed. The electricity and telephone network, which was still overland at the time, was destroyed, leaving many households without power and telephone connections for days or weeks. The German Armed Forces and the Federal Agency for Technical Relief were deployed to make the houses cut off from the outside world by fallen trees accessible again. Several memorial stones in the Wildeshausen area still bear witness to the disaster today.`
      : `У 1960 році казарми Віттекінда, в яких дислокувався гренадерський батальйон 313, пізніше десантний батальйон 272 і бронетанковий артилерійський батальйон 315, стали гарнізоном Збройних сил Німеччини.
      13 листопада 1972 року на місто та околиці обрушився ураган "Квімбурга" зі швидкістю вітру 200 км/год; було завдано значних пошкоджень будівлям і транспортним засобам, частково знищено цілі ділянки лісу в околицях. Електрична і телефонна мережа, яка на той час все ще була наземною, була зруйнована, в результаті чого багато домогосподарств залишилися без електрики і телефонного зв'язку на кілька днів або тижнів. Збройні сили Німеччини та Федеральне агентство з технічної допомоги були задіяні для того, щоб зробити будинки, відрізані від зовнішнього світу поваленими деревами, знову доступними. Навіть сьогодні кілька меморіальних каменів навколо Вільдесгаузена свідчать про катастрофу.`;

  const content2 =
    language === 'de'
      ? `1977 erhielt Wildeshausen den Status eines staatlich anerkannten Luftkurortes.
      Die Kreisverwaltung des Landkreises Oldenburg zog 1988 von Oldenburg nach Wildeshausen und für die Kreisverwaltung wurde ein Gebäudekomplex errichtet.`
      : language === 'en'
      ? `In 1977, Wildeshausen was granted the status of a state-recognized climatic health resort.
      The district administration of the Oldenburg district moved from Oldenburg to Wildeshausen in 1988 and a building complex was erected for the district administration.`
      : `У 1977 році Вільдесгаузен отримав статус державного кліматичного курорту.
      У 1988 році районна адміністрація округу Ольденбург переїхала з Ольденбурга до Вільдесгаузена, а для районної адміністрації було зведено комплекс будівель.`;

  return (
    <div className={css.heroWrap}>
      <div className={css.heroTextWrap}>
        <h1 className={css.heroTitle}>{title}</h1>
        <p className={css.heroText}>{content}</p>
        <p className={css.heroText}>{content1}</p>
        <p className={css.heroText}>{content2}</p>
      </div>
      {/* <div className={css.heroImgWrap}>
        <img src={heroImg} alt="Ukrainians with a flag" width="100%" />
      </div> */}
    </div>
  );
};

export default Hero;

// ---------------------зміна мови за допомогою передачі props---

// import css from './Hero.module.css';
// import heroImg from '../../images/Hero.jpg';

// const Hero = ({ language }) => {
//   const title =
//     language === 'de'
//       ? 'GEMEINNÜTZIGER VEREIN „ZIELE DER ZUKUNFT E.V.“'
//       : language === 'en'
//       ? 'NON-PROFIT ORGANIZATION „GOALS OF THE FUTURE“'
//       : 'ГРОМАДСЬКА ОРГАНІЗАЦІЯ „ЦІЛІ МАЙБУТНЬОГО“';
//   const content =
//     language === 'de'
//       ? 'wurde im Jahr 2022 von Bürgern aus der Ukraine und Deutschland gegründet, nachdem Russland eine umfangreiche militärische Intervention in der Ukraine unternommen hatte. Unser Team hat sich zum Ziel gesetzt, humanitäre Unterstützung in der Ukraine bereitzustellen und die Integration ukrainischer Bürgerinnen und Bürger in Erfurt und Deutschland zu fördern.'
//       : language === 'en'
//       ? 'was founded in 2022 by citizens from Ukraine and Germany after Russia undertook extensive military intervention in Ukraine. Our team aims to provide humanitarian aid in Ukraine and promote the integration of Ukrainian citizens in Erfurt and Germany.'
//       : 'була заснована у 2022 році громадянами з України та Німеччини після того, як Росія провела широкомасштабну військову інтервенцію в Україні. Наша команда має на меті надавати гуманітарну допомогу в Україні та сприяти інтеграції громадян України в Ерфурті та Німеччині.';

//   return (
//     <div className={css.heroWrap}>
//       <div className={css.heroTextWrap}>
//         <h1 className={css.heroTitle}>{title}</h1>
//         <p className={css.heroText}>{content}</p>
//       </div>
//       <div className={css.heroImgWrap}>
//         <img src={heroImg} alt="Ukrainians with a flag" width="100%" />
//       </div>
//     </div>
//   );
// };

// export default Hero;
