import * as React from "react";
import * as Select from "react-select";
import { observer } from "mobx-react";
import { FBSelect } from "./fb_tz_select";

/** A (quick) Timezone picker until we have time to write a real one with
 * React-Select (which doesn't support group by clauses yet). Example usage:
 * <Sorry callback={ (tz: string) => { alert(`U picked ${tz}`) }} />
 */
export function TZSelect({callback, current}: TZSelectProps) {
  return <FBSelect dropDownItems={ALL_TIMEZONES}
    value={current}
    onChange={callback} />
}

interface TZSelectProps {
  callback: TZSelectHandler;
  current: string;
}

type TZSelectHandler = (e: Select.Option) => void;

export const ALL_TIMEZONES = [
  { value: "America/Los_Angeles", label: "Los Angeles (Pacific)" },
  { value: "America/Puerto_Rico", label: "Puerto Rico (Atlantic)" },
  { value: "America/New_York", label: "New York (Eastern)" },
  { value: "America/Chicago", label: "Chicago (Central)" },
  { value: "America/Denver", label: "Denver (Mountain)" },
  { value: "America/Phoenix", label: "Phoenix (MST)" },
  { value: "America/Anchorage", label: "Anchorage (Alaska)" },
  { value: "Pacific/Honolulu", label: "Honolulu (Hawaii)" },
  { value: "America/Adak", label: "Adak" },
  { value: "America/Anchorage", label: "Anchorage" },
  { value: "America/Anguilla", label: "Anguilla" },
  { value: "America/Antigua", label: "Antigua" },
  { value: "America/Araguaina", label: "Araguaina" },
  { value: "America/Argentina/Buenos_Aires", label: "Argentina - Buenos Aires" },
  { value: "America/Argentina/Catamarca", label: "Argentina - Catamarca" },
  { value: "America/Argentina/ComodRivadavia", label: "Argentina - ComodRivadavia" },
  { value: "America/Argentina/Cordoba", label: "Argentina - Cordoba" },
  { value: "America/Argentina/Jujuy", label: "Argentina - Jujuy" },
  { value: "America/Argentina/La_Rioja", label: "Argentina - La Rioja" },
  { value: "America/Argentina/Mendoza", label: "Argentina - Mendoza" },
  { value: "America/Argentina/Rio_Gallegos", label: "Argentina - Rio Gallegos" },
  { value: "America/Argentina/Salta", label: "Argentina - Salta" },
  { value: "America/Argentina/San_Juan", label: "Argentina - San Juan" },
  { value: "America/Argentina/San_Luis", label: "Argentina - San Luis" },
  { value: "America/Argentina/Tucuman", label: "Argentina - Tucuman" },
  { value: "America/Argentina/Ushuaia", label: "Argentina - Ushuaia" },
  { value: "America/Aruba", label: "Aruba" },
  { value: "America/Asuncion", label: "Asuncion" },
  { value: "America/Atikokan", label: "Atikokan" },
  { value: "America/Atka", label: "Atka" },
  { value: "America/Bahia", label: "Bahia" },
  { value: "America/Barbados", label: "Barbados" },
  { value: "America/Belem", label: "Belem" },
  { value: "America/Belize", label: "Belize" },
  { value: "America/Blanc-Sablon", label: "Blanc-Sablon" },
  { value: "America/Boa_Vista", label: "Boa Vista" },
  { value: "America/Bogota", label: "Bogota" },
  { value: "America/Boise", label: "Boise" },
  { value: "America/Buenos_Aires", label: "Buenos Aires" },
  { value: "America/Cambridge_Bay", label: "Cambridge Bay" },
  { value: "America/Campo_Grande", label: "Campo Grande" },
  { value: "America/Cancun", label: "Cancun" },
  { value: "America/Caracas", label: "Caracas" },
  { value: "America/Catamarca", label: "Catamarca" },
  { value: "America/Cayenne", label: "Cayenne" },
  { value: "America/Cayman", label: "Cayman" },
  { value: "America/Chicago", label: "Chicago" },
  { value: "America/Chihuahua", label: "Chihuahua" },
  { value: "America/Coral_Harbour", label: "Coral Harbour" },
  { value: "America/Cordoba", label: "Cordoba" },
  { value: "America/Costa_Rica", label: "Costa Rica" },
  { value: "America/Cuiaba", label: "Cuiaba" },
  { value: "America/Curacao", label: "Curacao" },
  { value: "America/Danmarkshavn", label: "Danmarkshavn" },
  { value: "America/Dawson", label: "Dawson" },
  { value: "America/Dawson_Creek", label: "Dawson Creek" },
  { value: "America/Denver", label: "Denver" },
  { value: "America/Detroit", label: "Detroit" },
  { value: "America/Dominica", label: "Dominica" },
  { value: "America/Edmonton", label: "Edmonton" },
  { value: "America/Eirunepe", label: "Eirunepe" },
  { value: "America/El_Salvador", label: "El Salvador" },
  { value: "America/Ensenada", label: "Ensenada" },
  { value: "America/Fortaleza", label: "Fortaleza" },
  { value: "America/Fort_Wayne", label: "Fort Wayne" },
  { value: "America/Glace_Bay", label: "Glace Bay" },
  { value: "America/Godthab", label: "Godthab" },
  { value: "America/Goose_Bay", label: "Goose Bay" },
  { value: "America/Grand_Turk", label: "Grand Turk" },
  { value: "America/Grenada", label: "Grenada" },
  { value: "America/Guadeloupe", label: "Guadeloupe" },
  { value: "America/Guatemala", label: "Guatemala" },
  { value: "America/Guayaquil", label: "Guayaquil" },
  { value: "America/Guyana", label: "Guyana" },
  { value: "America/Halifax", label: "Halifax" },
  { value: "America/Havana", label: "Havana" },
  { value: "America/Hermosillo", label: "Hermosillo" },
  { value: "America/Indiana/Indianapolis", label: "Indiana - Indianapolis" },
  { value: "America/Indiana/Knox", label: "Indiana - Knox" },
  { value: "America/Indiana/Marengo", label: "Indiana - Marengo" },
  { value: "America/Indiana/Petersburg", label: "Indiana - Petersburg" },
  { value: "America/Indiana/Tell_City", label: "Indiana - Tell City" },
  { value: "America/Indiana/Vevay", label: "Indiana - Vevay" },
  { value: "America/Indiana/Vincennes", label: "Indiana - Vincennes" },
  { value: "America/Indiana/Winamac", label: "Indiana - Winamac" },
  { value: "America/Indianapolis", label: "Indianapolis" },
  { value: "America/Inuvik", label: "Inuvik" },
  { value: "America/Iqaluit", label: "Iqaluit" },
  { value: "America/Jamaica", label: "Jamaica" },
  { value: "America/Jujuy", label: "Jujuy" },
  { value: "America/Juneau", label: "Juneau" },
  { value: "America/Kentucky/Louisville", label: "Kentucky - Louisville" },
  { value: "America/Kentucky/Monticello", label: "Kentucky - Monticello" },
  { value: "America/Knox_IN", label: "Knox IN" },
  { value: "America/La_Paz", label: "La Paz" },
  { value: "America/Lima", label: "Lima" },
  { value: "America/Los_Angeles", label: "Los Angeles" },
  { value: "America/Louisville", label: "Louisville" },
  { value: "America/Maceio", label: "Maceio" },
  { value: "America/Managua", label: "Managua" },
  { value: "America/Manaus", label: "Manaus" },
  { value: "America/Marigot", label: "Marigot" },
  { value: "America/Martinique", label: "Martinique" },
  { value: "America/Matamoros", label: "Matamoros" },
  { value: "America/Mazatlan", label: "Mazatlan" },
  { value: "America/Mendoza", label: "Mendoza" },
  { value: "America/Menominee", label: "Menominee" },
  { value: "America/Merida", label: "Merida" },
  { value: "America/Mexico_City", label: "Mexico City" },
  { value: "America/Miquelon", label: "Miquelon" },
  { value: "America/Moncton", label: "Moncton" },
  { value: "America/Monterrey", label: "Monterrey" },
  { value: "America/Montevideo", label: "Montevideo" },
  { value: "America/Montreal", label: "Montreal" },
  { value: "America/Montserrat", label: "Montserrat" },
  { value: "America/Nassau", label: "Nassau" },
  { value: "America/New_York", label: "New York" },
  { value: "America/Nipigon", label: "Nipigon" },
  { value: "America/Nome", label: "Nome" },
  { value: "America/Noronha", label: "Noronha" },
  { value: "America/North_Dakota/Center", label: "North Dakota - Center" },
  { value: "America/North_Dakota/New_Salem", label: "North Dakota - New Salem" },
  { value: "America/Ojinaga", label: "Ojinaga" },
  { value: "America/Panama", label: "Panama" },
  { value: "America/Pangnirtung", label: "Pangnirtung" },
  { value: "America/Paramaribo", label: "Paramaribo" },
  { value: "America/Phoenix", label: "Phoenix" },
  { value: "America/Port-au-Prince", label: "Port-au-Prince" },
  { value: "America/Porto_Acre", label: "Porto Acre" },
  { value: "America/Port_of_Spain", label: "Port of Spain" },
  { value: "America/Porto_Velho", label: "Porto Velho" },
  { value: "America/Puerto_Rico", label: "Puerto Rico" },
  { value: "America/Rainy_River", label: "Rainy River" },
  { value: "America/Rankin_Inlet", label: "Rankin Inlet" },
  { value: "America/Recife", label: "Recife" },
  { value: "America/Regina", label: "Regina" },
  { value: "America/Resolute", label: "Resolute" },
  { value: "America/Rio_Branco", label: "Rio Branco" },
  { value: "America/Rosario", label: "Rosario" },
  { value: "America/Santa_Isabel", label: "Santa Isabel" },
  { value: "America/Santarem", label: "Santarem" },
  { value: "America/Santiago", label: "Santiago" },
  { value: "America/Santo_Domingo", label: "Santo Domingo" },
  { value: "America/Sao_Paulo", label: "Sao Paulo" },
  { value: "America/Scoresbysund", label: "Scoresbysund" },
  { value: "America/Shiprock", label: "Shiprock" },
  { value: "America/St_Barthelemy", label: "St Barthelemy" },
  { value: "America/St_Johns", label: "St Johns" },
  { value: "America/St_Kitts", label: "St Kitts" },
  { value: "America/St_Lucia", label: "St Lucia" },
  { value: "America/St_Thomas", label: "St Thomas" },
  { value: "America/St_Vincent", label: "St Vincent" },
  { value: "America/Swift_Current", label: "Swift Current" },
  { value: "America/Tegucigalpa", label: "Tegucigalpa" },
  { value: "America/Thule", label: "Thule" },
  { value: "America/Thunder_Bay", label: "Thunder Bay" },
  { value: "America/Tijuana", label: "Tijuana" },
  { value: "America/Toronto", label: "Toronto" },
  { value: "America/Tortola", label: "Tortola" },
  { value: "America/Vancouver", label: "Vancouver" },
  { value: "America/Virgin", label: "Virgin" },
  { value: "America/Whitehorse", label: "Whitehorse" },
  { value: "America/Winnipeg", label: "Winnipeg" },
  { value: "America/Yakutat", label: "Yakutat" },
  { value: "America/Yellowknife", label: "Yellowknife" },
  { value: "Europe/Amsterdam", label: "Amsterdam" },
  { value: "Europe/Andorra", label: "Andorra" },
  { value: "Europe/Athens", label: "Athens" },
  { value: "Europe/Belfast", label: "Belfast" },
  { value: "Europe/Belgrade", label: "Belgrade" },
  { value: "Europe/Berlin", label: "Berlin" },
  { value: "Europe/Bratislava", label: "Bratislava" },
  { value: "Europe/Brussels", label: "Brussels" },
  { value: "Europe/Bucharest", label: "Bucharest" },
  { value: "Europe/Budapest", label: "Budapest" },
  { value: "Europe/Chisinau", label: "Chisinau" },
  { value: "Europe/Copenhagen", label: "Copenhagen" },
  { value: "Europe/Dublin", label: "Dublin" },
  { value: "Europe/Gibraltar", label: "Gibraltar" },
  { value: "Europe/Guernsey", label: "Guernsey" },
  { value: "Europe/Helsinki", label: "Helsinki" },
  { value: "Europe/Isle_of_Man", label: "Isle of Man" },
  { value: "Europe/Istanbul", label: "Istanbul" },
  { value: "Europe/Jersey", label: "Jersey" },
  { value: "Europe/Kaliningrad", label: "Kaliningrad" },
  { value: "Europe/Kiev", label: "Kiev" },
  { value: "Europe/Lisbon", label: "Lisbon" },
  { value: "Europe/Ljubljana", label: "Ljubljana" },
  { value: "Europe/London", label: "London" },
  { value: "Europe/Luxembourg", label: "Luxembourg" },
  { value: "Europe/Madrid", label: "Madrid" },
  { value: "Europe/Malta", label: "Malta" },
  { value: "Europe/Mariehamn", label: "Mariehamn" },
  { value: "Europe/Minsk", label: "Minsk" },
  { value: "Europe/Monaco", label: "Monaco" },
  { value: "Europe/Moscow", label: "Moscow" },
  { value: "Europe/Nicosia", label: "Nicosia" },
  { value: "Europe/Oslo", label: "Oslo" },
  { value: "Europe/Paris", label: "Paris" },
  { value: "Europe/Podgorica", label: "Podgorica" },
  { value: "Europe/Prague", label: "Prague" },
  { value: "Europe/Riga", label: "Riga" },
  { value: "Europe/Rome", label: "Rome" },
  { value: "Europe/Samara", label: "Samara" },
  { value: "Europe/San_Marino", label: "San Marino" },
  { value: "Europe/Sarajevo", label: "Sarajevo" },
  { value: "Europe/Simferopol", label: "Simferopol" },
  { value: "Europe/Skopje", label: "Skopje" },
  { value: "Europe/Sofia", label: "Sofia" },
  { value: "Europe/Stockholm", label: "Stockholm" },
  { value: "Europe/Tallinn", label: "Tallinn" },
  { value: "Europe/Tirane", label: "Tirane" },
  { value: "Europe/Tiraspol", label: "Tiraspol" },
  { value: "Europe/Uzhgorod", label: "Uzhgorod" },
  { value: "Europe/Vaduz", label: "Vaduz" },
  { value: "Europe/Vatican", label: "Vatican" },
  { value: "Europe/Vienna", label: "Vienna" },
  { value: "Europe/Vilnius", label: "Vilnius" },
  { value: "Europe/Volgograd", label: "Volgograd" },
  { value: "Europe/Warsaw", label: "Warsaw" },
  { value: "Europe/Zagreb", label: "Zagreb" },
  { value: "Europe/Zaporozhye", label: "Zaporozhye" },
  { value: "Europe/Zurich", label: "Zurich" },
  { value: "Asia/Aden", label: "Aden" },
  { value: "Asia/Almaty", label: "Almaty" },
  { value: "Asia/Amman", label: "Amman" },
  { value: "Asia/Anadyr", label: "Anadyr" },
  { value: "Asia/Aqtau", label: "Aqtau" },
  { value: "Asia/Aqtobe", label: "Aqtobe" },
  { value: "Asia/Ashgabat", label: "Ashgabat" },
  { value: "Asia/Ashkhabad", label: "Ashkhabad" },
  { value: "Asia/Baghdad", label: "Baghdad" },
  { value: "Asia/Bahrain", label: "Bahrain" },
  { value: "Asia/Baku", label: "Baku" },
  { value: "Asia/Bangkok", label: "Bangkok" },
  { value: "Asia/Beirut", label: "Beirut" },
  { value: "Asia/Bishkek", label: "Bishkek" },
  { value: "Asia/Brunei", label: "Brunei" },
  { value: "Asia/Calcutta", label: "Calcutta" },
  { value: "Asia/Choibalsan", label: "Choibalsan" },
  { value: "Asia/Chongqing", label: "Chongqing" },
  { value: "Asia/Chungking", label: "Chungking" },
  { value: "Asia/Colombo", label: "Colombo" },
  { value: "Asia/Dacca", label: "Dacca" },
  { value: "Asia/Damascus", label: "Damascus" },
  { value: "Asia/Dhaka", label: "Dhaka" },
  { value: "Asia/Dili", label: "Dili" },
  { value: "Asia/Dubai", label: "Dubai" },
  { value: "Asia/Dushanbe", label: "Dushanbe" },
  { value: "Asia/Gaza", label: "Gaza" },
  { value: "Asia/Harbin", label: "Harbin" },
  { value: "Asia/Ho_Chi_Minh", label: "Ho Chi Minh" },
  { value: "Asia/Hong_Kong", label: "Hong Kong" },
  { value: "Asia/Hovd", label: "Hovd" },
  { value: "Asia/Irkutsk", label: "Irkutsk" },
  { value: "Asia/Istanbul", label: "Istanbul" },
  { value: "Asia/Jakarta", label: "Jakarta" },
  { value: "Asia/Jayapura", label: "Jayapura" },
  { value: "Asia/Jerusalem", label: "Jerusalem" },
  { value: "Asia/Kabul", label: "Kabul" },
  { value: "Asia/Kamchatka", label: "Kamchatka" },
  { value: "Asia/Karachi", label: "Karachi" },
  { value: "Asia/Kashgar", label: "Kashgar" },
  { value: "Asia/Kathmandu", label: "Kathmandu" },
  { value: "Asia/Katmandu", label: "Katmandu" },
  { value: "Asia/Kolkata", label: "Kolkata" },
  { value: "Asia/Krasnoyarsk", label: "Krasnoyarsk" },
  { value: "Asia/Kuala_Lumpur", label: "Kuala Lumpur" },
  { value: "Asia/Kuching", label: "Kuching" },
  { value: "Asia/Kuwait", label: "Kuwait" },
  { value: "Asia/Macao", label: "Macao" },
  { value: "Asia/Macau", label: "Macau" },
  { value: "Asia/Magadan", label: "Magadan" },
  { value: "Asia/Makassar", label: "Makassar" },
  { value: "Asia/Manila", label: "Manila" },
  { value: "Asia/Muscat", label: "Muscat" },
  { value: "Asia/Nicosia", label: "Nicosia" },
  { value: "Asia/Novokuznetsk", label: "Novokuznetsk" },
  { value: "Asia/Novosibirsk", label: "Novosibirsk" },
  { value: "Asia/Omsk", label: "Omsk" },
  { value: "Asia/Oral", label: "Oral" },
  { value: "Asia/Phnom_Penh", label: "Phnom Penh" },
  { value: "Asia/Pontianak", label: "Pontianak" },
  { value: "Asia/Pyongyang", label: "Pyongyang" },
  { value: "Asia/Qatar", label: "Qatar" },
  { value: "Asia/Qyzylorda", label: "Qyzylorda" },
  { value: "Asia/Rangoon", label: "Rangoon" },
  { value: "Asia/Riyadh", label: "Riyadh" },
  { value: "Asia/Saigon", label: "Saigon" },
  { value: "Asia/Sakhalin", label: "Sakhalin" },
  { value: "Asia/Samarkand", label: "Samarkand" },
  { value: "Asia/Seoul", label: "Seoul" },
  { value: "Asia/Shanghai", label: "Shanghai" },
  { value: "Asia/Singapore", label: "Singapore" },
  { value: "Asia/Taipei", label: "Taipei" },
  { value: "Asia/Tashkent", label: "Tashkent" },
  { value: "Asia/Tbilisi", label: "Tbilisi" },
  { value: "Asia/Tehran", label: "Tehran" },
  { value: "Asia/Tel_Aviv", label: "Tel Aviv" },
  { value: "Asia/Thimbu", label: "Thimbu" },
  { value: "Asia/Thimphu", label: "Thimphu" },
  { value: "Asia/Tokyo", label: "Tokyo" },
  { value: "Asia/Ujung_Pandang", label: "Ujung Pandang" },
  { value: "Asia/Ulaanbaatar", label: "Ulaanbaatar" },
  { value: "Asia/Ulan_Bator", label: "Ulan Bator" },
  { value: "Asia/Urumqi", label: "Urumqi" },
  { value: "Asia/Vientiane", label: "Vientiane" },
  { value: "Asia/Vladivostok", label: "Vladivostok" },
  { value: "Asia/Yakutsk", label: "Yakutsk" },
  { value: "Asia/Yekaterinburg", label: "Yekaterinburg" },
  { value: "Asia/Yerevan", label: "Yerevan" },
  { value: "Africa/Abidjan", label: "Abidjan" },
  { value: "Africa/Accra", label: "Accra" },
  { value: "Africa/Addis_Ababa", label: "Addis Ababa" },
  { value: "Africa/Algiers", label: "Algiers" },
  { value: "Africa/Asmara", label: "Asmara" },
  { value: "Africa/Asmera", label: "Asmera" },
  { value: "Africa/Bamako", label: "Bamako" },
  { value: "Africa/Bangui", label: "Bangui" },
  { value: "Africa/Banjul", label: "Banjul" },
  { value: "Africa/Bissau", label: "Bissau" },
  { value: "Africa/Blantyre", label: "Blantyre" },
  { value: "Africa/Brazzaville", label: "Brazzaville" },
  { value: "Africa/Bujumbura", label: "Bujumbura" },
  { value: "Africa/Cairo", label: "Cairo" },
  { value: "Africa/Casablanca", label: "Casablanca" },
  { value: "Africa/Ceuta", label: "Ceuta" },
  { value: "Africa/Conakry", label: "Conakry" },
  { value: "Africa/Dakar", label: "Dakar" },
  { value: "Africa/Dar_es_Salaam", label: "Dar es Salaam" },
  { value: "Africa/Djibouti", label: "Djibouti" },
  { value: "Africa/Douala", label: "Douala" },
  { value: "Africa/El_Aaiun", label: "El Aaiun" },
  { value: "Africa/Freetown", label: "Freetown" },
  { value: "Africa/Gaborone", label: "Gaborone" },
  { value: "Africa/Harare", label: "Harare" },
  { value: "Africa/Johannesburg", label: "Johannesburg" },
  { value: "Africa/Kampala", label: "Kampala" },
  { value: "Africa/Khartoum", label: "Khartoum" },
  { value: "Africa/Kigali", label: "Kigali" },
  { value: "Africa/Kinshasa", label: "Kinshasa" },
  { value: "Africa/Lagos", label: "Lagos" },
  { value: "Africa/Libreville", label: "Libreville" },
  { value: "Africa/Lome", label: "Lome" },
  { value: "Africa/Luanda", label: "Luanda" },
  { value: "Africa/Lubumbashi", label: "Lubumbashi" },
  { value: "Africa/Lusaka", label: "Lusaka" },
  { value: "Africa/Malabo", label: "Malabo" },
  { value: "Africa/Maputo", label: "Maputo" },
  { value: "Africa/Maseru", label: "Maseru" },
  { value: "Africa/Mbabane", label: "Mbabane" },
  { value: "Africa/Mogadishu", label: "Mogadishu" },
  { value: "Africa/Monrovia", label: "Monrovia" },
  { value: "Africa/Nairobi", label: "Nairobi" },
  { value: "Africa/Ndjamena", label: "Ndjamena" },
  { value: "Africa/Niamey", label: "Niamey" },
  { value: "Africa/Nouakchott", label: "Nouakchott" },
  { value: "Africa/Ouagadougou", label: "Ouagadougou" },
  { value: "Africa/Porto-Novo", label: "Porto-Novo" },
  { value: "Africa/Sao_Tome", label: "Sao Tome" },
  { value: "Africa/Timbuktu", label: "Timbuktu" },
  { value: "Africa/Tripoli", label: "Tripoli" },
  { value: "Africa/Tunis", label: "Tunis" },
  { value: "Africa/Windhoek", label: "Windhoek" },
  { value: "Australia/ACT", label: "ACT" },
  { value: "Australia/Adelaide", label: "Adelaide" },
  { value: "Australia/Brisbane", label: "Brisbane" },
  { value: "Australia/Broken_Hill", label: "Broken Hill" },
  { value: "Australia/Canberra", label: "Canberra" },
  { value: "Australia/Currie", label: "Currie" },
  { value: "Australia/Darwin", label: "Darwin" },
  { value: "Australia/Eucla", label: "Eucla" },
  { value: "Australia/Hobart", label: "Hobart" },
  { value: "Australia/LHI", label: "LHI" },
  { value: "Australia/Lindeman", label: "Lindeman" },
  { value: "Australia/Lord_Howe", label: "Lord Howe" },
  { value: "Australia/Melbourne", label: "Melbourne" },
  { value: "Australia/North", label: "North" },
  { value: "Australia/NSW", label: "NSW" },
  { value: "Australia/Perth", label: "Perth" },
  { value: "Australia/Queensland", label: "Queensland" },
  { value: "Australia/South", label: "South" },
  { value: "Australia/Sydney", label: "Sydney" },
  { value: "Australia/Tasmania", label: "Tasmania" },
  { value: "Australia/Victoria", label: "Victoria" },
  { value: "Australia/West", label: "West" },
  { value: "Australia/Yancowinna", label: "Yancowinna" },
  { value: "Indian/Antananarivo", label: "Antananarivo" },
  { value: "Indian/Chagos", label: "Chagos" },
  { value: "Indian/Christmas", label: "Christmas" },
  { value: "Indian/Cocos", label: "Cocos" },
  { value: "Indian/Comoro", label: "Comoro" },
  { value: "Indian/Kerguelen", label: "Kerguelen" },
  { value: "Indian/Mahe", label: "Mahe" },
  { value: "Indian/Maldives", label: "Maldives" },
  { value: "Indian/Mauritius", label: "Mauritius" },
  { value: "Indian/Mayotte", label: "Mayotte" },
  { value: "Indian/Reunion", label: "Reunion" },
  { value: "Atlantic/Azores", label: "Azores" },
  { value: "Atlantic/Bermuda", label: "Bermuda" },
  { value: "Atlantic/Canary", label: "Canary" },
  { value: "Atlantic/Cape_Verde", label: "Cape Verde" },
  { value: "Atlantic/Faeroe", label: "Faeroe" },
  { value: "Atlantic/Faroe", label: "Faroe" },
  { value: "Atlantic/Jan_Mayen", label: "Jan Mayen" },
  { value: "Atlantic/Madeira", label: "Madeira" },
  { value: "Atlantic/Reykjavik", label: "Reykjavik" },
  { value: "Atlantic/South_Georgia", label: "South Georgia" },
  { value: "Atlantic/Stanley", label: "Stanley" },
  { value: "Atlantic/St_Helena", label: "St Helena" },
  { value: "Pacific/Apia", label: "Apia" },
  { value: "Pacific/Auckland", label: "Auckland" },
  { value: "Pacific/Chatham", label: "Chatham" },
  { value: "Pacific/Easter", label: "Easter" },
  { value: "Pacific/Efate", label: "Efate" },
  { value: "Pacific/Enderbury", label: "Enderbury" },
  { value: "Pacific/Fakaofo", label: "Fakaofo" },
  { value: "Pacific/Fiji", label: "Fiji" },
  { value: "Pacific/Funafuti", label: "Funafuti" },
  { value: "Pacific/Galapagos", label: "Galapagos" },
  { value: "Pacific/Gambier", label: "Gambier" },
  { value: "Pacific/Guadalcanal", label: "Guadalcanal" },
  { value: "Pacific/Guam", label: "Guam" },
  { value: "Pacific/Honolulu", label: "Honolulu" },
  { value: "Pacific/Johnston", label: "Johnston" },
  { value: "Pacific/Kiritimati", label: "Kiritimati" },
  { value: "Pacific/Kosrae", label: "Kosrae" },
  { value: "Pacific/Kwajalein", label: "Kwajalein" },
  { value: "Pacific/Majuro", label: "Majuro" },
  { value: "Pacific/Marquesas", label: "Marquesas" },
  { value: "Pacific/Midway", label: "Midway" },
  { value: "Pacific/Nauru", label: "Nauru" },
  { value: "Pacific/Niue", label: "Niue" },
  { value: "Pacific/Norfolk", label: "Norfolk" },
  { value: "Pacific/Noumea", label: "Noumea" },
  { value: "Pacific/Pago_Pago", label: "Pago Pago" },
  { value: "Pacific/Palau", label: "Palau" },
  { value: "Pacific/Pitcairn", label: "Pitcairn" },
  { value: "Pacific/Ponape", label: "Ponape" },
  { value: "Pacific/Port_Moresby", label: "Port Moresby" },
  { value: "Pacific/Rarotonga", label: "Rarotonga" },
  { value: "Pacific/Saipan", label: "Saipan" },
  { value: "Pacific/Samoa", label: "Samoa" },
  { value: "Pacific/Tahiti", label: "Tahiti" },
  { value: "Pacific/Tarawa", label: "Tarawa" },
  { value: "Pacific/Tongatapu", label: "Tongatapu" },
  { value: "Pacific/Truk", label: "Truk" },
  { value: "Pacific/Wake", label: "Wake" },
  { value: "Pacific/Wallis", label: "Wallis" },
  { value: "Pacific/Yap", label: "Yap" },
  { value: "Antarctica/Casey", label: "Casey" },
  { value: "Antarctica/Davis", label: "Davis" },
  { value: "Antarctica/DumontDUrville", label: "DumontDUrville" },
  { value: "Antarctica/Macquarie", label: "Macquarie" },
  { value: "Antarctica/Mawson", label: "Mawson" },
  { value: "Antarctica/McMurdo", label: "McMurdo" },
  { value: "Antarctica/Palmer", label: "Palmer" },
  { value: "Antarctica/Rothera", label: "Rothera" },
  { value: "Antarctica/South_Pole", label: "South Pole" },
  { value: "Antarctica/Syowa", label: "Syowa" },
  { value: "Antarctica/Vostok", label: "Vostok" },
  { value: "Arctic/Longyearbyen", label: "Longyearbyen" },
  { value: "UTC", label: "UTC" },
  { value: "UTC-12", label: "UTC-12" },
  { value: "UTC-11", label: "UTC-11" },
  { value: "UTC-10", label: "UTC-10" },
  { value: "UTC-9", label: "UTC-9" },
  { value: "UTC-8", label: "UTC-8" },
  { value: "UTC-7", label: "UTC-7" },
  { value: "UTC-6", label: "UTC-6" },
  { value: "UTC-5", label: "UTC-5" },
  { value: "UTC-4", label: "UTC-4" },
  { value: "UTC-3", label: "UTC-3" },
  { value: "UTC-2", label: "UTC-2" },
  { value: "UTC-1", label: "UTC-1" },
  { value: "UTC+0", label: "UTC+0" },
  { value: "UTC+1", label: "UTC+1" },
  { value: "UTC+2", label: "UTC+2" },
  { value: "UTC+3", label: "UTC+3" },
  { value: "UTC+4", label: "UTC+4" },
  { value: "UTC+5", label: "UTC+5" },
  { value: "UTC+6", label: "UTC+6" },
  { value: "UTC+7", label: "UTC+7" },
  { value: "UTC+8", label: "UTC+8" },
  { value: "UTC+9", label: "UTC+9" },
  { value: "UTC+10", label: "UTC+10" },
  { value: "UTC+11", label: "UTC+11" },
  { value: "UTC+12", label: "UTC+12" },
  { value: "UTC+13", label: "UTC+13" },
  { value: "UTC+14", label: "UTC+14" }
];
