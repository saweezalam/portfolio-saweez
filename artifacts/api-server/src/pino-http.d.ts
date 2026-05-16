declare module "pino-http" {
  import type { Logger } from "pino";
  import type { Request, Response, NextFunction } from "express";

  interface PinoHttpOptions {
    logger?: Logger;
    serializers?: {
      req?: (req: Request) => any;
      res?: (res: Response) => any;
    };
    [key: string]: any;
  }

  function pinoHttp(options?: PinoHttpOptions): (req: Request, res: Response, next: NextFunction) => void;

  export default pinoHttp;
}
