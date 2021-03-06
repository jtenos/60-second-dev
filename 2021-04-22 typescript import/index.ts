import Person from "./first.ts";
import * as second from "./second.ts";
import { Tablet, showTablet } from "./third.ts";
import Account, { Customer } from "./fourth.ts";
import face from "https://deno.land/x/ascii_faces@v1.0.0/mod.ts";
import moment from "./node_modules/moment/dist/moment.js";

const p = new Person(34, "Mookie");
p.hello();

const c = new second.Car("Chevy", "Malibu");
c.go();

const s = new second.Shoe(15, "Running");
s.run();

second.kickCar(s, c);

const t = new Tablet("iOS", 9);
showTablet(t);

const a = new Account(123, 456);
const cust = new Customer("Joe");
console.log(a);
console.log(cust);

console.log(face());

console.log(moment().format("YYYYMMDD"));
