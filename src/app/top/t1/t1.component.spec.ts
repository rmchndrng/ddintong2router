/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';

import { T1Component } from './t1.component';

describe('Component: T1', () => {
  it('should create an instance', () => {
    let component = new T1Component();
    expect(component).toBeTruthy();
  });
});
