/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { B3Component } from './b3.component';

describe('Component: B3', () => {
  it('should create an instance', () => {
    let component = new B3Component();
    expect(component).toBeTruthy();
  });
});
