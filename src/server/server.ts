import chalk from "chalk"
import { logLevelFromStr } from "../util"
import * as Config from "../../config.json"

on("utilities:logServer", (event: LogEvent) => {
  const
    logLevel = logLevelFromStr(event.level),
    configLevel = logLevelFromStr(Config.utilities.logLevel.server)

  if (configLevel <= logLevel) {
    console.log(chalk.redBright(
      chalk.blueBright(chalk.bold(`[${event.title || "Client"}]:`)),
      event.output
    ))
  }
})
