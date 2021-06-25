/**
 * Only differense between these two objects is
 * if some field defined inside `mandatoryConstants` - it should have
 * value (even not null)
 */
const mandatoryConstants = {
  ipstackAccessKey: process.env.IP_STACK_KEY,
  weatherImagesDomain: "http://openweathermap.org",
};

const optionalConstants = {
  debugIpAddress: process.env.DEBUG_IP_ADDRESS,
  importantCities: [
    "New York",
    "London",
    "Berlin",
    "Vienna",
    "Moscow",
    "Tokyo",
    "Beijin",
  ],
};

Object.keys(mandatoryConstants).forEach((constant) => {
  if (!(mandatoryConstants as Record<string, string>)[constant])
    throw `Please set up '${constant}' in mandatory constants. It it should be imported from env - create .env file and set it up there`;
});

export { mandatoryConstants, optionalConstants };
