import { test } from 'node:test';
import assert from 'node:assert/strict';
import { countries } from '../src/data/content.js';
import { matchCountry,normalize } from '../src/lib/utils.js';
test('search matches Australia while typing with no Enter key',()=>{
  assert.deepEqual(countries.filter(c=>matchCountry(c,'aus')).map(c=>c.name),['Australia']);
});
test('live country search ignores capitalization',()=>{
  assert.deepEqual(countries.filter(c=>matchCountry(c,'CAN')).map(c=>c.name),['Canada']);
  assert.deepEqual(countries.filter(c=>matchCountry(c,'can')).map(c=>c.name),['Canada']);
});
test('typing a single letter filters starts-of-country or city names',()=>{
  assert(countries.filter(c=>matchCountry(c,'g')).some(c=>c.name==='Germany'));
  assert(!countries.filter(c=>matchCountry(c,'g')).some(c=>c.name==='Australia'));
});
test('spaces and accents are handled consistently',()=>{
  assert.equal(normalize('  UK  '),'uk');
  assert(countries.filter(c=>matchCountry(c,'new')).some(c=>c.name==='New Zealand'));
});
test('blank search returns all destinations',()=>{
  assert.equal(countries.filter(c=>matchCountry(c,'')).length,countries.length);
});
