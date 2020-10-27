import chalk from "chalk"
import { logLevelFromStr } from "../util"
import * as Config from "../../config.json"

on("onClientResourceStart", () => {
  // Show or continue hiding the RDR3 map
  SetMinimapHideFow(Config.utilities.clearMap)
})

on("utilities:logClient", (event: LogEvent) => {
  const
    logLevel = logLevelFromStr(event.level),
    configLevel = logLevelFromStr(Config.utilities.logLevel.client)

  if (configLevel <= logLevel) {
    console.log(chalk.redBright(
      chalk.red(chalk.bold(`[${event.title || "Client"}]:`)),
      event.output
    ))
  }
})

