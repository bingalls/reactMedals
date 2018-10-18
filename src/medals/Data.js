// noinspection ES6CheckImport, NpmUsedModulesInstalled
import {reverse, sortBy} from "lodash";

class Data {
  /**
   * Top Olympic medal count, most first. Ties are sorted by nesting next level
   * @example 2 countries with tied Gold & Silver counts tries Total medals, then Bronze
   * @param {Array} list Country medal objects
   * @param {String} key Default 'gold'
   * @returns {Array} Country medal objects
   */
  static sort(list, key) {
    switch(key) {
      case 'bronze':
        return reverse(sortBy(list, ['bronze', 'gold', 'total', 'silver']));
      case 'silver':
        return reverse(sortBy(list, ['silver', 'gold', 'total', 'bronze']));
      case 'total':
        return reverse(sortBy(list, ['total', 'gold', 'silver', 'bronze']));
      default:
        return reverse(sortBy(list, ['gold', 'silver', 'total', 'bronze']));
    }
  }

  /**
   * Add a total column to an array of Olympic Medal objects
   * Also sanitizes data.
   * @param {Array} list Country medal objects
   * @returns {Array} Country medal objects
   */
  static totals(list) {
    return list.map((country) => ({
      "code": country.code.substr(0,3),     // sanitize data
      "gold": parseInt(country.gold, 10),
      "silver": parseInt(country.silver, 10),
      "bronze": parseInt(country.bronze, 10),
      "total": parseInt(country.gold + country.silver + country.bronze, 10)
    }))
  }
}

export default Data;
