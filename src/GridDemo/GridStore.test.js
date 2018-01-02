import React from 'react';
import {GridModel} from './GridStore';

it('calculates rows correctly', () => {
  var gm = new GridModel();
  var rowView = gm.rowSums;
  expect(rowView.length).toBe(4);
  expect(rowView[0].sum).toBe(26);
  expect(rowView[2].avg).toBe(10.5);
});

it('handles zeros', () => {
  var gm = new GridModel();
  gm.data = {'rows':[ { 'a': 0, 'b': 0, 'c': 0, 'd': 0 }, { 'a': 0, 'b': 0, 'c': 0, 'd': 0 },
                      { 'a': 0, 'b': 0, 'c': 0, 'd': 0 }, { 'a': 0, 'b': 0, 'c': 0, 'd': 0 }]};
  var rowView = gm.rowSums;
  expect(rowView.length).toBe(4);
  expect(rowView[0].sum).toBe(0);
  expect(rowView[1].count).toBe(4);
  expect(rowView[2].avg).toBe(0);  
});

it('handles non-numerics', () => {
  var gm = new GridModel();
  gm.data = {'rows': [ { 'a': null, 'b': 1, 'c': 1, 'd': 1 }, { 'a': 1, 'b': 'zed', 'c': 1, 'd': 1 },
                       { 'a': 1, 'b': 1, 'c': '', 'd': 1 },   { 'a': 1, 'b': 1, 'c': 1, 'd': 'boom' }]};
  var rowView = gm.rowSums;
  expect(rowView.length).toBe(4);
  expect(rowView[0].sum).toBe(3);
  expect(rowView[1].count).toBe(3);
  expect(rowView[2].avg).toBe(0.75); // the '' converts to zero.  Because javascript.
  expect(rowView[3].sum).toBe(3);
});
