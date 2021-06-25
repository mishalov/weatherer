/**
 * Alias for process.env.NODE_ENV === "development" ? X : Y
 *
 * @param inDev What value should be in development env
 * @param otherCases Default value if NODE_ENV !== "development"
 */
const inDevelopmentOnly = <InDevType, OtherCasesType>(
  inDev: InDevType,
  otherCases: OtherCasesType
) => (process.env.NODE_ENV === "development" ? inDev : otherCases);

export default inDevelopmentOnly;
