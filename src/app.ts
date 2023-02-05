import { Container } from "inversify"
import { TYPES } from "./types.js"
import { IEcho } from "./services/echo.js"
import { Logger } from "pino"
import esMain from "es-main"

export default async function main(
  appContainer: Container,
  message: string
): Promise<string> {
  const echoService = appContainer.get<IEcho>(TYPES.Services.Echo)
  const log = appContainer.get<Logger>(TYPES.Logger)
  const result = await echoService.echo(message)
  log.info(`Response ${result}`)
  return result
}

if (esMain(import.meta)) {
  const appContainer = (await import("./inversify.config"))
    .appContainer as Container
  const log = appContainer.get<Logger>(TYPES.Logger)
  main(appContainer, "test")
    .then(() => {
      log.info("Finished")
    })
    .catch((err) => {
      log.error(err, `Error while running: ${err.message}`)
    })
}
