/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { B1Component } from './b1.component';

describe('Component: L1', () => {
  it('should create an instance', () => {
    let component = new B1Component();
    expect(component).toBeTruthy();
  });
});
