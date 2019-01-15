/// <reference types="node" />
import * as express from 'express';
import * as http from 'http';
export interface IExpressApp {
    express: express.Application;
    server: http.Server;
    apiRouter: express.Router;
    start(): Promise<void>;
}
