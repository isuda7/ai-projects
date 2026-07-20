import { renderToString } from "react-dom/server";
import { Popover, PopoverTrigger, PopoverContent } from "./src/components/ui/popover.js";
import React from "react";
// We just want to see if the classes match or if there is a conflict.
// Actually running this in Node requires Babel/TypeScript or ts-node because they are .tsx files.
