/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { T3Component } from './t3.component';

describe('Component: T3', () => {
  it('should create an instance', () => {
    let component = new T3Component();
    expect(component).toBeTruthy();
  });
});
