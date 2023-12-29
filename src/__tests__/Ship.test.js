import {Ship} from '../components/Ship.js';

test("hit() and isSunk() : increases hit count and marks the ship as sunk when it matches length",()=>{
  const ship = new Ship(3,"carrier");
  expect(ship.no_of_hits).toBe(0);
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  expect(ship.no_of_hits).toBe(1);
  expect(ship.isSunk()).toBe(false);
  ship.hit();
  ship.hit();
  expect(ship.no_of_hits).toBe(3);
  expect(ship.isSunk()).toBe(true);
})

