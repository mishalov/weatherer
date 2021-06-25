interface ICity extends ICityBasic {
  city: string;
  continent_code: string;
  country_name: string;
  location: { country_flag: string; country_flag_emoji: string };
  region_name: string;
  type: string;
  success?: false;
  error?: TCityErrorObject;
}
