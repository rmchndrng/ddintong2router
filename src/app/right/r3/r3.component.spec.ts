/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { R3Component } from './r3.component';

describe('Component: L3', () => {
  it('should create an instance', () => {
    let component = new R3Component();
    expect(component).toBeTruthy();
  });
});
