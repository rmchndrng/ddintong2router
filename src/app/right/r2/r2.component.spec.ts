/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { R2Component } from './r2.component';

describe('Component: L2', () => {
  it('should create an instance', () => {
    let component = new R2Component();
    expect(component).toBeTruthy();
  });
});
