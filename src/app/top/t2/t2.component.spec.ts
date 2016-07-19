/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { T2Component } from './t2.component';

describe('Component: T2', () => {
  it('should create an instance', () => {
    let component = new T2Component();
    expect(component).toBeTruthy();
  });
});
