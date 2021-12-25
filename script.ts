#!/usr/bin/node
import { $, ProcessOutput } from "zx";

$.verbose = false;
const list: ProcessOutput = await $`ls -la`;
console.log(list);
