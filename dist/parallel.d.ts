/* tslint:disable */
/**
 * This file was automatically generated */

import {StateMachine} from "./state-machine";
import {State} from "./state";
import {Choice} from "./choice";
import {Fail} from "./fail";
import {Pass} from "./pass";
import {Succeed} from "./succeed";
import {Task} from "./task";
import {Wait} from "./wait";
import {Map} from "./map";

export interface Parallel {
  Type: string;
  Next?: string;
  End?: true;
  Comment?: string;
  OutputPath?: string | null;
  InputPath?: string | null;
  ResultPath?: string | null;
  Branches: {
    [k: string]: any;
  }[];
  Retry?: {
    ErrorEquals: {
      [k: string]: any;
    }[];
    IntervalSeconds?: number;
    MaxAttempts?: number;
    BackoffRate?: number;
    [k: string]: any;
  }[];
  Catch?: {
    ErrorEquals: {
      [k: string]: any;
    }[];
    Next: string;
    [k: string]: any;
  }[];
}
