/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

export const Delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export const logLevelFromStr = (log: string): number => {
  const logCased = log.toLowerCase()
  switch (logCased) {
    case "debug": {
      return 1
    }

    case "info": {
      return 2
    }

    case "warn": {
      return 3
    }

    case "error": {
      return 4
    }
  }
}
